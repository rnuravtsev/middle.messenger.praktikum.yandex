import { EventBus } from 'core/EventBus'
import { Chat, Message, User } from '../api/types'
import { set } from '../helpers/helpers'

export const enum StoreEvents {
  Updated = 'updated',
}
export interface State {
  user?: {
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
  modalAddUser?: boolean,
  modalAddChat?: boolean,
  modalDeleteUser?: boolean,
  modalDeleteChat?: boolean,
  activeChatId?: number,
}


export class Store extends EventBus {
  state: Indexed = {}

  constructor() {
    super()
    this.state = {}
  }

  getState() {
    return this.state
  }

  removeState() {
    this.state = {}
    this.emit(StoreEvents.Updated)
  }

  set(path: string, value: unknown) {
    set(this.state, path, value)

    this.emit(StoreEvents.Updated)
    return this
  }
}

const store = new Store()

export default store
