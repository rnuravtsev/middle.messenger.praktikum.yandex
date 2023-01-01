import Block from "core/Block";
import './chat.scss';
import { TChat } from "./type";
class Chat extends Block {
  constructor({ avatar, title, message, time, count }: TChat) {
    super({ avatar, title, message, time, count });
  }

  render() {
    // language=hbs
    return `
        <div class="chat">
            <img class="chat__avatar" src="{{avatar}}" alt="Аватар профиля">
            {{{Message
                    className="chat__message"
                    title=title
                    message=message
            }}}
            <div class="chat__additional">
                <span class="chat__time">{{time}}</span>
                <span class="chat__counter">{{count}}</span>
            </div>
        </div>
    `
  }
}

export default Chat
