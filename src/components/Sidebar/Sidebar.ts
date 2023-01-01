import Block from "core/Block";
import './sidebar.scss';

type SidebarProps = {

}


class Sidebar extends Block {
  constructor(props: SidebarProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <aside class="sidebar">
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
