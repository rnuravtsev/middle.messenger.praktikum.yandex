import Block from 'core/Block'
import withRouter from '../../HOCs/withRouter'
import './link.scss'
import { LinkProps } from './types'

class Link extends Block {
  static componentName = 'Link'
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      }
    })
  }

  navigate() {
    const { router, href } = this.props
    router.go(href)
  }

  render() {
    // language=hbs
    return `
        <button class="link {{className}} {{#if color}}link_{{color}}{{else}}{{/if}}">
            {{label}}
            {{#if icon}}
                <i class="icon icon-{{icon}}"></i>
            {{/if}}
        </button>
    `
  }
}

export { Link }

export default withRouter(Link)
