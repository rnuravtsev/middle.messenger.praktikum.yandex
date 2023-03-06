import Block from 'core/Block/Block'
import connect from '../../HOCs/connect'
import './chat.scss'
import { AppState } from '../../core/Store/Store'

type ChatProps = {
  className: string,
}

class Chat extends Block {
  static componentName = 'Chat'
  constructor(props: ChatProps) {
    super(props)
  }

  render() {
    const { userId } = this.props
    // language=hbs
    return `
        <div class="chat {{className}}">
            <div class="chat__messages">
                {{#each messages}}
                    {{{Message
                            className="chat__message"
                            content=content
                            time=time
                            messageUserId=user_id
                            userId=${userId}
                            isRead=is_read
                    }}}

                {{/each}}
            </div>
        </div>
    `
  }
}

const mapStateToProps = (state: AppState) => {
  const { activeChatId } = state

  if (!activeChatId) {
    return {
      messages: [],
      activeChatId: undefined,
      userId: state.user?.data?.id
    }
  }

  return {
    messages: state.messages?.[activeChatId] || [],
    activeChatId: state.activeChatId,
    userId: state.user?.data?.id
  }
}

export default connect(mapStateToProps)(Chat)
