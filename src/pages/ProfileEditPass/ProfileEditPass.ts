import Block from 'core/Block/Block'
import './profile-edit-pass.scss'
import connect from '../../HOCs/connect'
import { ProfileEditPassProps } from './types'
import EditsController from '../../controllers/EditsController'
import FieldNormalize from '../../helpers/FieldNormalize'
import { ChangePasswordRequest } from '../../api/types'
import { AppState } from '../../core/Store/Store'

class ProfileEditPass extends Block {
  constructor(props: ProfileEditPassProps = {} as ProfileEditPassProps) {
    super({
      ...props,
      onSubmit: (data: ChangePasswordRequest) => this.onSubmit(data)
    })
  }

  async onSubmit(data: ChangePasswordRequest) {
    await EditsController.changeUserPassword(data)
  }

  render() {
    this.props.fields = FieldNormalize.createFields(['oldPassword', 'newPassword', 'repeatedNewPassword'])
    // language=hbs
    return `
        <main>
            <div class="profile">
                {{{SidebarReturn className="profile__sidebar"}}}
                <div class="profile__content container">
                    {{{Avatar
                            className="profile__avatar"
                            editable=false
                            src=user.avatar
                    }}}
                    <div class="profile__subtitle-wrapper"></div>
                    {{{Form
                            className="profile__form"
                            gridType="row"
                            fields=fields
                            onSubmit=onSubmit
                            buttonText="Сохранить"
                    }}}
                </div>
            </div>
            {{{Alert}}}
        </main>
    `
  }
}

const mapStateToProps = (state: AppState) => ({
  user: { ...state.user?.data }
})


export default connect(mapStateToProps)(ProfileEditPass)
