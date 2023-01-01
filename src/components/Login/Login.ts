import Block from "core/Block";
import './login.scss';

type LoginProps = {

}

class Login extends Block {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `<div class="login__paper">

    </div>`
  }
}

export default Login;
