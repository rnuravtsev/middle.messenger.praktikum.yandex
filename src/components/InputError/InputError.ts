import Block from 'core/Block'
import './input-error.scss'

type InputErrorProps = {
  className: string,
  errorMessage: string,
}


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
