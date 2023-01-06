import Block from "core/Block";
import './link.scss';

type LinkProps = {

}


class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <a
                class="link {{class}} {{#if color}}link_{{color}}{{else}}{{/if}} "
                href="{{href}}"
                target="_{{#if target}}{{target}}{{else}}self{{/if}}"
                rel="noopener nofollow"
        >
            {{text}}
        </a>
    `
  }
}

export default Link;
