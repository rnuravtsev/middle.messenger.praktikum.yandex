import Block from 'core/Block/Block'
import './input-error.scss'
import { InputErrorProps } from './types'

class InputError extends Block {
  constructor(props: InputErrorProps) {
    super(props)
  }

  static componentName = 'InputError'

    render() {
    // language=hbs
    return `
        <span class="input-error {{className}}">{{errorMessage}}</span>
      `
  }
}

export default InputError
