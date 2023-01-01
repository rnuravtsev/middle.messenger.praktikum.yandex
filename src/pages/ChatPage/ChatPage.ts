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
    // TODO: Добавить иконку
    // language=hbs
    return `
        <section class="chat-page {{className}}">
            <header class="chat-page__header">
                <img class="chat-page__img" src="#" alt="Аватар профиля">
                <h3 class="chat-page__title">{{author}}</h3>
                {{{Button className="chat-page__extra" icon="123"}}}
            </header>
            <div class="chat-page__chat">
                Основа
            </div>
            <footer class="chat-page__footer">
                <form class="chat-page__form">
                    <i class="icon"></i>
                    {{{Input
                            className="chat-page__input"
                            placeholder="Сообщение"
                    }}}
                    {{{Button
                            className="chat-page__button chat-page__button_submit"
                            label="->"
                    }}}
                </form>
            </footer>
        </section>
    `
  }
}

export default ChatPage;
