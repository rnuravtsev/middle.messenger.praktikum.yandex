import Block from 'core/Block';
import './main-chat.scss';
import { ChatPageProps } from './types';
import { chatFields } from "../../mock/chatFields";
class MainChat extends Block {
  constructor(props: ChatPageProps = {} as ChatPageProps) {
    super(props);

    this.setProps({
      fields: chatFields,
    })
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
                {{{Form
                        className="chat-page__form"
                        inputClassName="chat-page__input"
                        fields=fields
                        gridType="row"
                        submitButtonClassname="chat-page__submit"
                        submitButtonType="round"
                        buttonText="->"
                }}}
            </footer>
        </section>
    `;
  }
}

export default MainChat;
