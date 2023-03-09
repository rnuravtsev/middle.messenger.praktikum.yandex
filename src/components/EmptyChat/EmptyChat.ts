import Block from 'core/Block/Block'
import './empty-chat.scss'
import { ChooseChatProps } from './types'

class EmptyChat extends Block {
  constructor(props: ChooseChatProps = {} as ChooseChatProps) {
    super(props)
  }

  render() {
    // language=hbs
    return `
        <div class="choose-chat {{className}}">
          Выберите чат, чтобы отправить сообщение
        </div>
      `
  }
}

export default EmptyChat
