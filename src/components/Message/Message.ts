import Block from 'core/Block'
import './message.scss'
import { dateToHumanHoursAndMinutes } from '../../helpers/helpers'

type MessageProps = {
  className: string,
  text: string,
  time: string,
  image: string,
  owner: boolean,
}


class Message extends Block {
  static componentName = 'Message'
  constructor(props: MessageProps) {
    super(props)
  }

  render() {
    const { time, messageUserId, userId } = this.props

    const isOwnerMessage = messageUserId === userId

    // language=hbs
    return `
        <div class="message {{className}} ${isOwnerMessage ? 'message_owner' : ''}">
            <div class="message__content">
                {{#if content}}
                    <p class="message__text">
                        {{content}}
                        <span class="message__time">${dateToHumanHoursAndMinutes(time)}</span>
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
