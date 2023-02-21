import Block from 'core/Block'
import './delete-user.scss'
import { DeleteUserProps } from './types'
import store, { State } from '../../../utils/Store'
import connect from '../../../HOCs/connect'
import ChatController from '../../../controllers/ChatController'
import { FindUserRequest } from '../../../api/types'

const userFields = [
  {
    labelText: 'Логин',
    name: 'login',
  }
]
class DeleteUser extends Block {
  static componentName = 'DeleteUser'
  constructor(props: DeleteUserProps = {} as DeleteUserProps) {
    super({
      ...props,
      fields: userFields,
      handleModalClose: () => this.handleModalClose(),
      handleDeleteModalUserSubmit:
        (login: FindUserRequest) => this.handleDeleteModalUserSubmit(login),
    })
  }

  handleModalClose() {
    store.set('modalDeleteUser', false)
  }

  async handleDeleteModalUserSubmit(login: FindUserRequest) {
    const { activeChatId } = this.props
    const user = await ChatController.searchUser(login)
    const firstUserId = user[0].id

    await ChatController.deleteUserFromChat({ users: [firstUserId], chatId: activeChatId })
  }

  render() {
    const { modalDeleteUser } = this.props
    // language=hbs
    return `
        <div class="modal modal-form {{className}} ${modalDeleteUser ? 'modal_open' : ''}">
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
                            text="Удалить пользователя"
                    }}}
                    <div class="modal__content">
                        {{{Form
                                className="modal__form"
                                fields=fields
                                submitButtonClassname="modal__button"
                                buttonText="Удалить"
                                onSubmit=handleDeleteModalUserSubmit
                        }}}
                    </div>
                </div>
            </div>
        </div>
    `
  }
}

const mapStateToProps = (state: State) => ({
  modalDeleteUser: state.modalDeleteUser,
  activeChatId: state.activeChatId,
})

export default connect(mapStateToProps)(DeleteUser)
