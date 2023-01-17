import Block from "core/Block";
import '../page-error.scss';
import { Page500Props } from "./types";

class Page500 extends Block {
  constructor(props: Page500Props = {} as Page500Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
        <main class="page-error">
            <div class="container">
                <h1 class="page-title page-error__title">500</h1>
                <h3
                        class="subtitle page-error__subtitle">
                    Мы уже фиксим
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

export default Page500;
