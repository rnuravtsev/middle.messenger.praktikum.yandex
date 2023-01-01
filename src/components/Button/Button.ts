import Block from "core/Block";
import './button.scss';

type ButtonProps = {
  className: string,
  color: string,
  label: string,
  onClick: () => unknown,
  icon: string,
}

class Button extends Block {
  constructor({ className, icon, color, label, onClick }: ButtonProps) {
    super({
      label,
      className,
      icon,
      color,
      onClick,
    });
  }

  render() {
    // language=hbs
    return `
        <button class="{{className}} btn btn_{{#if color}}{{color}}{{else}}primary{{/if}}">
            {{#if icon}}
                <i class="icon {{icon}}"/>
            {{/if}}
            {{label}}
        </button>
    `
  }
}

export default Button;
