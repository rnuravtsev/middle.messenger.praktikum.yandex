import Block from 'core/Block'
import './page-title.scss'

type PageTitleProps = {
  className: string,
  text: string,
}


class PageTitle extends Block {
  constructor(props: PageTitleProps) {
    super(props)
  }

  static componentName = 'PageTitle'

    render() {
    // language=hbs
    return `
        <h1 class="page-title {{className}}">{{text}}</h1>
    `
  }
}

export default PageTitle
