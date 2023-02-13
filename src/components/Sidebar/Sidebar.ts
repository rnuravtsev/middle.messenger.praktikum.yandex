import Block from 'core/Block'
import './sidebar.scss'
import ChatController from '../../controllers/ChatController'
import { Modal } from '../Modal/ModalForm/ModalForm'
import store from '../../utils/Store'
import { SidebarProps } from './types'

const inputs = [{
  name: 'search',
  type: 'search',
}]

const modalFields = [
  {
    labelText: 'Название чата',
    name: 'new_chat_name',
  },
]


class Sidebar extends Block {
  static componentName = 'Sidebar'

  constructor(props: SidebarProps) {
    super({
      ...props,
      inputs,
      modalFields,
      handleClick: () => this.handleClick(),
      submit: (evt: Event) => this.handleSubmit(evt),
    })
  }

  handleClick() {
    store.set('modal', { name: Modal.AddChat, isOpen: true })
  }

  async handleSubmit(data: object) {
    await ChatController.createChat({ title: Object.values(data)[0] })
  }

  render() {
    //TODO: застилизовать скроллбар

    // language=hbs
    return `
        <div class="sidebar {{className}}">
            <div class="sidebar__header">
                {{{Link
                        className="sidebar__link"
                        href="/profile"
                        label="Профиль"
                        icon="chevron-forward"
                }}}
            </div>
            <div class="sidebar__flex-wrapper">
                {{{Input
                        className="sidebar__search input input_type_search"
                        type="search"
                        placeholder="Поиск"
                }}}
                {{{Button
                        className="sidebar__button button button_bg_gray"
                        type="icon"
                        icon="square-and-pencil"
                        onClick=handleClick
                }}}
                {{{ModalForm
                        isOpen=isModalOpen
                        fields=modalFields
                        className="modal"
                        title="Создать чат"
                        buttonText="Создать"
                        onSubmit=handleSubmit
                }}}
            </div>
            {{{ChatList}}}
        </div>
    `
  }
}

export default Sidebar
