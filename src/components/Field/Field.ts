import Block from "core/Block";
import './field.scss';
// import './animate';

type FieldProps = {
  className: string,
  labelClassName: string,
  labelText: string,
  validationText: string,
  /** Тип инпута*/
  type: string,
}


class Field extends Block {
  constructor(props: FieldProps) {
    super(props);
  }

  componentDidMount() {
    // FIXME: Сделать через рефы
      const inputs = document.querySelectorAll('.field__input')

      const toggleLabelClass = (input: HTMLInputElement, label: HTMLLabelElement, className = 'field__label_shrink') => {
        if (input.value || document.activeElement === input) {
          label.classList.add(className)
        } else {
          label.classList.remove(className)
        }
      }

      const shrinkInputLabel = ({ target }: any) => {
        const label = target.parentElement
        toggleLabelClass(target, label)
      }

      inputs.forEach((el) => el.addEventListener('input', shrinkInputLabel))
      inputs.forEach((el) => el.addEventListener('blur', shrinkInputLabel))
      inputs.forEach((el) => el.addEventListener('focus', shrinkInputLabel))
  }

  render() {
    // language=hbs
    return `
        <div class="field {{className}}">
            <label class="field__label {{labelClassName}}">
                <span class="field__text">{{labelText}}</span>
                {{{Input type=type className="field__input input_bg_transparent"}}}
            </label>
            <span class="field__validation-text">{{validationText}}</span>
        </div>
    `
  }
}

export default Field;
