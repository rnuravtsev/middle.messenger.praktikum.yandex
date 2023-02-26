import Block from 'core/Block'
import './empty-avatar.scss'
import { EmptyAvatarProps } from './types'

class EmptyAvatar extends Block {
  static componentName = 'EmptyAvatar'

  constructor(props: EmptyAvatarProps = {} as EmptyAvatarProps) {
    super(props)
  }

  render() {
    const { userName } = this.props
    const firsLetter = userName?.[0]?.toUpperCase() || ''

    // language=hbs
    return `
        <div class="empty-avatar {{className}}">
            ${firsLetter}
        </div>
      `
  }
}

export default EmptyAvatar
