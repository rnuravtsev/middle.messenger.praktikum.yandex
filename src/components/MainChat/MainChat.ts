import Block from 'core/Block'
import './main-chat.scss'
import { ChatPageProps } from './types'
import connect from '../../HOCs/connect'
import MessagesController from '../../controllers/MessagesController'
import store, { State } from '../../utils/Store'
import { Chat } from '../../api/types'

const fields = [
  {
    name: 'file',
    type: 'file',
  },
  {
    name: 'message',
    type: 'text',
    placeholder: 'Введите сообщение',
  },
]

const renderAvatar = (avatar: string, title: string) => {
  if (avatar) {
    return `
        <img
                class="main-chat__img"
                src="https://ya-praktikum.tech/api/v2/resources${avatar}"
                alt="Аватар профиля">
    `
  }

  //language=hbs
  return `
      {{{EmptyAvatar
              className="main-chat__avatar"
              userName="${title}"
      }}}
    `
}

class MainChat extends Block {
  static componentName = 'MainChat'

  constructor(props: ChatPageProps = {} as ChatPageProps) {
    super({
      ...props,
      fields,
      onSubmit: (e: Event) => this.onSubmit(e),
    })
  }


  async onSubmit(data: unknown) {
    const { activeChatId } = this.props

    const { message } = data as { message: string }
    await MessagesController.sendMessage(activeChatId, message)
  }

  getActiveChatFromStore()  {
    const globalStoreChats = store.getState().chats?.data
    return globalStoreChats?.find((chat: Chat) => chat.id === this.props.activeChatId)
  }

  render() {
    const activeChat = this.getActiveChatFromStore()
    const chatAvatar = activeChat?.avatar || activeChat?.last_message?.user?.avatar
    const chatName = activeChat?.title

    // language=hbs
    return `
        <section class="main-chat {{className}}">
            <header class="main-chat__header">
                ${renderAvatar(chatAvatar, chatName)}
                <h3 class="main-chat__title">${chatName}</h3>
                {{{Extra
                        className="main-chat__extra"
                }}}
            </header>
            <div class="main-chat__chat">
                {{{Chat}}}
            </div>
            <footer class="main-chat__footer">
                {{{Form
                        className="main-chat__form"
                        inputClassName="main-chat__input"
                        fields=fields
                        gridType="row"
                        submitButtonClassname="main-chat__submit"
                        submitButtonType="round"
                        buttonText="->"
                        onSubmit=onSubmit
                }}}
            </footer>
        </section>
    `
  }
}

const mapStateToProps = (state: State) => ({
  activeChatId: state.activeChatId,
})

export default connect(mapStateToProps)(MainChat)
