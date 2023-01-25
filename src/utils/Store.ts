import EventBus from '../core/EventBus';
import { set } from '../helpers/helpers';

export const enum StoreEvents {
  UPDATED = 'updated',
}

class Store extends EventBus {
  private state: Record<string, unknown> = {};

  public getState(): Record<string, unknown> {
    return this.state
  }

  public set(key: string, value: unknown): void {
    set(this.state, key, value)

    this.emit(StoreEvents.UPDATED, this.getState())
  }
}

const store = new Store()

export default store
