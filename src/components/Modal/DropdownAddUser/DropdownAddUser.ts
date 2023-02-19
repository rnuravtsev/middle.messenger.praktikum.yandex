import Block from 'core/Block'
import './dropdown-add-user.scss'
import { DropdownAddUserProps } from './types'
import connect from '../../../HOCs/connect'
import store, { State } from '../../../utils/Store'

class DropdownAddUser extends Block {
  static componentName = 'DropdownAddUser'

  constructor(props: DropdownAddUserProps = {} as DropdownAddUserProps) {
    super({
      ...props,
      handleAddUserButtonClick: () => this.handleAddUserButtonClick(),
      handleDeleteUserButtonClick: () => this.handleDeleteUserButtonClick(),
    })
  }

  handleAddUserButtonClick() {
    store.set('modalAddUser', true)
  }

  handleDeleteUserButtonClick() {
    store.set('modalDeleteUser', true)
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
            {{{AddUser}}}
            {{{DeleteUser}}}
        </div>
      `
  }
}

const mapStateToProps = (state: State) => ({
  activeChatId: state.activeChatId,
})

export default connect(mapStateToProps)(DropdownAddUser)
