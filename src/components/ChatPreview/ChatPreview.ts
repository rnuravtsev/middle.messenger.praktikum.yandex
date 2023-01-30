import Block from 'core/Block';
import './chat-preview.scss';
import { ChatProps } from './types';
class ChatPreview extends Block {
  static componentName = 'ChatPreview';
  constructor(props: ChatProps) {
    super(props);
  }

  render() {
    // language=hbs
    const { avatar, last_message, message, time, unread_count, content } = this.props;
    const  { first_name } = last_message.user;
    return `
        <div class="chat-preview">
            <img class="chat-preview__avatar" src="${avatar}" alt="Аватар профиля">
            {{{MessagePreview
                    className="chat-preview__message"
                    title="${first_name}"
                    message=content
            }}}
            <div class="chat-preview__additional">
                <span class="chat-preview__time">{{time}}</span>
                <span class="chat-preview__counter">{{unread_count}}</span>
            </div>
        </div>
    `
  }
}

export default ChatPreview
