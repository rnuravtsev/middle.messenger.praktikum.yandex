import Block from 'core/Block'
import './profile-edit-pass.scss'
import connect from '../../HOCs/connect'
import { ProfileEditPassProps } from './types'
import EditsController from '../../controllers/EditsController'
import FieldNormalize from '../../helpers/FieldNormalize'

class ProfileEditPass extends Block {
  constructor(props: ProfileEditPassProps = {} as ProfileEditPassProps) {
    super(props)

    this.setProps({
      fields: FieldNormalize.createFields(['oldPassword', 'newPassword', 'repeatedNewPassword']),
      events: {
        submit: (data: unknown) => this.onSubmit(data)
      }
    })
  }

  async onSubmit(data: unknown) {
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
                            onSubmit=events.submit
                            buttonText="Сохранить"
                    }}}
                </div>
            </div>
        </main>
    `
  }
}

const mapStateToProps = (state: any) => ({
  user: state.user?.data
})


export default connect(mapStateToProps)(ProfileEditPass)
