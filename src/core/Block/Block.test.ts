import Block from './Block'

describe('Block', () => {
  class Component extends Block {
    render() {
      return ''
    }
  }

  it('render string', () => {
    const instance = new Component()

    instance.render()
  })
})
