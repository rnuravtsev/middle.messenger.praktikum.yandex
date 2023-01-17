import Block from "core/Block";
import './onboard.scss';
import { OnboardProps } from './types'

class Onboard extends Block {
  constructor(props: OnboardProps = {} as OnboardProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <div class="onboard {{className}}">
            Добро пожаловать!
        </div>
    `
  }
}

export default Onboard;
