import Router from './Router'

describe('core/Router', () => {
  const originalHistoryForward = window.history.forward
  const originalHistoryBack = window.history.back

  beforeEach(() => {
    Router.reset()

    window.history.forward = jest.fn()
    window.history.back = jest.fn()
  })

  afterAll(() => {
    window.history.forward = originalHistoryForward
    window.history.back = originalHistoryBack
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
