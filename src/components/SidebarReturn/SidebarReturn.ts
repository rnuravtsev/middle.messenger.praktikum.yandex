import Block from 'core/Block'
import './sidebar-return.scss'
import { SidebarReturnProps } from './types'
import withRouter from '../../HOCs/withRouter'

class SidebarReturn extends Block {
  static componentName = 'SidebarReturn'

  constructor(props: SidebarReturnProps) {
    super({
      ...props,
      handleButtonClick: () => this.handleButtonClick(),
    })
  }


  handleButtonClick() {
    this.props.router.back()
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

export default withRouter(SidebarReturn)
