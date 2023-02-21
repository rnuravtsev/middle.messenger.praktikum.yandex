import Block from 'core/Block'
import './profile-edit-pass.scss'
import connect from '../../HOCs/connect'
import { ProfileEditPassProps } from './types'
import EditsController from '../../controllers/EditsController'
import FieldNormalize from '../../helpers/FieldNormalize'
import { ChangePasswordRequest } from '../../api/types'
import { State } from '../../utils/Store'

class ProfileEditPass extends Block {
  constructor(props: ProfileEditPassProps = {} as ProfileEditPassProps) {
    super(props)

    this.setProps({
      fields: FieldNormalize.createFields(['oldPassword', 'newPassword', 'repeatedNewPassword']),
      onSubmit: (data: ChangePasswordRequest) => this.onSubmit(data)
    })
  }

  async onSubmit(data: ChangePasswordRequest) {
    await EditsController.changeUserPassword(data)
  }

  render() {
    // language=hbs
    return `
        <main>
            <div class="profile">
                {{{SidebarReturn className="profile__sidebar"}}}
                <div class="profile__content container">
                    {{{ProfileIcon}}}
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

const mapStateToProps = (state: State) => ({
  user: state.user?.data
})


export default connect(mapStateToProps)(ProfileEditPass)
