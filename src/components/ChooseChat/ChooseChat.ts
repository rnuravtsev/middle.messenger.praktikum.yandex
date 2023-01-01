import Block from "core/Block";
import './choose-chat.scss';

type ChooseChatProps = {

}


class ChooseChat extends Block {
  constructor(props: ChooseChatProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <div class="choose-chat">
          Выберите чат, чтобы отправить сообщение
        </div>
      `
  }
}

export default ChooseChat;
