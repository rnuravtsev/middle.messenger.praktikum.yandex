import Block from "core/Block";
import './chat.scss';

type ChatProps = {
  className: string,
}

class Chat extends Block {
  constructor({ className }: ChatProps) {
    super({ className });
  }

  render() {
    // language=hbs
    return `
        <div class="chat {{className}}">
            <time datetime="2022-06-19" class="chat__day">19 июня</time>
            <div class="chat__messages">
                {{{Message
                        className="chat__message"
                        text="Привет! Смотри, тут всплыл интересный кусок лунной космической истории
                         — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для
                          полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL —
                           и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны,
                            так как астронавты с собой забрали только кассеты с пленкой.
                    Хассельблад в итоге адаптировал SWC для космоса,
                   но что-то пошло не так и на ракету они
 так никогда и не попали. Всего их было произведено 25 штук,
  одну из них недавно продали на аукционе за 45000 евро."
                        time="10:17"
                }}}
                {{{Message
                        className="chat__message"
                        image="https://m.media-amazon.com/images/I/81Ong-2+m2L._RI_.jpg"
                        time="10:17"
                }}}
                {{{Message
                        className="chat__message"
                        owner="true"
                        text="Хорошо"
                        time="10:17"
                }}}
            </div>
        </div>
    `
  }
}

export default Chat;
