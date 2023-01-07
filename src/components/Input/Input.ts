import Block from "core/Block";
import './input.scss';

type InputProps = {
  className: string,
  type: string,
  name: string,
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
                name="{{name}}"
                placeholder="{{placeholder}}"
        >
    `
  }
}

export default Input;
