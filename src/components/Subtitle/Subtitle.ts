import Block from "core/Block";
import './subtitle.scss';

type SubtitleProps = {
  className: string,
  text: string,
}


class Subtitle extends Block {
  constructor(props: SubtitleProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <h3
                class="subtitle {{className}}">
            {{text}}
        </h3>

    `
  }
}

export default Subtitle;
