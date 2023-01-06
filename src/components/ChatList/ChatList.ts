import Block from "core/Block";
import './chat-list.scss';
import { TChat } from "../ChatPreview/type";
import {chats as mockChats} from "../../mock/chats";


type ChatListProps = {
  chats: TChat[]
}

class ChatList extends Block {
  constructor({ chats }: ChatListProps) {
    // FIXME: Временное решение, не передавал в компонет напрямую,
    //  а использую по умолчанию
    super({ chats: mockChats });
  }

  render() {
    // language=hbs
    return `
        <ul class="chat-list">
            {{#each chats}}
                {{{ChatPreview
                        avatar=avatar
                        title=title
                        message=message
                        time=time
                        count=count
                }}}
            {{/each}}
        </ul>
    `
  }
}

export default ChatList;
