import Block from "core/Block";
import './input.scss';

const LABEL_CLASS_NAME_SHRINK = 'field__label_shrink';

type InputProps = {
  className?: string,
  type?: string,
  name?: string,
  placeholder?: string,
  onInput?: (evt: Event) => void,
  onFocus?: (evt: Event) => void,
  onBlur?: (evt: Event) => void,
}


class Input extends Block {
  private readonly focusCallback: (evt: FocusEvent) => void;
  private readonly blurCallback: (evt: FocusEvent) => void;

  constructor({ onInput, onBlur, onFocus, ...props }: InputProps) {
    super({
      ...props,
      events: {
        input: onInput,
        focus: onFocus,
        blur: onBlur,
      },
    });

    // FIXME: Создаю ссылку на событие focus, приходящее из родителя
    this.focusCallback = this.props.events.focus;
    this.blurCallback = this.props.events.blur;

    this.setProps({
      events: {
        input: () => this.onInput(),
        // FIXME: Здесь мы перезаписываем событие focus, чтобы добавить свою логику
        focus: (e: FocusEvent) => this.onFocus(e),
        blur: (e: FocusEvent) => this.onBlur(e),
      }
    })
  }

  onInput() {

  }

  toggleLabelClass(evt: FocusEvent) {
    const input = this._element as HTMLInputElement;
    const label = input.parentElement;
    const form = input.form;

    if (form?.classList.contains('form_type_shrink')) {
      if (input.value || document.activeElement === input) {
        label?.classList.add(LABEL_CLASS_NAME_SHRINK);
      } else {
        label?.classList.remove(LABEL_CLASS_NAME_SHRINK);
      }
    }
  }

  onFocus(evt: FocusEvent) {
    // FIXME: Так как мы перезаписываем событие focus, то нужно вызывать его вручную
    this.focusCallback(evt);
    this.toggleLabelClass(evt);
  }

  onBlur(evt: FocusEvent) {
    // FIXME: Так как мы перезаписываем событие blur, то нужно вызывать его вручную
    this.focusCallback(evt);
    this.toggleLabelClass(evt);
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
