import Block from "core/Block";
import './form.scss';

type FormProps = {
  className: string,
  isSubmitButtonHide: boolean,
  fields: unknown[],
  buttonText: string,
}


class Form extends Block {
  constructor(props: FormProps) {
    super(props);

    this.setProps({
      handleButtonSubmit: (evt: Event) => this.handleButtonSubmit(evt)
    })
  }

  handleButtonSubmit(evt: Event) {
    evt.preventDefault();
    const formData = new FormData(document.forms[0]);

    console.log('911.', formData)
  }

  render() {
    // language=hbs
    return `
        <form id="form" class="form {{className}}">
            {{#each fields}}
                {{{Field
                        className=this.className
                        labelText=this.labelText
                        name=this.name
                        placeholder=this.placeholder
                        type=this.type
                        validationText=this.validationText
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
