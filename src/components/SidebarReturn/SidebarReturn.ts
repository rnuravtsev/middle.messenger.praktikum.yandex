import Block from 'core/Block'
import './sidebar-return.scss'

type SidebarReturnProps = {
  className: string,
}


class SidebarReturn extends Block {
  constructor(props: SidebarReturnProps) {
    super(props)

    this.setProps({
      handleButtonClick: () => this.handleButtonClick(),
    })
  }

  static componentName = 'SidebarReturn'

    handleButtonClick() {
    window.history.back()
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
