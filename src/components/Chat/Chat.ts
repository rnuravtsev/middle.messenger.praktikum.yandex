import Block from 'core/Block'
import withStore from '../../HOCs/withStore'
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
    messages: state.messages?.[activeChatId] || [],
    activeChatId: state.activeChatId,
    userId: state.user?.data?.id
  }
}

export default withStore(mapStateToProps)(Chat)
