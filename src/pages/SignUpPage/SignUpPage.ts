import Block from 'core/Block'
import './signup-page.scss'
import { signUpFields } from '../../mock/fields'
import { SignUpPageProps } from './types'
import AuthController from '../../controllers/AuthController'
import { SignUpData } from '../../api/types'


class SignUpPage extends Block {
  constructor(props: SignUpPageProps = {} as SignUpPageProps) {
    super(props)

    this.setProps({
      fields: signUpFields,
      events: {
        submit: (data: SignUpData) => this.onSubmit(data)
      }
    })
  }

  onSubmit(data: SignUpData) {
    return AuthController.signUp({
      ...data,
      display_name: data['first_name']
    } as SignUpData)
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
                                onSubmit=events.submit
                        }}}
                        {{{Link className="link paper__link" href="/login" label="Войти"}}}
                    </div>
                </div>
            </main>
            {{{Alert}}}
        </div>
      `
  }
}

export default SignUpPage
