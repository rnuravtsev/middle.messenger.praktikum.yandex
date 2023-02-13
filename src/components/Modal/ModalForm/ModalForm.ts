import Block from 'core/Block'
import './modal-form.scss'
import { ModalProps } from './types'
import store, { State } from '../../../utils/Store'
import withStore from '../../../HOCs/withStore'

export enum Modal {
  AddChat = 'AddChat',
  AddUser = 'AddUser',
  DeleteChat = 'DeleteChat',
  DeleteUser = 'DeleteUser',
}

class ModalForm extends Block {
  static componentName = 'ModalForm'

  constructor(props: ModalProps = {} as ModalProps) {
    super(props)

    this.setProps({
      handleModalClose: () => this.handleModalClose(),
    })
  }

  handleModalClose() {
    const { modal } = this.props
    // TODO: Не закрывается модальное окно
    store.set('modal', { ...modal, isOpen: false })
  }

  render() {
    const { modal } = this.props

    const isModalOpen = modal?.isOpen
    // language=hbs
    return `
        <div class="modal modal-form {{className}} ${isModalOpen && 'modal_open'}">
            <div class="modal__backdrop">
                <div class="modal__body">
                    {{{Button
                            type="icon"
                            icon="xmark"
                            className="modal__close"
                            onClick=handleModalClose
                    }}}
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

const mapStateToProps = (state: State) => ({
  modal: state.modal,
})

export default withStore(mapStateToProps)(ModalForm)
