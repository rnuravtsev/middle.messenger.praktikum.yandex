import Block from 'core/Block'
import './sidebar.scss'
import store from '../../utils/Store'
import { SidebarProps } from './types'
import { Modal } from '../Modal/types'

const inputs = [{
  name: 'search',
  type: 'search',
}]


class Sidebar extends Block {
  static componentName = 'Sidebar'

  constructor(props: SidebarProps) {
    super({
      ...props,
      inputs,
      handleClick: () => this.handleClick(),
    })
  }

  handleClick() {
    store.set('modalAddChat', true)
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
            </div>
            {{{ChatList}}}
            {{{AddChat}}}
        </div>
    `
  }
}

export default Sidebar
