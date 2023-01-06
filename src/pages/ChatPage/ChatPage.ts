import Block from "core/Block";
import './chat-page.scss';

type ChatPageProps = {
  className: string,
  author: string,
}

class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <section class="chat-page {{className}}">
            <header class="chat-page__header">
                <img class="chat-page__img" src="#" alt="Аватар профиля">
                <h3 class="chat-page__title">{{author}}</h3>
                {{{Button type="icon" icon="menu" className="chat-page__extra"}}}
            </header>
            <div class="chat-page__chat">
                {{{Chat}}}
            </div>
            <footer class="chat-page__footer">
                <form class="chat-page__form">
                    {{{Button
                            type="icon"
                            icon="clip"
                    }}}
                    {{{Input
                            className="chat-page__input"
                            name="message"
                            placeholder="Сообщение"
                    }}}
                    {{{Button
                            className="chat-page__submit"
                            label="->"
                    }}}
                </form>
            </footer>
        </section>
    `
  }
}

export default ChatPage;
