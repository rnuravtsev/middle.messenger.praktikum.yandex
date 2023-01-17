import Block from "core/Block";
import './message-preview.scss';

type MessageProps = {
  className: string,
  title: string,
  message: {
    prefix: boolean,
    text: string,
  }
}


class MessagePreview extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  static componentName = 'MessagePreview';

    render() {
    // language=hbs
    return `
        <div class="{{className}} message-preview">
            <h4 class="message-preview__title">{{title}}</h4>
            <p class="message-preview__text-wrapper">
                {{#if message-preview.prefix}}
                    <span class="message-preview__prefix">
                        Вы:
                    </span>
                {{/if}}
                <span class="message-preview__text">{{message.text}}</span>
        </div>
    `
  }
}

export default MessagePreview;
