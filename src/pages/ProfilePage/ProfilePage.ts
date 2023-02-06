import Block from 'core/Block'
import './profile-page.scss'
import { ProfilePageProps } from './types'
import withStore from '../../HOCs/withStore'

class ProfilePage extends Block {
  constructor(props: ProfilePageProps = {} as ProfilePageProps) {
    super(props)
  }

  render() {
    // language=hbs
    return `
        <main class="profile">
            {{{SidebarReturn className="profile__sidebar"}}}
            <div class="profile__content container">
                {{{ProfileIcon}}}
                <div class="profile__subtitle-wrapper">
                    {{{Subtitle
                            text="Иван Иванов"
                    }}}
                </div>
                {{{Table className="profile__table" user=user}}}
                <div class="profile__links">
                    {{{Link className="profile__link" href="/profile/edit" label="Изменить данные"}}}
                    {{{Link className="profile__link" href="/profile/edit-pass" label="Изменить пароль"}}}
                    {{{Logout className="profile__link" color="negative" label="Выйти"}}}
                </div>
            </div>
        </main>
    `
  }
}

const mapStateToProps = (state: any) => ({ user: state?.user?.data } || {} as ProfilePageProps)

export default withStore(mapStateToProps)(ProfilePage)
