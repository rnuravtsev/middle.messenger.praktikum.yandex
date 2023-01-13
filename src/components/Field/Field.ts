import Block from "core/Block";
import './field.scss';
import { validateField } from "../../utils/validateForm";

type FieldProps = {
  className: string,
  labelClassName: string,
  labelText: string,
  placeholder: string,
  name: string,
  /** Тип ошибки при валидации формы по Submit */
  validationType: string,
  /** Сообщение ошибки при валидации формы по Submit */
  validationError: string,
  /** Тип инпута */
  type: string,
  /** Сообщение ошибки при валидации поля по Focus/Blur */
  errorMessages: string,
}


class Field extends Block {
  constructor(props: FieldProps) {
    super({
      ...props,
      onBlur: (evt: Event) => this.onBlur(evt),
      onFocus: (evt: Event) => this.onFocus(evt),
    });
  }

  onBlur(evt: Event) {
    const input = evt.target as HTMLInputElement;
    this.validate(input)
  }

  onFocus(evt: Event) {
    const input = evt.target as HTMLInputElement;
    this.validate(input)
  }

  validate(input: HTMLInputElement) {
    const error = validateField(input)
    this.refs.errorRef.setProps({ errorMessage: error[0].value })
  }

  render() {
    const { errorMessage, validationError, validationType, name } = this.props
    const renderError = (): string => {
      if (validationType === name && validationError) {
        return validationError
      } else {
        return errorMessage || ''
      }
    }

    // language=hbs
    return `
        <div class="field {{className}}">
            <label class="field__label {{labelClassName}}">
                <span class="field__text">{{labelText}}</span>
                {{{Input
                        className="field__input input_bg_transparent"
                        ref="inputRef"
                        placeholder=placeholder
                        name=name
                        type=type
                        onInput=onInput
                        onFocus=onFocus
                        onBlur=onBlur
                }}}
            </label>
            {{{ InputError ref="errorRef" errorMessage="${renderError()}" }}}
        </div>
    `
  }
}

export default Field;