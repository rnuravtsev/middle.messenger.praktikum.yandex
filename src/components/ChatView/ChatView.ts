import Block from "core/Block";
import './chat-view.scss';

type ChatViewProps = {
  activeChat: number
}


class ChatView extends Block {
  constructor(props: ChatViewProps) {
    super(props);
  }

  render() {
    //FIXME: add active chat view

    // language=hbs
    return `
        {{#if activeChat}}
            <div>
            </div>
        {{else}}
            Выберите чат, чтобы отправить сообщение
        {{/if}}
    `
  }
}

export default ChatView;
