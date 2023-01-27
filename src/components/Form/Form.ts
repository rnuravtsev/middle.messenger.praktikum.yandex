import Block from 'core/Block';
import './form.scss';
import { validateForm, ValidateRuleType } from '../../utils/validateForm';

type FormProps = {
  className: string,
  inputClassName: string,
  isSubmitButtonHide: boolean,
  submitButtonClassname: string,
  submitButtonType: string,
  onSubmit: (data: unknown) => void,
  gridType: 'row' | 'column',
  fields: unknown[],
  buttonText: string,
}


class Form extends Block {
  constructor(props: FormProps) {
    super(props);

    this.setProps({
      handleButtonSubmit: (evt: Event) => this.handleButtonSubmit(evt),
    })
  }

  static componentName = 'Form';

  validate(inputs: HTMLInputElement[]): boolean {
    const preparedInputsForValidation = (inputs: HTMLInputElement[]) => {
      return inputs.map(({ name, value }) => {
        return { type: name as ValidateRuleType, value }
      })
    }

    const validationErrors = validateForm(preparedInputsForValidation(inputs));

    const firstValidationError = validationErrors.find(({ value }) => value !== '');

    const isEmptyError = validationErrors.every(({ value }) => value === '');

    if (firstValidationError) {
      this.setProps({
        firstValidationError: firstValidationError,
      })
    }

    return isEmptyError
  }

  handleButtonSubmit(evt: Event) {
    const { onSubmit } = this.props;

    evt.preventDefault();

    const formEl = this._element as HTMLFormElement;
    const inputs = [...formEl.querySelectorAll('input')];
    const isFormValid = this.validate(inputs);

    if (isFormValid) {
      const formData = new FormData(formEl);
      const data = Object.fromEntries(formData);
      onSubmit(data)
    }
  }

  render() {
    const { firstValidationError, submitButtonClassname, submitButtonType, inputClassName } = this.props;
    // language=hbs
    return `
        <form id="form"
              class="form form_grid_{{#if gridType}}{{gridType}}{{else}}column{{/if}} {{className}}">
            {{#each fields}}
                {{{Field
                        className="form__field"
                        inputClassName="${inputClassName ? inputClassName : ''}"
                        labelText=this.labelText
                        name=this.name
                        placeholder=this.placeholder
                        type=this.type
                        value=this.value
                        validationType="${firstValidationError?.type}"
                        validationError="${firstValidationError?.value}"
                }}}
            {{/each}}
            {{#if isSubmitButtonHide}}
            {{else}}
                {{{Button
                        className="form__button ${submitButtonClassname ? submitButtonClassname : ''}"
                        type="${submitButtonType ? submitButtonType : ''}"
                        label=buttonText
                        onClick=handleButtonSubmit
                }}}
            {{/if}}
        </form>
    `
  }
}

export default Form;
