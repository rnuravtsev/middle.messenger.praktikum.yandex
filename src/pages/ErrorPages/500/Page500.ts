import Block from "core/Block";

type Page500Props = {
  className: string,
}


class Page500 extends Block {
  constructor(props: Page500Props) {
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
                            target="_self"
                            rel="noopener nofollow"
                            text="Назад к чатам"
                    }}}
                </div>
            </main>
      `
  }
}

export default Page500;
