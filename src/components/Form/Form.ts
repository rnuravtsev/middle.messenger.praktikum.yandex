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
  }

  render() {
    // language=hbs
    return `
        <form class="form {{className}}" method="post">
            {{#each fields}}
                {{{Field
                        className=this.className
                        labelText=this.labelText
                        type=this.type
                        validationText=this.validationText
                }}}
            {{/each}}
            {{#if isSubmitButtonHide}}
            {{else}}
                {{{Button
                        className="form__button"
                        label=buttonText
                }}}
            {{/if}}
        </form>
    `
  }
}

export default Form;
