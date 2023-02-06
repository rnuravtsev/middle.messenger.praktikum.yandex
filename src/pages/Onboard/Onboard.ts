import Block from 'core/Block'
import './onboard.scss'
import { OnboardProps } from './types'

class Onboard extends Block {
  constructor(props: OnboardProps = {} as OnboardProps) {
    super(props)
  }

  render() {
    // language=hbs
    return `
        <div class="onboard {{className}}">
            <div class="container">
                <h1 class="onboard__title">
                    Добро пожаловать!
                </h1>
                <ul class="onboard__links">
                    <li>
                        <a href="/login" class="onboard__link">login</a>
                    </li>
                    <li>
                        <a href="/sign-up" class="onboard__link">sign up</a>
                    </li>
                    <li>
                        <a href="/chat" class="onboard__link">chat</a>
                    </li>
                    <li>
                        <a href="/profile" class="onboard__link">profile</a>
                    </li>
                    <li>
                        <a href="/login" class="onboard__link">login</a>
                    </li>
                </ul>
            </div>
        </div>
    `
  }
}

export default Onboard
