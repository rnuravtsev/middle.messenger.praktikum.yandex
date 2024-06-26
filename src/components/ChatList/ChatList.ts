import Block from 'core/Block/Block'
import './chat-list.scss'
import connect from '../../HOCs/connect'
import { AppState } from '../../core/Store/Store'
import { ChatListProps } from './types'

class ChatList extends Block<ChatListProps> {
  static componentName = 'ChatList'
  constructor(props: ChatListProps) {
    super(props)
  }
  render() {
    // language=hbs
    return `
        <ul class="chat-list">
            {{#if chatLoading}}
                {{{Loader}}}
            {{/if}}
            {{#each chats}}
                {{{ChatPreview
                        id=id
                        avatar=avatar
                        title=title
                        message=last_message
                        time=time
                        count=unread_count
                }}}
            {{/each}}
        </ul>
    `
  }
}

const mapStateToProps = (state: AppState) => ({
  chats: state?.chats?.data,
  chatLoading: state?.chats?.isLoading
})
export default connect(mapStateToProps)(ChatList)

