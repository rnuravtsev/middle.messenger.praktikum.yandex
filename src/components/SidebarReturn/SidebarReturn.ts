import Block from "core/Block";
import './sidebar-return.scss';

type SidebarReturnProps = {
  className: string,
}


class SidebarReturn extends Block {
  constructor(props: SidebarReturnProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <div class="sidebar-return {{className}}">
            {{{Button
                    type="round"
                    label="<-"
            }}}
        </div>
      `
  }
}

export default SidebarReturn;
