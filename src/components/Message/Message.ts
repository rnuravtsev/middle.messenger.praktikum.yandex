import Block from "core/Block";
import './message.scss';

type MessageProps = {
  className: string,
  title: string,
  message: {
    prefix: boolean,
    text: string,
  }
}


class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <div class="{{className}} message">
            <h4 class="message__title">{{title}}</h4>
            <p class="message__text-wrapper">
                {{#if message.prefix}}
                    <span class="message__prefix">
                        Вы:
                    </span>
                {{/if}}
                <span class="message__text">{{message.text}}</span>
        </div>
    `
  }
}

export default Message;
