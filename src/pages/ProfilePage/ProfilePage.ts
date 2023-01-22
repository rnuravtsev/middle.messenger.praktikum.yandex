import Block from 'core/Block';
import './profile-page.scss';
import { profileFields } from '../../mock/profileFields';
import { ProfilePageProps } from './types';


class ProfilePage extends Block {
  constructor(props: ProfilePageProps = {} as ProfilePageProps) {
    super(props);

    this.setProps({
      fields: profileFields,
    })
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
                {{{Table className="profile__table" data=fields}}}
                <div class="profile__links">
                    {{{Link className="profile__link" href="/profile/edit" text="Изменить данные"}}}
                    {{{Link className="profile__link" href="/profile/password" text="Изменить пароль"}}}
                    {{{Link className="profile__link" href="/logout" color="negative" text="Выйти"}}}
                </div>
            </div>
        </main>
    `
  }
}

export default ProfilePage;
