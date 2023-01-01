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
            <div class="chat__message message">
                <h4 class="message__title">{{title}}</h4>
                <p class="message__text-wrapper">
                    {{#if message.prefix}}
                        <span class="message__prefix">
                        Вы:
                    </span>
                    {{/if}}
                    <span class="message__text">{{message.text}}</span>
                    </span>
                </p>
            </div>
            <div class="chat__additional">
                <span class="chat__time">{{time}}</span>
                <span class="chat__counter">{{count}}</span>
            </div>
        </div>
    `
  }
}

export default Chat
