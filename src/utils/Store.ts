import EventBus from '../core/EventBus';
import { set } from '../helpers/helpers';

const enum StoreEvents {
  UPDATED = 'updated',
}

class Store extends EventBus {
  private static state: Record<string, unknown> = {};

  public static getState(): Record<string, unknown> {
    return this.state
  }

  public set(key: string, value: unknown): void {
    // TODO: Реализовать метод из теории
    set(Store.state, key, value)

    this.emit(StoreEvents.UPDATED, Store.getState())
  }
}

const store = new Store()

export default store
