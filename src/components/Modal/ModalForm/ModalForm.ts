import Block from 'core/Block';
import './modal-form.scss';
import { ModalProps } from './types'

const fields = [
  {
    labelText: 'Название чата',
    name: 'new_chat_name',
  },
]


class ModalForm extends Block {
  static componentName = 'ModalForm';

  constructor(props: ModalProps = {} as ModalProps) {
    super(props);

    const { isOpen } = props;

    this.state = {
      isOpen: false
    }

    this.setProps({
      fields,
      isOpen: isOpen || false,
    })

    this.getStateFromProps({ isOpen: isOpen })
  }

  render() {
    // language=hbs
    return `
        <div class="modal modal-form {{className}} {{#if isOpen}}modal_open{{/if}}">
            <div class="modal__backdrop">
                <div class="modal__body">
                    {{{Subtitle
                        className="modal__subtitle"
                        text="Добавить чат"
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

export default ModalForm;
