import Block from "core/Block";
import './signup-page.scss';
import { signUpFields } from "../../mock/fields";

type SignupPageProps = {
  className: string,
  fields: unknown[],
}


class SignupPage extends Block {
  constructor(props: SignupPageProps) {
    super(props);

    this.setProps({
      fields: signUpFields,
    })
  }

  render() {
    // language=hbs
    return `
        <div class="container">
            <main class="login">
                <div class="container">
                    <div class="paper paper_auth login__paper">
                        <h3
                                class="paper__subtitle subtitle">
                            Вход
                        </h3>
                        {{{Form
                                className="paper__form"
                                fields=fields
                                buttonText="Зарегистрироваться"
                        }}}
                        {{{Link class="link paper__link" href="./login.html" text="Войти"}}}
                    </div>
                </div>
            </main>
        </div>
      `
  }
}

export default SignupPage;
