import Block from 'core/Block';
import '../page-error.scss';
import { Page404Props } from './types';

class Page404 extends Block {
  constructor(props: Page404Props = {} as Page404Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <main class="page-error">
            <div class="container">
                <h1 class="page-title page-error__title">404</h1>
                <h3
                        class="subtitle page-error__subtitle">
                    Не туда попали
                </h3>
                {{{Link
                        className="page-error__link"
                        href="/"
                        rel="noopener nofollow"
                        text="Назад к чатам"
                }}}
            </div>
        </main>
    `
  }
}

export default Page404;
