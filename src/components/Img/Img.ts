import Block from 'core/Block/Block'
import { ImgProps } from './types'


class Img extends Block {
  static componentName = 'Img'
  constructor(props: ImgProps) {
    super(props)
  }


    render() {
    // language=hbs
    return `
        <img
                class="img {{className}}"
                src="{{src}}"
                alt="{{alt}}"
                width="{{width}}"
                height="{{height}}"
        >
    `
  }
}

export default Img
