import Block from 'core/Block'
import './message.scss'

type MessageProps = {
  className: string,
  text: string,
  time: string,
  image: string,
  owner: boolean,
}


class Message extends Block {
  constructor(props: MessageProps) {
    super(props)
  }

  static componentName = 'Message'

    render() {
    // language=hbs
    return `
        <div class="message {{className}}{{#if owner}} message_owner{{/if}}">
            <div class="message__content">
                {{#if content}}
                    <p class="message__text">
                        {{content}}
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

export default Message
