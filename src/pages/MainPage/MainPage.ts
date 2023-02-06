import Block from 'core/Block'
import './main-page.scss'
import { MainPageProps } from './types'
import withStore from '../../HOCs/withStore'
import { State } from '../../utils/Store'

class MainPage extends Block {
  constructor(props: MainPageProps = {} as MainPageProps) {
    super(props)
  }

  render() {
    // language=hbs
    return `
        <div class="main-page">
            {{{Sidebar onCLick=handleClick className="main-page__sidebar"}}}
            {{#if activeChatId}}
                {{{MainChat className="main-page__chat"}}}
            {{else}}
                {{{ChooseChat className="main-page__empty-chat"}}}
            {{/if}}

        </div>`
  }
}


const mapStateToProps = (state: State) => ({
  activeChatId: state?.activeChatId
})

export default withStore(mapStateToProps)(MainPage)
