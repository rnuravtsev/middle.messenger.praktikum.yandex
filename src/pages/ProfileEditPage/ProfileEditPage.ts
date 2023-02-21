import Block from 'core/Block'
import './profile-edit.scss'
import { ProfileEditProps } from './types'
import connect from '../../HOCs/connect'
import FieldNormalize from '../../helpers/FieldNormalize'
import { User } from '../../api/types'
import EditsController from '../../controllers/EditsController'
import { State } from '../../utils/Store'

class ProfileEditPage extends Block {
  constructor(props: ProfileEditProps = {} as ProfileEditProps) {
    super(props)

    this.setProps({
      fields: FieldNormalize.createFields(undefined, props.user as User),
      events: {
        submit: (evt: SubmitEvent) => this.onSubmit(evt),
      }
    })
  }

  async onSubmit(data: unknown) {
    await EditsController.changeUserInfo(data as User)
  }

  render() {
    // language=hbs
    return `
        <main>
            <div class="profile">
                {{{SidebarReturn className="profile__sidebar"}}}
                <div class="profile__content container">
                    {{{Avatar
                            className="profile__avatar"
                            src=user.avatar
                            editable=true
                    }}}
                    <div class="profile__subtitle-wrapper"></div>
                    {{{Form
                            className="profile__form"
                            fields=fields
                            gridType="row"
                            buttonText="Cохранить"
                            onSubmit=events.submit
                    }}}
                </div>
            </div>
            {{{Alert}}}
        </main>
    `
  }
}

const mapStateToProps = (state: State) => ({
 user: state.user?.data
})

export default connect(mapStateToProps)(ProfileEditPage)
