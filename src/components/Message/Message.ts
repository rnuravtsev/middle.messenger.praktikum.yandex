import Block from 'core/Block/Block'
import './message.scss'
import { dateToHumanHoursAndMinutes } from '../../helpers/helpers'

type MessageProps = {
  className: string,
  text: string,
  time: string,
  image: string,
  owner: boolean,
}

const renderIsReadIcon = () => {
    return '<span class="message__icon"><i class="icon icon-2check"></i></span>'
}


class Message extends Block {
  static componentName = 'Message'
  constructor(props: MessageProps) {
    super(props)
  }

  render() {
    const { time, isRead, messageUserId, userId } = this.props

    const isOwnerMessage = messageUserId === userId

    // language=hbs
    return `
        <div class="message {{className}} ${isOwnerMessage ? 'message_owner' : ''}">
            <div class="message__content">
                {{#if content}}
                    <p class="message__text">
                        {{content}}
                      <span class="message__adornments">
                            ${isOwnerMessage && isRead ? renderIsReadIcon() : ''}
                            <span class="message__time">${dateToHumanHoursAndMinutes(time)}</span>
                      </span>
                    </p>
                {{/if}}
            </div>
        </div>
    `
  }
}

export default Message
