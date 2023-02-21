import Block from 'core/Block'
import './add-user.scss'
import { AddUserProps } from './types'
import store, { State } from '../../../utils/Store'
import ChatController from '../../../controllers/ChatController'
import { FindUserRequest } from '../../../api/types'
import connect from '../../../HOCs/connect'
import { isBadRequest } from '../../../controllers/utils'

const userFields = [
  {
    labelText: 'Логин',
    name: 'login',
  }
]
class AddUser extends Block {
  static componentName = 'AddUser'
  constructor(props: AddUserProps = {} as AddUserProps) {
    super({
      ...props,
      fields: userFields,
      handleModalClose: () => this.handleModalClose(),
      handleAddUserModalSubmit: (login: FindUserRequest) => this.handleAddUserModalSubmit(login),
    })
  }

  handleModalClose() {
    store.set('modalAddUser', false)
  }

  async handleAddUserModalSubmit(login: FindUserRequest) {
    const { activeChatId } = this.props
    const users = await ChatController.searchUser(login)

    if(isBadRequest(users)) {
      return
    }

    if(!users.length) {
      return
    }

    const firstUserId = users?.[0]?.id

    await ChatController.addUserToChat({ users: [firstUserId], chatId: activeChatId })
  }

  render() {
    const { modalAddUser } = this.props
    // language=hbs
    return `
        <div class="modal modal-form {{className}} ${modalAddUser ? 'modal_open' : ''}">
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
                            text="Добавить пользователя"
                    }}}
                    <div class="modal__content">
                        {{{Form
                                className="modal__form"
                                fields=fields
                                submitButtonClassname="modal__button"
                                buttonText="Добавить"
                                onSubmit=handleAddUserModalSubmit
                        }}}
                    </div>
                </div>
            </div>
        </div>
    `
  }
}

const mapStateToProps = (state: State) => ({
  activeChatId: state.activeChatId,
  modalAddUser: state.modalAddUser
})

export default connect(mapStateToProps)(AddUser)
