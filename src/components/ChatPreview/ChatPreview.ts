import Block from 'core/Block'
import './chat-preview.scss'
import { ChatProps } from './types'
import store from '../../utils/Store'

class ChatPreview extends Block {
  static componentName = 'ChatPreview'

  constructor(props: ChatProps) {
    super({
      ...props,
      events: {
        click: () => this.handleClick(),
        contextmenu: (e: Event) => this.handleContextMenu(e),
      }
    })

    this.setState({
      isContextMenuOpen : false
    })
  }

  handleClick() {
    const { id } = this.props
    store.set('activeChatId', id)
  }

  handleContextMenu(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      isContextMenuOpen: !this.state.isContextMenuOpen
    })
  }

  render() {
    // language=hbs
    return `
        <div class="chat-preview">
            <img
                    class="chat-preview__avatar"
                    src="{{avatar}}"
                    alt="Аватар профиля">
            {{{MessagePreview
                    className="chat-preview__message"
                    title=title
                    message=content
            }}}
            <div class="chat-preview__additional">
                {{#if time}}
                    <span class="chat-preview__time">{{time}}</span>
                {{/if}}
                {{#if unread_count}}
                    <span class="chat-preview__counter">{{unread_count}}</span>
                {{/if}}
            </div>
            {{{ContextMenu
                    className="chat-preview__context-menu"
                    isShown=isContextMenuOpen
                    chatId=id
            }}}
        </div>
    `
  }
}

export default ChatPreview
