import Block from 'core/Block';
import './sidebar.scss';
import ChatController from '../../controllers/ChatController';

type SidebarProps = {
  className: string,
}

const inputs = [{
  name: 'search',
  type: 'search',
}];


class Sidebar extends Block {
  static componentName = 'Sidebar';

  constructor(props: SidebarProps) {
    super(props);

    this.setProps({
      inputs,
      events: {
        click: (evt: Event) => this.handleClick(evt),
        submit: (evt: Event) => this.onSubmit(evt),
      }
    })
  }

  handleClick(evt: Event) {
    // TODO: Событие вешается на все вложенные элементы,
    //  нужно сделать так, чтобы событие вешалось только на выбранный элемент
    const { currentTarget } = evt;

    if (currentTarget instanceof HTMLButtonElement) {
      this.toggleModal();
    }
  }

  async onSubmit(data: object) {
    // TODO: Нет возможности передать нужные данные в onSubmit
    const values = Object.values(data);
    await ChatController.createChat({ title: values[0] })
    this.toggleModal();
  }

  toggleModal() {
    this.setProps({
      isModalOpen: !this.props.isModalOpen
    })
  }

  render() {
    //TODO: застилизовать скроллбар

    // language=hbs
    return `
        <div class="sidebar {{className}}">
            <div class="sidebar__header">
                {{{Link href="/profile" className="sidebar__link" label="Профиль &gt;"}}}
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
                        onClick=events.click
                }}}
                {{{ModalForm
                        isOpen=isModalOpen
                        className="modal"
                        title="Создать чат"
                        buttonText="Создать"
                        onSubmit=events.submit
                }}}
            </div>
            {{{ChatList}}}
        </div>
    `
  }
}

export default Sidebar;
