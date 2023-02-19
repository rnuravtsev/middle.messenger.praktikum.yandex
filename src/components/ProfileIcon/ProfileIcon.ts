import Block from 'core/Block'
import './profile-icon.scss'
import { ProfileIconProps } from './types'

class ProfileIcon extends Block<ProfileIconProps> {
  static componentName = 'ProfileIcon'
    render() {
    // language=hbs
    return `
        <div class="profile__icon-wrapper {{class}}">
            <i class="profile__icon"></i>
        </div>
      `
  }
}

export default ProfileIcon
