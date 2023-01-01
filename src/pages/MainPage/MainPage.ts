import Block from "core/Block";
import './main-page.scss';

type MainProps = {}

class MainPage extends Block {
  constructor(props: MainProps = {}) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <div class="main-page">
            {{{Sidebar className="main-page__sidebar"}}}
            {{{ChooseChat}}}
        </div>`
  }
}

export default MainPage;
