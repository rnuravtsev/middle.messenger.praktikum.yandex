import Block from 'core/Block';
import './profile-edit.scss';
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
        <main class="profile">
            {{{SidebarReturn className="profile__sidebar"}}}
            <div class="profile__content container">
                {{{ProfileIcon}}}
                <div class="profile__subtitle-wrapper"></div>
                {{{Form
                        className="profile__form"
                        fields=fields
                        gridType="row"
                        buttonText="Cохранить"
                }}}
            </div>
        </main>
    `;
  }
}

export default ProfileEditPage;