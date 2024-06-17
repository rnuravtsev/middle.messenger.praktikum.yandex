import Block from './Block'

describe('core/Block', () => {
  const instance = new Block({ id: 123 })

  it('instance contains the passed props',  () => {
    expect(instance.props.id).toEqual(123)
  })
})
