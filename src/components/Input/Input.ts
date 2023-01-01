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
        <div class="input-wrapper">
            <input
                    class="{{className}}"
                    type="{{#if type}}{{type}}{{else}}text{{/if}}"
                    placeholder="{{placeholder}}"
            >
        </div>
    `
  }
}

export default Input;
