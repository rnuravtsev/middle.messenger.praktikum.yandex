import { AppState, Store } from '../core/Store/Store'
import * as components from '../components/exports'
import registerComponent from '../core/registerComponent'
import renderDOM from '../core/renderDOM'
import { sleep } from '../helpers/helpers'
import { Router } from '../core/Router/Router'

type RenderBlockParams<T> = {
  Block: BlockClass,
  props: T,
  state?: Partial<AppState>
}

export async function renderBlock<T extends Record<string, unknown>>({ Block, props, state }: RenderBlockParams<T>) {
  Object.values(components).forEach((Component: any) => registerComponent(Component))
  initTestStore({ ...state })
  document.body.innerHTML = '<div id="app"></div>'

  renderDOM(new Block(props as T))

  initTestRouter('#app')

  await sleep()
}

export const step = async (name: string, cb: () => unknown) => {
  console.log('Run step:', name)
  await cb()
}

export const initTestStore = (appState: AppState) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  window.store = new Store(appState)
}

export const initTestRouter = (rootEl: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  window.router = new Router(rootEl)
}
