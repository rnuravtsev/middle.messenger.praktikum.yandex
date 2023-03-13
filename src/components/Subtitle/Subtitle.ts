import Block from 'core/Block/Block'
import './subtitle.scss'
import { SubtitleProps } from './types'

class Subtitle extends Block {
  static componentName = 'Subtitle'
  constructor(props: SubtitleProps) {
    super(props)
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

export default Subtitle
