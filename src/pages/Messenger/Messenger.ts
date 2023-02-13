import Block from 'core/Block'
import './messenger.scss'
import { MainPageProps } from './types'
import withStore from '../../HOCs/withStore'
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
        <div class="messenger">
            {{{Sidebar className="messenger__sidebar"}}}
            {{#if activeChatId}}
                {{{MainChat className="messenger__chat"}}}
            {{else}}
                {{{EmptyChat className="messenger__empty-chat"}}}
            {{/if}}

        </div>`
  }
}


const mapStateToProps = (state: State) => ({
  activeChatId: state?.activeChatId
})

export default withStore(mapStateToProps)(Messenger)
