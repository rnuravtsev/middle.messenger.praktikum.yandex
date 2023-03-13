import Block from 'core/Block/Block'
import './add-chat.scss'
import { AddChatProps } from './types'
import store, { AppState } from '../../../core/Store/Store'
import connect from '../../../HOCs/connect'
import ChatController from '../../../controllers/ChatController'


type AddChatPayload = {
  new_chat_name: string
}

const modalFields = [
  {
    labelText: 'Название чата',
    name: 'new_chat_name',
  },
]

class AddChat extends Block {
  static componentName = 'AddChat'

  constructor(props: AddChatProps = {} as AddChatProps) {
    super({
      ...props,
      fields: modalFields,
      handleModalClose: () => this.handleModalClose(),
      handleSubmit: (data: AddChatPayload) => this.handleSubmit(data),
    })
  }

  handleModalClose() {
    store.set('modalAddChat', false)
  }

  async handleSubmit({ new_chat_name }: AddChatPayload) {
    await ChatController.createChat({ title: new_chat_name })
    await ChatController.getChats()
  }

  render() {
    const { modalAddChat } = this.props

    // language=hbs
    return `
        <div class="modal modal-form {{className}} ${modalAddChat && 'modal_open'}">
            <div class="modal__backdrop">
                <div class="modal__body">
                    {{{Button
                            className="modal__close"
                            color="gray"
                            type="icon"
                            icon="xmark"
                            onClick=handleModalClose
                    }}}
                    {{{Subtitle
                            className="modal__subtitle"
                            text="Добавить чат"
                    }}}
                    <div class="modal__content">
                        {{{Form
                                className="modal__form"
                                fields=fields
                                submitButtonClassname="modal__button"
                                buttonText="Добавить"
                                onSubmit=handleSubmit
                        }}}
                    </div>
                </div>
            </div>
        </div>
    `
  }
}

const mapStateToProps = (state: AppState) => ({
  modalAddChat: state.modalAddChat,
})

export default connect(mapStateToProps)(AddChat)
