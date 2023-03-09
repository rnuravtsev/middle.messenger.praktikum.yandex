import { EventBus } from 'core/EventBus'
import { Chat, Message, User } from '../../api/types'
import { set } from 'helpers/helpers'

export const enum StoreEvents {
  Updated = 'updated',
}
export interface AppState {
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
  private readonly state: AppState = {}

  constructor(state: AppState) {
    super()
    this.state = state
  }

  getState() {
    return this.state
  }

  set(path: string, value: unknown) {
    set(this.state, path, value)

    this.emit(StoreEvents.Updated, this.getState())
    return this
  }
}

const store = new Store({})

export default store
