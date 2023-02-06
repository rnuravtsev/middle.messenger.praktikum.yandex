import EventBus from '../core/EventBus'
import { set } from '../helpers/helpers'
import { Chat, Message, User } from '../api/types'

export const enum StoreEvents {
  Updated = 'updated',
}

export interface State {
  user: {
    data: Nullable<User>,
    error: string,
    isLoading: boolean,
  }
  chats?: {
    data: Nullable<Chat[]>,
    error: string,
    isLoading: boolean,
  }
  messages?: Record<number, Message[]>,
  activeChatId?: number,
}

class Store extends EventBus {
  private state: any = {}

  public set(key: string, value: unknown): void {
    set(this.state, key, value)

    this.emit(StoreEvents.Updated, this.getState())
  }

  public getState(): State {
    return this.state
  }
}

const store = new Store()

export default store
