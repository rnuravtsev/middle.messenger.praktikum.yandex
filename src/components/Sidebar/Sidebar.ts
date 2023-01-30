import Block from 'core/Block';
import './sidebar.scss';

type SidebarProps = {
  className: string,
}


class Sidebar extends Block {
  static componentName = 'Sidebar';
  constructor(props: SidebarProps) {
    super(props);
  }


    render() {
    //TODO: застилизовать скроллбар
    // language=hbs
    return `
        <aside class="sidebar {{className}}">
            <a class="sidebar__link" href="#">Профиль &gt;</a>
            {{{Input
                    className="sidebar__search input input_type_search"
                    type="search"
                    placeholder="Поиск"
            }}}
            {{{ChatList}}}
        </aside>
    `
  }
}

export default Sidebar;
