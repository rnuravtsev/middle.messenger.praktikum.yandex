import Block from 'core/Block'
import connect from '../../HOCs/connect'
import './chat.scss'
import { State } from '../../utils/Store'

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
            <time datetime="2022-06-19" class="chat__day">19 июня</time>
            <div class="chat__messages">
                {{#each messages}}
                    {{{Message
                            className="chat__message"
                            content=content
                            time=time
                            messageUserId=user_id
                            userId=${userId}
                    }}}

                {{/each}}
            </div>
        </div>
    `
  }
}

const mapStateToProps = (state: State) => {
  const { activeChatId } = state

  if (!activeChatId) {
    return {
      messages: [],
      activeChatId: undefined,
      userId: state.user?.data?.id
    }
  }

  return {
    messages: { ...state.messages?.[activeChatId] || []},
    activeChatId: state.activeChatId,
    userId: state.user?.data?.id
  }
}

export default connect(mapStateToProps)(Chat)
