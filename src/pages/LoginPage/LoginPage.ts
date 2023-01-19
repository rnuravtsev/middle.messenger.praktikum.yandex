import Block from "core/Block";
import './login-page.scss';
import { fields as mockFields } from "../../mock/fields";
import { LoginPageProps } from "./types";

class LoginPage extends Block {
  constructor(props: LoginPageProps = {} as LoginPageProps) {
    super(props);

    this.setProps({
      fields: mockFields
    })
  }

  render() {
    // language=hbs
    return `
        <div class="container">
            <main class="login">
                <div class="container">
                    <div class="paper paper_auth login__paper">
                        {{{Subtitle
                                className="paper__subtitle"
                                text="Вход"
                        }}}
                        {{{Form
                                fields=fields
                                className="paper__form"
                                buttonText="Войти"
                        }}}
                        {{{Link
                                className="link paper__link"
                                href="/sign-up"
                                text="Нет аккаунта?"}}}
                    </div>
                </div>
            </main>
        </div>
    `
  }
}

export default LoginPage;
