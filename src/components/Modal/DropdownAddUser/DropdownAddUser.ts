import Block from 'core/Block';
import './dropdown-add-user.scss';
import { DropdownAddUserProps } from './types'
import ChatController from '../../../controllers/ChatController';
import { UsersRequestData } from '../../../api/ChatAPI/types';
import withStore from '../../../HOCs/withStore';

const userFields = [
  {
    labelText: 'Логин',
    name: 'login',
  }
]

class DropdownAddUser extends Block {
  static componentName = 'DropdownAddUser';

  constructor(props: DropdownAddUserProps = {} as DropdownAddUserProps) {
    super(props);

    this.setState({
      isAddUserModalOpen: false,
      isDeleteUserModalOpen: false,
    })

    this.setProps({
      modalFields: userFields,
      handleAddUserButtonClick: () => this.handleAddUserButtonClick(),
      handleDeleteUserButtonClick: () => this.handleDeleteUserButtonClick(),
      handleAddUserModalSubmit: (user: UsersRequestData) => this.handleAddUserModalSubmit(user),
    })
  }

  handleAddUserButtonClick() {
    this.setState({
      isAddUserModalOpen: true,
    })
  }

  handleDeleteUserButtonClick() {
    this.setState({
      isDeleteUserModalOpen: true,
    })
  }

  async handleAddUserModalSubmit(data: UsersRequestData) {
    const { activeChatId } = this.props;
    // TODO: мы должны получать id пользователя по его логину и передать его в users
    await ChatController.addUserToChat({ users: [0], chatId: activeChatId })
  }

  async handleDeleteModalUserSubmit(data: UsersRequestData) {
    const { activeChatId } = this.props;
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
                    isOpen=isAddUserModalOpen
                    buttonText="Добавить"
                    onSubmit=handleAddUserModalSubmit
            }}}
            {{{ModalForm
                    title="Удалить пользователя"
                    fields=modalFields
                    isOpen=isDeleteUserModalOpen
                    buttonText="Удалить"
                    onSubmit=handleDeleteModalUserSubmit
            }}}
        </div>
      `
  }
}

const mapStateToProps = (store: any) => ({
  activeChatId: store.activeChatId,
})

export default withStore(mapStateToProps)(DropdownAddUser);
