import { Store } from './Store'
import { StoreEvents } from './Store'


describe('core/Store', () => {
  const store = new Store({})

  it('should set state', () => {
    store.set('userId', 123)
    expect(store.getState()).toEqual({ userId: 123 })
  })

  it('should emit event adter store was update', () => {
    const mock = jest.fn()

    store.on(StoreEvents.Updated, mock)

    store.set('userId', 123)

    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({ userId: 123 })
  })
})
