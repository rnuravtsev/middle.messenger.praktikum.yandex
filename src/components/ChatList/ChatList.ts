import Block from 'core/Block';
import './chat-list.scss';
import { ChatNew } from '../ChatPreview/types';
import withStore from '../../HOCs/withStore';
import ChatController from '../../controllers/ChatController';


type ChatListProps = {
  chats?: ChatNew[]
}

class ChatList extends Block {
  static componentName = 'ChatList';
  constructor(props: ChatListProps) {
    super(props);

    this.setProps({
      chats: ChatController.getChats()
    })
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

const mapStateToProps = (state: any) => ({
  chats: state?.chats?.data
})
//
export default withStore(mapStateToProps)(ChatList);
// export default ChatList;
