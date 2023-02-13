import Block from 'core/Block'
import './chat-list.scss'
import { ChatNew } from '../ChatPreview/types'
import withStore from '../../HOCs/withStore'
import { State } from '../../utils/Store'


type ChatListProps = {
  chats?: ChatNew[]
}

class ChatList extends Block<ChatListProps> {
  static componentName = 'ChatList'
  render() {
    // language=hbs
    return `
        <ul class="chat-list">
            {{#each chats}}
                {{{ChatPreview
                        id=id
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

const mapStateToProps = (state: State) => ({
  chats: state?.chats?.data
})
export default withStore(mapStateToProps)(ChatList)

