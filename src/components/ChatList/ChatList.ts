import Block from 'core/Block';
import './chat-list.scss';
import { TChat } from '../ChatPreview/types';
import {chats as mockChats} from '../../mock/chats';


type ChatListProps = {
  chats: TChat[]
}

class ChatList extends Block {
  constructor(props: ChatListProps) {
    super(props);

    this.setProps({
      chats: mockChats
    })
  }

  static componentName = 'ChatList';

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
