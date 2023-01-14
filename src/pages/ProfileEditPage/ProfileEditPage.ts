import Block from 'core/Block';
import './profile-edit.scss';
// FIXME: Требуются стили из другого компонента
import '../ProfilePage/profile-page.scss';
import { editProfileFields } from "../../mock/editProfileFields";

type ProfileEditProps = {
  className: string,
  fields: unknown[],
}

class ProfileEditPage extends Block {
  constructor(props: ProfileEditProps) {
    super(props);

    this.setProps({
      fields: editProfileFields
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
                {{{Form
                        fields=fields
                        type="table"
                        buttonText="Cохранить"
                }}}
            </div>
        </main>
    `;
  }
}

export default ProfileEditPage;
