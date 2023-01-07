import Block from "core/Block";
import './signup-page.scss';
import { signUpFields } from "../../mock/fields";

type SignupPageProps = {
  className: string,
  fields: unknown[],
}


class SignupPage extends Block {
  // FIXME: Временное решение, не передавал в компонет напрямую,
  //  а использую по умолчанию
  constructor({ fields }: SignupPageProps) {
    super({ fields: signUpFields });
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
                                fields=fields
                                className="paper__form"
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
