import Block from "core/Block";
import './choose-chat.scss';
import { ChooseChatProps } from "./types";


class ChooseChat extends Block {
  constructor(props: ChooseChatProps = {} as ChooseChatProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <div class="choose-chat {{className}}">
          Выберите чат, чтобы отправить сообщение
        </div>
      `
  }
}

export default ChooseChat;
