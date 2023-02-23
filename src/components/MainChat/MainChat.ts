import Block from 'core/Block'
import './main-chat.scss'
import { ChatPageProps } from './types'
import connect from '../../HOCs/connect'
import MessagesController from '../../controllers/MessagesController'
import { State } from '../../utils/Store'

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

class MainChat extends Block {
  static componentName = 'MainChat'

  constructor(props: ChatPageProps = {} as ChatPageProps) {
    super(props)

    this.setProps({
      fields,
      onSubmit: (e: Event) => this.onSubmit(e),
    })
  }


  async onSubmit(data: unknown) {
    const { activeChatId } = this.props

    const { message } = data as { message: string }
    await MessagesController.sendMessage(activeChatId, message)
  }

  render() {
    // language=hbs
    return `
        <section class="chat-page {{className}}">
            <header class="chat-page__header">
                <img class="chat-page__img" src="#" alt="Аватар профиля">
                <h3 class="chat-page__title">{{author}}</h3>
                {{{Extra
                        className="chat-page__extra"
                }}}
            </header>
            <div class="chat-page__chat">
                {{{Chat}}}
            </div>
            <footer class="chat-page__footer">
                {{{Form
                        className="chat-page__form"
                        inputClassName="chat-page__input"
                        fields=fields
                        gridType="row"
                        submitButtonClassname="chat-page__submit"
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
