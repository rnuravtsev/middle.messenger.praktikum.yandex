import { nanoid } from 'nanoid'
import Handlebars from 'handlebars'
import { EventBus } from '../EventBus'
import { isEqual } from 'helpers/helpers'


interface BlockMeta<P = any> {
  props: P;
}

export default class Block<P extends Indexed = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_SCU: 'flow:should-component-update',
    FLOW_RENDER: 'flow:render',
  } as const
  static componentName: string

  public id = nanoid(6)
  protected readonly _meta: BlockMeta

  protected _element: Nullable<HTMLElement> = null
  protected readonly props: P
  protected children: { [id: string]: Block } = {}

  eventBus: () => EventBus

  protected state: any = {}
  protected refs: { [key: string]: Block } = {}

  public constructor(props?: P) {
    const eventBus = new EventBus()

    this._meta = {
      props,
    }

    this.getStateFromProps(props)

    // TODO: Доработать типизацию
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.props = this._makePropsProxy(props || {} as P)
    this.state = this._makePropsProxy(this.state)

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.INIT, this.props)
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_SCU, this._shouldComponentUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  _createResources() {
    this._element = this._createDocumentElement('div')
  }

  protected getStateFromProps(newProps: any): void {
    this.state = {
      ...this.state,
      ...newProps,
    }
  }

  protected init() {
    this._createResources()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props)
  }

  private _componentDidMount() {
    this.componentDidMount()
  }

  protected componentDidMount() {
    console.log('911.', 'componentDidMount')
  }

  private _shouldComponentUpdate(oldProps: P, newProps: P) {
    if (this.shouldComponentUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  protected shouldComponentUpdate(oldProps: P, newProps: P) {
    return !isEqual(oldProps, newProps)
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  protected setState = (nextState: any) => {
    if (!nextState) {
      return
    }

    Object.assign(this.state, nextState)
  }

  get element() {
    return this._element
  }

  private _render() {
    const fragment = this._compile()

    this._removeEvents()
    const newElement = fragment.firstElementChild!

    this._element!.replaceWith(newElement)

    this._element = newElement as HTMLElement
    this._addEvents()
  }

  protected render(): string {
    return ''
  }

  getContent(): HTMLElement {
    // Хак, чтобы вызвать CDM только после добавления в DOM
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
          this.eventBus().emit(Block.EVENTS.FLOW_CDM)
        }
      }, 100)
    }

    return this.element!
  }

  _makePropsProxy(props: P) {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this

    return new Proxy(props, {
      get(target: Indexed, prop: string) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target: Indexed, prop: string, value) {
        // Shallow equal
        const oldTarget = { ...target }
        target[prop] = value

        self.eventBus().emit(Block.EVENTS.FLOW_SCU, oldTarget, target)
        return true
      },
      deleteProperty() {
        throw new Error('Нет доступа')
      }
    })
  }
  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName)
  }

  private _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events

    if (!events || !this._element) {
      return
    }


    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener)
    })
  }

  private _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events

    if (!events) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener)
    })
  }

  private _compile(): DocumentFragment {
    const fragment = document.createElement('template')

    /**
     * Рендерим шаблон
     */
    const template = Handlebars.compile(this.render())
    fragment.innerHTML = template({
      ...this.state,
      ...this.props,
      children: this.children,
      refs: this.refs
    })

    /**
     * Заменяем заглушки на компоненты
     */
    Object.entries(this.children).forEach(([id, component]) => {
      /**
       * Ищем заглушку по id
       */
      const stub = fragment.content.querySelector(`[data-id="${id}"]`)

      if (!stub) {
        return
      }

      const stubChilds = stub.childNodes.length ? stub.childNodes : []

      /**
       * Заменяем заглушку на component._element
       */
      const content = component.getContent()
      stub.replaceWith(content)

      /**
       * Ищем элемент layout-а, куда вставлять детей
       */
      const layoutContent = content.querySelector('[data-layout="1"]')

      if (layoutContent && stubChilds.length) {
        layoutContent.append(...stubChilds)
      }
    })

    /**
     * Возвращаем фрагмент
     */
    return fragment.content
  }
}
