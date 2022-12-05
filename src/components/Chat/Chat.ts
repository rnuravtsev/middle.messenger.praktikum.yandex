import Block from "../../utils/Block";
import './chats.scss'
// import template from './chat.hbs'

class Chat extends Block {
  constructor(props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      <section class="chat">
        hello
        {{{Button label="Кнопка" onClick=onClick}}}
      </section>
    `
  }
}

export default Chat
