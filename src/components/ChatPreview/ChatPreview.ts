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
    const { avatar, title } = this.props;
    return `
        <div class="chat-preview">
            <img class="chat-preview__avatar" src="${avatar}" alt="Аватар профиля">
            {{{MessagePreview
                    className="chat-preview__message"
                    title="${title}"
                    message=content
            }}}
            <div class="chat-preview__additional">
                {{#if time}}
                    <span class="chat-preview__time">{{time}}</span>
                {{/if}}
                {{#if unread_count}}
                    <span class="chat-preview__counter">{{unread_count}}</span>
                {{/if}}
            </div>
        </div>
    `
  }
}

export default ChatPreview
