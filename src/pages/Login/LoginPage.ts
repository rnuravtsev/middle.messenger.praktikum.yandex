import Block from "core/Block";
import './login-page.scss';

type LoginPageProps = {

}


class LoginPage extends Block {
  constructor(props: LoginPageProps) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <div>
            <main class="login">
                <div class="container">
                    <div class="paper paper_auth login__paper">
                        <h3
                                class="paper__subtitle subtitle">
                            Вход
                        </h3>
                        {{form
                                fields=fields
                                formClass="paper__form"
                                buttonText="Авторизоваться"
                        }}
                        {{link class="link paper__link" href="./signup.hbs" text="Нет аккаунта?"}}
                    </div>
                </div>
            </main>
        </div>
      `
  }
}

export default LoginPage;
