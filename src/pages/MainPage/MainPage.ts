import Block from "core/Block";
import './main-page.scss';

type MainProps = {}

class MainPage extends Block {
  constructor(props: MainProps = {}) {
    super(props);
  }

  render() {
    // TODO: Добавить иконку
    // language=hbs
    return `
        <div class="main-page">
            {{{Sidebar className="main-page__sidebar"}}}
            {{{ChatPage author="Alex"}}}
        </div>`
  }
}

export default MainPage;
