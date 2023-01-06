import Block from "core/Block";
import './message.scss';

type MessageProps = {
  className: string,
  text: string,
  time: string,
  image: {},
  owner: boolean,
}


class Message extends Block {
  constructor({ text, time, className, image, owner }: MessageProps) {
    super({ text, time, className, image, owner });
  }

  render() {
    // language=hbs
    return `
        <div class="message {{className}}{{#if owner}} message_owner{{/if}}">
            <div class="message__content">
                {{#if text}}
                    <p class="message__text">
                        {{text}}
                        <span class="message__time">{{time}}</span>
                    </p>
                {{else if image}}
                    <img class="message__img" src="{{image}}" alt="{{image}}">
                    <span class="message__time message__time_dark">{{time}}</span>
                {{/if}}
            </div>
        </div>
    `
  }
}

export default Message;
