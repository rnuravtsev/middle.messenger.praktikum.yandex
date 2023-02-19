import Block from 'core/Block'
import '../page-error.scss'
import { Page404Props } from './types'
import { Routes } from '../../../core/Router/types'

class Page404 extends Block {
  constructor(props: Page404Props = {} as Page404Props) {
    super(props)
  }

  render() {
    // language=hbs
    return `
        <main>
            <div class="page-error">
                <div class="page-error__container container">
                    <h1 class="page-title page-error__title">404</h1>
                    <h3
                            class="subtitle page-error__subtitle">
                        Не туда попали
                    </h3>
                    {{{Link
                            className="page-error__link"
                            href="${Routes.Messenger}"
                            rel="noopener nofollow"
                            label="Назад к чатам"
                    }}}
                </div>
            </div>
        </main>
    `
  }
}

export default Page404
