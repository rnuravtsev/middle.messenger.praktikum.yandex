import Block from "core/Block";
import './button.scss';

type ButtonProps = {
  label: string,
  onClick: () => unknown,
}

class Button extends Block {
  constructor({ label, onClick }: ButtonProps) {
    super({
      label,
      onClick,
    });
  }

  render() {
    // language=hbs
    return `
        <button class="btn btn_{{#if color}}{{color}}{{else}}primary{{/if}} {{class}}">{{label}}</button>
    `
  }
}

export default Button;
