import Block from 'core/Block'
import './page-title.scss'
import { PageTitleProps } from './types'

class PageTitle extends Block {
  static componentName = 'PageTitle'
  constructor(props: PageTitleProps) {
    super(props)
  }


    render() {
    // language=hbs
    return `
        <h1 class="page-title {{className}}">{{text}}</h1>
    `
  }
}

export default PageTitle
