import Block from "core/Block";
import './chat-preview.scss';
import { TChat } from "./type";
class ChatPreview extends Block {
  constructor({ avatar, title, message, time, count }: TChat) {
    super({ avatar, title, message, time, count });
  }

  render() {
    // language=hbs
    return `
        <div class="chat-preview">
            <img class="chat-preview__avatar" src="{{avatar}}" alt="Аватар профиля">
            {{{MessagePreview
                    className="chat-preview__message"
                    title=title
                    message=message
            }}}
            <div class="chat-preview__additional">
                <span class="chat-preview__time">{{time}}</span>
                <span class="chat-preview__counter">{{count}}</span>
            </div>
        </div>
    `
  }
}

export default ChatPreview