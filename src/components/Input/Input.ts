import Block from "core/Block";
import './input.scss';
// TODO: Добавить иконку лупы
// import '../../'

type InputProps = {
  type: string,
  className: string,
  placeholder?: string,
}


class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <input
                class="{{className}} input"
                type="{{#if type}}{{type}}{{else}}text{{/if}}"
                placeholder="{{placeholder}}"
        >
    `
  }
}

export default Input;
