import Block from 'core/Block'
import './messenger.scss'
import { MainPageProps } from './types'
import connect from '../../HOCs/connect'
import { State } from '../../utils/Store'
import ChatController from '../../controllers/ChatController'

class Messenger extends Block<MainPageProps> {
  async init() {
    super.init()
    await ChatController.getChats()
  }

  render() {
    // language=hbs
    return `
        <div>
            <div class="messenger">
                {{{Sidebar className="messenger__sidebar"}}}
                {{#if activeChatId}}
                    {{{MainChat className="messenger__chat"}}}
                {{else}}
                    {{{EmptyChat className="messenger__empty-chat"}}}
                {{/if}}
            </div>
        </div>`
  }
}


const mapStateToProps = (state: State) => ({
  activeChatId: state?.activeChatId
})

export default connect(mapStateToProps)(Messenger)
