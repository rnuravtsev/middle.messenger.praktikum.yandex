import Block from "core/Block";
import './profile.scss';

type ProfileProps = {
  className: string,
}


class Profile extends Block {
  constructor(props: ProfileProps) {
    super(props);
  }
  
  render() {
    // language=hbs
    return `
        <div>
          
        </div>
      `
  }
}

export default Profile;
