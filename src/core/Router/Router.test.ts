import Router from './Router'
describe('core/Router', () => {
  beforeEach(() => {
    Router.reset()
  })

  it('router should go forward through history', () => {
    Router.forward()

    expect((window.history.forward as any).calledOnce)
  })

  it('router should go back through history', () => {
    Router.back()

    expect((window.history.back as any).calledOnce)
  })
})
