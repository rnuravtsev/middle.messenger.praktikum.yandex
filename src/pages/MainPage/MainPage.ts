import Block from 'core/Block';
import './main-page.scss';
import { MainPageProps } from './types';

class MainPage extends Block {
  constructor(props: MainPageProps = {} as MainPageProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <div class="main-page">
            {{{Sidebar className="main-page__sidebar"}}}
            {{{ChooseChat className="main-page__empty-chat"}}}
        </div>`
  }
}

export default MainPage;
