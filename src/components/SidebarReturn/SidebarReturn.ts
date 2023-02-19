import Block from 'core/Block'
import './sidebar-return.scss'
import Router from '../../core/Router/Router'
import { SidebarReturnProps } from './types'

class SidebarReturn extends Block {
  static componentName = 'SidebarReturn'

  constructor(props: SidebarReturnProps) {
    super({
      ...props,
      handleButtonClick: () => this.handleButtonClick(),
    })
  }


  handleButtonClick() {
    Router.back()
  }

  render() {
    // language=hbs
    return `
        <div class="sidebar-return {{className}}">
            {{{Button
                    type="round"
                    label="<-"
                    onClick=handleButtonClick
            }}}
        </div>
    `
  }
}

export default SidebarReturn
