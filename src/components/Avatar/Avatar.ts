import Block from 'core/Block/Block'
import './avatar.scss'
import { ProfileIconProps } from './types'
import EditsController from '../../controllers/EditsController'

const renderImage = (src: string) => {
  //language=hbs
  return `
      {{#if src}}
          <img class="avatar__image"
               src="https://ya-praktikum.tech/api/v2/resources${src}"
               alt="user avatar">
      {{else}}
          <i class="avatar__icon"></i>
      {{/if}}`
}

class Avatar extends Block {
  static componentName = 'Avatar'

  constructor(props: ProfileIconProps) {
    super(
      {
        ...props,
        events: {
          change: (evt: SubmitEvent) => this.onChange(evt),
        }
      }
    )
  }

  async onChange(evt: Event) {
    evt.preventDefault()
    const target = evt.target as HTMLInputElement
    const file = target.files?.[0]
    const formData = new FormData()

    if (!file) {
      return
    }

    formData.append('avatar', file)
    await EditsController.changeUserAvatar(formData)
  }

  render() {
    const { src } = this.props
    // language=hbs
    return `
        <form class="avatar {{className}}">
            {{#if editable}}
                <label class="avatar__label" for="avatar">
                    <input id="avatar" class="avatar__input" type="file" name="avatar" accept="image/*">
                    ${renderImage(src)}
                </label>
            {{else}}
                ${renderImage(src)}
            {{/if}}
        </form>
    `
  }
}

export default Avatar
