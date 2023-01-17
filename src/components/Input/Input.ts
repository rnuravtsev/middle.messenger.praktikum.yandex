import Block from "core/Block";
import './input.scss';
import { LABEL_CLASS_NAME_SHRINK } from "./consts";
import { FORM_GRID_COLUMN_CSS_CLASS } from "../Form/consts";

type InputProps = {
  className?: string,
  type?: string,
  name?: string,
  placeholder?: string,
  onInput?: (evt: FocusEvent) => void,
  onFocus?: (evt: FocusEvent) => void,
  onBlur?: (evt: FocusEvent) => void,
}


class Input extends Block {
  private readonly focusCallback: (evt: FocusEvent) => void;
  private readonly blurCallback: (evt: FocusEvent) => void;

  constructor({ onBlur, onFocus, ...props }: InputProps) {
    super({
      ...props,
      events: {
        focus: onFocus,
        blur: onBlur,
      },
    });

    // FIXME: Создаю ссылку на событие focus, приходящее из родителя
    this.focusCallback = this.props.events.focus;
    this.blurCallback = this.props.events.blur;

    this.setProps({
      events: {
        // FIXME: Здесь мы перезаписываем событие focus, чтобы добавить свою логику
        focus: (e: FocusEvent) => this.onFocus(e),
        blur: (e: FocusEvent) => this.onBlur(e),
      }
    })
  }

  toggleLabelClass() {
    const input = this._element as HTMLInputElement;
    const label = input.parentElement;
    const form = input.form;

    if (form?.classList.contains(FORM_GRID_COLUMN_CSS_CLASS)) {
      if (input.value || document.activeElement === input) {
        label?.classList.add(LABEL_CLASS_NAME_SHRINK);
      } else {
        label?.classList.remove(LABEL_CLASS_NAME_SHRINK);
      }
    }
  }

  onFocus(evt: FocusEvent) {
    // FIXME: Вызов события focus, приходящего из родителя
    this.focusCallback(evt);
    this.toggleLabelClass();
  }

  onBlur(evt: FocusEvent) {
    // FIXME: Вызов события focus, приходящего из родителя
    this.blurCallback(evt);
    this.toggleLabelClass();
  }

  render() {
    // language=hbs
    return `
        <input
                class="{{className}} input"
                type="{{#if type}}{{type}}{{else}}text{{/if}}"
                name="{{name}}"
                placeholder="{{placeholder}}"
                value="{{value}}"
        >
    `
  }
}

export default Input;
