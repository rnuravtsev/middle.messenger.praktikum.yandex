import Block from 'core/Block';
import './main-page.scss';
import { MainPageProps } from './types';
import withStore from '../../HOCs/withStore';

class MainPage extends Block {
  constructor(props: MainPageProps = {} as MainPageProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <div class="main-page">
            {{{Sidebar onCLick=handleClick className="main-page__sidebar"}}}
            {{#if activeChat}}
                {{{ChooseChat className="main-page__empty-chat"}}}
            {{else}}
                {{{Chat className="main-page__chat"}}}
            {{/if}}

        </div>`
  }
}


const mapStateToProps = (store: any) => ({
  activeChat: store?.activeChat
})

export default withStore(mapStateToProps)(MainPage);
