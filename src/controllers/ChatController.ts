import ChatAPI from '../api/ChatAPI/ChatAPI'
import { request, setDataToStore } from './utils'
import { CreateChatData, UsersRequestData } from '../api/ChatAPI/types'
import MessagesController from './MessagesController'

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

  async addUserToChat(data: UsersRequestData) {
    await request(this.namespace,async () => {
      const chat = await this.api.addUsers(data)
      setDataToStore(this.namespace, chat)
    })
  }

  async deleteUserFromChat(data: UsersRequestData) {
    await request(this.namespace,async () => {
      const chat = await this.api.removeUsers(data)
      setDataToStore(this.namespace, chat)
    })
  }
}

export default new ChatController()
