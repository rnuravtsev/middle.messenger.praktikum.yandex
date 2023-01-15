import Block from "core/Block";
import './form.scss';
import { validateForm, ValidateRuleType } from "../../utils/validateForm";

type FormProps = {
  className: string,
  isSubmitButtonHide: boolean,
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

  handleButtonSubmit(evt: Event) {
    evt.preventDefault();
    const formEl = this._element as HTMLFormElement;
    const formData = new FormData(formEl);
    const inputs = [...formEl.querySelectorAll('input')];

    const preparedInputsForValidation = (inputs: HTMLInputElement[]) => {
      return inputs.map(({ name, value }) => {
        return { type: name as ValidateRuleType, value }
      })
    }

    const validationErrors = validateForm(preparedInputsForValidation(inputs));

    const firstValidationError = validationErrors.find(({ value }) => value !== '');

    if (firstValidationError) {
      this.setProps({
        firstValidationError: firstValidationError,
      })
    }

    if (!validationErrors.length) {
      //TODO: Доработать в 3 спринте
      console.log(Object.fromEntries([...formData]))
    }
  }

  render() {
    const { firstValidationError } = this.props;
    // language=hbs
    return `
        <form id="form" class="form form_grid_{{#if gridType}}{{gridType}}{{else}}column{{/if}} {{className}}">
            {{#each fields}}
            {{{Field
                    className="form__field"
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
                        className="form__button"
                        label=buttonText
                        onClick=handleButtonSubmit
                }}}
            {{/if}}
        </form>
    `
  }
}

export default Form;
