import Block from 'core/Block'
import './extra.scss'
import { ExtraProps } from './types'

class Extra extends Block {
  static componentName = 'Extra'

  constructor(props: ExtraProps = {} as ExtraProps) {
    super(props)

    this.setProps({
      handleExtraClick: () => this.handleExtraClick(),
    })

    this.setState({
      isExtraDropdownOpen: false,
    })
  }

  handleExtraClick() {
    this.setState({
      isExtraDropdownOpen: !this.state.isExtraDropdownOpen,
    })
  }

  render() {
    // language=hbs
    return `
        <div class="extra {{className}}">
            {{{Button
                    type="icon"
                    icon="menu"
                    color="main"
                    onClick=handleExtraClick
            }}}
            {{{DropdownAddUser
                    className="chat-page__dropdown"
                    isOpen=isExtraDropdownOpen
            }}}

        </div>
      `
  }
}

export default Extra
