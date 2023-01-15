import Block from "core/Block";
import './profile-edit-pass.scss';
import { editProfilePassFields } from "../../mock/editProfilePassFields";

type EditProfilePassProps = {
  className: string,
}

class ProfileEditPass extends Block {
  constructor(props: EditProfilePassProps) {
    super(props);

    this.setProps({
      fields: editProfilePassFields
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
                        gridType="row"
                        fields=fields
                        buttonText="Сохранить"
                }}}
            </div>
        </main>
    `
  }
}

export default ProfileEditPass;
