import Block from 'core/Block';
import withRouter from '../../HOC/withRouter';
import './link.scss';

type LinkProps = {
  className?: string,
  color?: string,
  href: string,
  target?: '_self' | '_blank',
  text: string,
  events?: Record<string, (e: Event) => void>,
}


class Link extends Block {
  constructor(props: LinkProps) {
    super(props);

    this.setProps({
      events: {
        click: () => this.navigate()
      }
    })
  }
  static componentName = 'Link';

  navigate() {
    const { router, href } = this.props;
    router.go(href);
  }

  render() {
    // language=hbs
    return `
        <button class="link {{className}} {{#if color}}link_{{color}}{{else}}{{/if}}">
            {{text}}
        </button>
    `
  }
}

export default withRouter(Link);
