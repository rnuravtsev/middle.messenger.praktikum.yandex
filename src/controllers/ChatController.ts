import ChatAPI from '../api/ChatAPI'
import { isBadRequest, request, setDataToStore } from './utils'
import MessagesController from './MessagesController'
import {
  Chat,
  ChatDeleteRequest,
  CreateChatData,
  FindUserRequest,
  Misspelled,
  User,
  UsersRequestData
} from '../api/types'
import UserAPI from '../api/UserAPI'
import store from '../utils/Store'

class ChatController {
  private api = ChatAPI
  private namespace = 'chats'

  getToken(id: number) {
    return this.api.getToken(id)
  }

  async getChats() {
    await request(this.namespace, async () => {
      const response = await this.api.fetchChats()

      if (isBadRequest(response)) {
        throw new Error(response.reason)
      }

      await Promise.all((response).map(async (chat) => {
        const token = await this.getToken(chat.id)

        return MessagesController.connect(chat.id, token)
      }))

      setDataToStore(this.namespace, response)

    })
  }

  async createChat(data: CreateChatData) {
    await request(this.namespace, async () => {
      const response = await this.api.create(data)
      if (isBadRequest(response)) {
        throw new Error(response.reason)
      }

      setDataToStore(this.namespace, response)
    })
  }

  async deleteChat(chatId: ChatDeleteRequest) {
    await request(this.namespace, async () => {
      const response = await this.api.delete(chatId)

      if (isBadRequest(response)) {
        throw new Error(response.reason)
      }

      const deletedChatId = response.result.id
      const chats = store.getState().chats?.data

      const filteredChats = chats?.filter((chat: Chat) => chat.id !== deletedChatId)

      setDataToStore(this.namespace, filteredChats)
    })
  }

  async searchUser(login: FindUserRequest): Promise<Misspelled<User[]>> {
    const response = UserAPI.search(login)

    if (isBadRequest(response)) {
      throw new Error(response.reason)
    }

    return response
  }

  async addUserToChat(data: UsersRequestData) {
    await request(this.namespace, async () => {
      const response = await this.api.getChatUsers(data.chatId)

      if (isBadRequest(response)) {
        throw new Error(response.reason)
      }

      if (response.some((user) => user.id === data.users[0])) {
        return
      }

      const chat = await this.api.addUsers(data)
      setDataToStore(this.namespace, chat)
    })
  }

  async deleteUserFromChat(data: UsersRequestData) {
    await request(this.namespace, async () => {
      const response = await this.api.getChatUsers(data.chatId)

      if (isBadRequest(response)) {
        throw new Error(response.reason)
      }

      if (response.some((user) => user.id === data.users[0])) {
        return
      }

      const chat = await this.api.removeUsers(data)
      setDataToStore(this.namespace, chat)
    })
  }
}

export default new ChatController()
