import Block from 'core/Block'
import './context-menu.scss'
import { ContextMenuProps } from './types'
import ChatController from '../../controllers/ChatController'

class ContextMenu extends Block {
  static componentName = 'ContextMenu'

  constructor(props: ContextMenuProps = {} as ContextMenuProps) {
    super({
      ...props,
      handleDeleteChat: (e: Event) => this.handleDeleteChat(e),
    })
  }

  async handleDeleteChat(e:  Event) {
    e.stopPropagation()

    const { chatId } = this.props
    await ChatController.deleteChat(chatId)
  }

  render() {
    // language=hbs
    return `
        <div class="context-menu
            {{className}}
            {{#if isShown}}context-menu_open{{/if}}
        ">
            <ul class="context-menu__list">
                <li class="context-menu__item">
                    {{{Button
                            className="context-menu__button"
                            type="icon"
                            label="Удалить чат"
                            icon="trash"
                            color="negative"
                            onClick=handleDeleteChat
                    }}}
                </li>
            </ul>
        </div>
    `
  }
}

export default ContextMenu
