import Block from 'core/Block';

type ImgProps = {
  className: string,
  src: string,
  alt: string,
  width: string,
  height: string,
}


class Img extends Block {
  constructor(props: ImgProps) {
    super(props);
  }

  static componentName = 'Img';

    render() {
    // language=hbs
    return `
        <img
                class="img {{className}}"
                src="{{src}}"
                alt="{{alt}}"
                width="{{width}}"
                height="{{height}}"
        >
    `
  }
}

export default Img;
