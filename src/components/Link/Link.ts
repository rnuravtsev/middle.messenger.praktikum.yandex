import Block from "core/Block";
import './link.scss';

type LinkProps = {
  className: string,
  color: string,
  href: string,
  target: '_self' | '_blank',
  text: string,
}


class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  static componentName = 'Link';

    render() {
    // language=hbs
    return `
        <a
                class="link {{className}} {{#if color}}link_{{color}}{{else}}{{/if}} "
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
