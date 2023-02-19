import Block from 'core/Block'
import './modal.scss'
import { ModalProps } from './types'

class Modal extends Block {
  static componentName = 'Modal'

  constructor(props: ModalProps = {} as ModalProps) {
    super(props)
  }

  render() {
    const { children } = this.props
    // language=hbs
    return `
        <div class="modal {{className}}">
            ${children}
        </div>
      `
  }
}

export default Modal
