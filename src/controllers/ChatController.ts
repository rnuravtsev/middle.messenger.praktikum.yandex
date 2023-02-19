import ChatAPI from '../api/ChatAPI'
import { request, setDataToStore } from './utils'
import MessagesController from './MessagesController'
import { ChatDeleteData, CreateChatData, FindUserRequest, UsersRequestData } from '../api/types'
import UserAPI from '../api/UserAPI'
import { User } from '../api/types'

class ChatController {
  private api = ChatAPI
  private namespace = 'chats'

  getToken(id: number) {
    return this.api.getToken(id)
  }

  async getChats() {
    await request(this.namespace,async () => {
      const chats = await this.api.fetchChats()

      await Promise.all(chats.map(async (chat) => {
        const token = await this.getToken(chat.id)

        return MessagesController.connect(chat.id, token)
      }))

      setDataToStore(this.namespace, chats)
    })
  }

  async createChat(data: CreateChatData) {
    await request(this.namespace,async () => {
      const chat = await this.api.create(data)
      setDataToStore(this.namespace, chat)
    })
  }

  async deleteChat(id: ChatDeleteData) {
    await request(this.namespace,async () => {
      await this.api.delete(id)
      setDataToStore(this.namespace, id)
    })
  }

  async searchUser(login: FindUserRequest): Promise<User[]> {
    return UserAPI.search(login)
  }

  async addUserToChat(data: UsersRequestData) {
    await request(this.namespace,async () => {
      const chatUsers = await this.api.getChatUsers(data.chatId)

      if (chatUsers.some((user) => user.id === data.users[0])) {
        return
      }

      const chat = await this.api.addUsers(data)
      setDataToStore(this.namespace, chat)
    })
  }

  async deleteUserFromChat(data: UsersRequestData) {
    await request(this.namespace,async () => {
      const chatUsers = await this.api.getChatUsers(data.chatId)

      if (chatUsers.some((user) => user.id === data.users[0])) {
        return
      }

      const chat = await this.api.removeUsers(data)
      setDataToStore(this.namespace, chat)
    })
  }
}

export default new ChatController()
