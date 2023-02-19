import BaseAPI from './BaseAPI'
import { Chat, User, ChatDeleteData, CreateChatData, UsersRequestData } from './types'

 enum ChatAPIPath {
  Chats = '/',
  Users = '/users',
  Token = '/token',
}
class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats')
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`${ChatAPIPath.Token}/${id}`)
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

  async getChatUsers(id: number): Promise<User[]> {
    return this.http.get(`/${id}${ChatAPIPath.Users}`)
  }

  read = undefined
  update = undefined
}

export default new ChatAPI()
