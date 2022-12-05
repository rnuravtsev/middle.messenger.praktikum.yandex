import Block from "../../utils/Block";
import template from './button.hbs';
import './button.scss';

class Button extends Block {
  constructor(props) {
    super({
      label: props.label,
      events: {
        click: props.onClick
      },
    });
  }

  render() {
    // language=hbs
    return `<button>
        {{label}}
    </button>`
  }
}

export default Button;
