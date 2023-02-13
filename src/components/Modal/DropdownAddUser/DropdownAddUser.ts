import Block from 'core/Block'
import './dropdown-add-user.scss'
import { DropdownAddUserProps } from './types'
import ChatController from '../../../controllers/ChatController'
import { UsersRequestData } from '../../../api/ChatAPI/types'
import withStore from '../../../HOCs/withStore'
import store, { State } from '../../../utils/Store'
import { Modal } from '../ModalForm/ModalForm'

const userFields = [
  {
    labelText: 'Логин',
    name: 'login',
  }
]

class DropdownAddUser extends Block {
  static componentName = 'DropdownAddUser'

  constructor(props: DropdownAddUserProps = {} as DropdownAddUserProps) {
    super({
      ...props,
      modalFields: userFields,
      handleAddUserButtonClick: () => this.handleAddUserButtonClick(),
      handleDeleteUserButtonClick: () => this.handleDeleteUserButtonClick(),
      handleAddUserModalSubmit: (user: UsersRequestData) => this.handleAddUserModalSubmit(user),
    })
  }

  handleAddUserButtonClick() {
    store.set('modal' , { name: Modal.AddUser, isOpen: true })
  }

  handleDeleteUserButtonClick() {
    store.set('modal', { name: Modal.DeleteUser,  isOpen: true })
  }

  async handleAddUserModalSubmit(data: UsersRequestData) {
    const { activeChatId } = this.props
    // TODO: мы должны получать id пользователя по его логину и передать его в users
    await ChatController.addUserToChat({ users: [0], chatId: activeChatId })
  }

  async handleDeleteModalUserSubmit(data: UsersRequestData) {
    const { activeChatId } = this.props
    // TODO: мы должны получать id пользователя по его логину и передать его в users
    await ChatController.deleteUserFromChat({ users: [0], chatId: activeChatId })
  }

  render() {
    // language=hbs
    return `
        <div class="dropdown dropdown-add-user {{className}} {{#if isOpen}}dropdown_open{{/if}}">
            <div class="dropdown__content">
                {{{Button
                      className="dropdown__button"
                      label="Добавить пользователя"
                      type="icon"
                      icon="circle-plus"
                      onClick=handleAddUserButtonClick
                }}}
                {{{Button
                      className="dropdown__button"
                      label="Удалить пользователя"
                      type="icon"
                      icon="circle-cross"
                      onClick=handleDeleteUserButtonClick
                }}}
            </div>
            {{{ModalForm
                    title="Добавить пользователя"
                    fields=modalFields
                    buttonText="Добавить"
                    onClose=handleAddUserModalClose
                    onSubmit=handleAddUserModalSubmit
            }}}
            {{{ModalForm
                    title="Удалить пользователя"
                    fields=modalFields
                    buttonText="Удалить"
                    onClose=handleDeleteModalUserClose
                    onSubmit=handleDeleteModalUserSubmit
            }}}
        </div>
      `
  }
}

const mapStateToProps = (state: State) => ({
  activeChatId: state.activeChatId,
})

export default withStore(mapStateToProps)(DropdownAddUser)
