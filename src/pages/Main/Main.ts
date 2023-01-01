import Block from "core/Block";
import './main.scss';

type MainProps = {}

class Main extends Block {
  constructor(props: MainProps = {}) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <div class="major">
            {{{ ChatList }}}
        </div>`
  }
}

export default Main;
