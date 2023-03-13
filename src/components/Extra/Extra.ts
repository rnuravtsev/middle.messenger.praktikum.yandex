import Block from 'core/Block/Block'
import './extra.scss'
import { ExtraProps } from './types'

class Extra extends Block {
  static componentName = 'Extra'

  constructor(props: ExtraProps = {} as ExtraProps) {
    super({
      ...props,
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
                    className="extra__button"
                    type="icon"
                    icon="menu"
                    color="main"
                    onClick=handleExtraClick
            }}}
            {{{DropdownAddUser
                    className="extra__dropdown"
                    isOpen=isExtraDropdownOpen
            }}}

        </div>
      `
  }
}

export default Extra
