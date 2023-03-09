import Block from 'core/Block/Block'
import './chat-preview.scss'
import { ChatProps } from './types'
import store, { AppState } from '../../core/Store/Store'
import { dateToHumanHoursAndMinutes } from '../../helpers/helpers'
import connect from '../../HOCs/connect'

const renderAvatar = (avatar: string, title: string) => {
  if (avatar) {
    return `
        <img
                class="chat-preview__avatar"
                src="https://ya-praktikum.tech/api/v2/resources${avatar}"
                alt="Аватар профиля">
    `
  }

  //language=hbs
  return `
      {{{EmptyAvatar
              className="chat-preview__avatar"
              userName="${title}"
      }}}
    `
}

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
      isContextMenuOpen: false
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
    const { message, title, id, activeChatId, currentUserLogin } = this.props
    const { content, time, user } = message || {}
    const { avatar, login } = user || {}

    const isActive = id === activeChatId

    const isMessagePreviewPrefix = login === currentUserLogin

    // language=hbs
    return `
        <div class="chat-preview ${isActive && 'chat-preview_active'}">
            ${renderAvatar(avatar, title)}
            {{{MessagePreview
                    prefix=${isMessagePreviewPrefix}
                    className="chat-preview__message"
                    title=title
                    message="${content ? content : ''}"
            }}}
            <div class="chat-preview__additional">
                {{#if message.time}}
                    <span class="chat-preview__time">${dateToHumanHoursAndMinutes(time)}</span>
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

const mapStateToProps = (state: AppState) => ({
  activeChatId: state?.activeChatId,
  currentUserLogin: state?.user?.data?.login,
})

export default connect(mapStateToProps)(ChatPreview)
