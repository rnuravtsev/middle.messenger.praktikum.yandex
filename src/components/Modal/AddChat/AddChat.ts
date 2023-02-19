import Block from 'core/Block'
import './add-chat.scss'
import { AddChatProps } from './types'
import store, { State } from '../../../utils/Store'
import connect from '../../../HOCs/connect'
import ChatController from '../../../controllers/ChatController'
import { createChatRequest } from '../../../api/types'

const modalFields = [
  {
    labelText: 'Название чата',
    name: 'new_chat_name',
  },
]

class AddChat extends Block {
  static componentName = 'ModalForm'

  constructor(props: AddChatProps = {} as AddChatProps) {
    super({
      ...props,
      fields: modalFields,
      handleModalClose: () => this.handleModalClose(),
      handleSubmit: ({ title }: createChatRequest) => this.handleSubmit({ title }),
    })
  }

  handleModalClose() {
    store.set('modalAddChat', false)
  }

  async handleSubmit({ title }: createChatRequest) {
    await ChatController.createChat({ title })
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
                                onSubmit=onSubmit
                        }}}
                    </div>
                </div>
            </div>
        </div>
    `
  }
}

const mapStateToProps = (state: State) => ({
  modalAddChat: state.modalAddChat,
})

export default connect(mapStateToProps)(AddChat)
