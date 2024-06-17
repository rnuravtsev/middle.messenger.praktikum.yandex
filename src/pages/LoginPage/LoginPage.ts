import Block from 'core/Block/Block'
import './login-page.scss'
import { fields as stubFields } from '../../mock/fields'
import { LoginPageProps } from './types'
import AuthController from '../../controllers/AuthController'
import { SignInData } from '../../api/types'
import withRouter from '../../HOCs/withRouter'

class LoginPage extends Block {
  constructor(props: LoginPageProps = {} as LoginPageProps) {
    super({
      ...props,
      fields: stubFields,
      onSubmit: (data: SignInData) => this.onSubmit(data),
    })
  }

  onSubmit(data: SignInData) {
    return AuthController.signIn(data)
  }

  render() {
    // language=hbs
    return `
        <div>
            <div class="container">
                <main class="login" data-testid="login-page">
                    <div class="container">
                        <div class="paper paper_auth login__paper">
                            {{{Subtitle
                                    className="paper__subtitle"
                                    text="Вход"
                            }}}
                            {{{Form
                                    fields=fields
                                    className="paper__form"
                                    onSubmit=onSubmit
                                    buttonText="Войти"
                            }}}
                            {{{Link
                                    className="link paper__link"
                                    href="/sign-up"
                                    label="Нет аккаунта?"}}}
                        </div>
                    </div>
                </main>
            </div>
            {{{Alert}}}
        </div>
    `
  }
}

export { LoginPage }

export default withRouter(LoginPage)
