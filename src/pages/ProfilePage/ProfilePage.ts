import Block from 'core/Block'
import './profile-page.scss'
import { ProfilePageProps } from './types'
import connect from '../../HOCs/connect'
import { State } from '../../utils/Store'
import { Routes } from '../../core/Router/types'

class ProfilePage extends Block {
  constructor(props: ProfilePageProps = {} as ProfilePageProps) {
    super(props)
  }

  render() {
    const { user } = this.props
    // language=hbs
    return `
        <main>
            <div class="profile">
                {{{SidebarReturn className="profile__sidebar"}}}
                <div class="profile__content container">
                    {{{Avatar className="profile__avatar" src=user.avatar}}}
                    <div class="profile__subtitle-wrapper">
                        {{{Subtitle
                                text="${user?.first_name} ${user?.second_name}"
                        }}}
                    </div>
                    {{{Table className="profile__table" user=user}}}
                    <div class="profile__links">
                        {{{Link className="profile__link" href="${Routes.Settings}"
                                label="Изменить данные"}}}
                        {{{Link className="profile__link" href="${Routes.ProfileEditPass}"
                                label="Изменить пароль"}}}
                        {{{Logout className="profile__link" color="negative" label="Выйти"}}}
                    </div>
                </div>
            </div>
            {{{Alert}}}
        </main>
    `
  }
}

const mapStateToProps = (state: State) => ({ user: state?.user?.data })

export default connect(mapStateToProps)(ProfilePage)
