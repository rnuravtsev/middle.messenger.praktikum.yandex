import Block from 'core/Block/Block'
import './logout.scss'
import { LogoutProps } from './types'
import AuthController from '../../controllers/AuthController'

class Logout extends Block {
  static componentName = 'Logout'
  constructor(props: LogoutProps = {} as LogoutProps) {
    super({
      ...props,
      events: {
        click: () => this.logout()
      },
    })
  }

  async logout() {
    await AuthController.logout()
  }


  render() {
    // language=hbs
    return `
        {{{Link
                className="logout__button {{className}}"
                color=color
                label=label
        }}}
    `
  }
}

export { Logout }

export default Logout
