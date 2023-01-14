import Block from "core/Block";
import './profile-page.scss';
import { profileFields } from "../../mock/profileFields";

type ProfileProps = {
  className: string,
}


class ProfilePage extends Block {
  constructor(props: ProfileProps) {
    super(props);

    this.setProps({
      fields: profileFields,
    })
  }

  render() {
    // language=hbs
    return `
        <main>
            <div class="profile container">
                {{{ProfileIcon}}}
                {{{Subtitle
                        className="profile__subtitle"
                        text="Иван Иванов"
                }}}
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
