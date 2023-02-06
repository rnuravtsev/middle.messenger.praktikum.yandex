import BaseAPI from '../BaseAPI'
import { ChatDeleteData, CreateChatData, UsersRequestData } from './types'
import { Chat } from '../types'

enum ChatAPIPath {
  Chats = '/',
  Users = '/users',
  Token = 'chats/token',
}
class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats')
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`)
    return response.token
  }

  async fetchChats(): Promise<Chat[]> {
    return this.http.get(ChatAPIPath.Chats)
  }

  async create(data: CreateChatData): Promise<Response> {
    return this.http.post(ChatAPIPath.Chats, { data })
  }

  async delete(id: ChatDeleteData): Promise<Response> {
    return this.http.delete(`/${id}`)
  }

  async addUsers(data: UsersRequestData): Promise<Response> {
    return this.http.put(ChatAPIPath.Users, { data })
  }

  async removeUsers(data: UsersRequestData): Promise<Response> {
    return this.http.delete(ChatAPIPath.Users, { data })
  }

  read = undefined
  update = undefined
}

export default new ChatAPI()
