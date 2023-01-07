import Block from "core/Block";
import './login-page.scss';
import { fields as mockFields } from "../../mock/fields";

type LoginPageProps = {
  fields: unknown[],
}


class LoginPage extends Block {
  constructor({ fields }: LoginPageProps) {
    // FIXME: Временное решение, не передавал в компонет напрямую,
    //  а использую по умолчанию
    super({ fields: mockFields });
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
                                buttonText="Войти"
                        }}}
                        {{{Link class="link paper__link" href="./signup.html" text="Нет аккаунта?"}}}
                    </div>
                </div>
            </main>
        </div>
    `
  }
}

export default LoginPage;
