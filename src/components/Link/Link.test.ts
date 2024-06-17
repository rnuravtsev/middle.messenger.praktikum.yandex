import { Link } from './Link'

describe('Link', () => {
  let routerMock: any

  beforeEach(() => {
    routerMock = {
      go: jest.fn()
    }
  })

  it('should call Router to go on click', () => {
    const link = new Link({
      label: 'Click me',
      href: '/test',
      router: routerMock as any
    })

    const element = link.element

    element?.click()

    expect(routerMock.go).toHaveBeenCalled()
  })

  it('should call Router with href on click', () => {
    const link = new Link({
      label: 'Click me',
      href: '/test',
      router: routerMock as any
    })

    const element = link.element

    element?.click()

    expect(routerMock.go).toHaveBeenCalledWith('/test')
  })
})
