import Block from "core/Block";

type Page404Props = {
  className: string,
}


class Page404 extends Block {
  constructor(props: Page404Props) {
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
                    <a
                            class="link page-error__link"
                            href="./main.html"
                            target="_self"
                            rel="noopener nofollow"
                    >
                        Назад к чатам
                    </a>
                </div>
            </main>
      `
  }
}

export default Page404;
