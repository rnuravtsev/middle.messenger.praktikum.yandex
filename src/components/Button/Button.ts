import Block from 'core/Block'
import './button.scss'

type ButtonProps = {
  className: string,
  color: string,
  label: string,
  onClick: () => void,
  icon: string,
  type: string,
}

class Button extends Block {
  constructor({ className, icon, color, label, onClick, type }: ButtonProps) {
    super({
      label,
      className,
      icon,
      color,
      events: {
        click: onClick,
      },
      type,
    })
  }
  static componentName = 'Button'

  render() {
    // language=hbs
    return `
        <button
                class="{{className}}
                 btn btn_color_{{#if color}}{{color}}{{else}}primary{{/if}}
                {{#if type}}btn_type_{{type}}{{/if}}"
                type="button"
        >
            {{#if icon}}
                <i class="icon icon-{{icon}}"></i>
            {{/if}}
            {{label}}
        </button>
    `
  }
}

export default Button
