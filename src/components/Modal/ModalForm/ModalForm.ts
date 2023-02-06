import Block from 'core/Block'
import './modal-form.scss'
import { ModalProps } from './types'

class ModalForm extends Block {
  static componentName = 'ModalForm'

  constructor(props: ModalProps = {} as ModalProps) {
    super(props)

    // this.setProps({
    //   fields: this.props.fields || fields,
    // })
  }

  render() {
    // language=hbs
    return `
        <div class="modal modal-form {{className}} {{#if isOpen}}modal_open{{/if}}">
            <div class="modal__backdrop">
                <div class="modal__body">
                    {{{Subtitle
                        className="modal__subtitle"
                        text=title
                    }}}
                    <div class="modal__content">
                        {{{Form
                                className="modal__form"
                                fields=fields
                                submitButtonClassname="modal__button"
                                buttonText=buttonText
                                onSubmit=onSubmit
                        }}}
                    </div>
                </div>
            </div>
        </div>
    `
  }
}

export default ModalForm
