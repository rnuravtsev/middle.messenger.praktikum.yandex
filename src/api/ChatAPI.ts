import BaseAPI from './BaseAPI'
import { Chat, User, ChatDeleteData, CreateChatData, UsersRequestData, Misspelled } from './types'

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
    const response = await this.http.post(`${ChatAPIPath.Token}/${id}`)
    return response.token
  }

  async fetchChats(): Promise<Misspelled<Chat[]>> {
    return this.http.get(ChatAPIPath.Chats)
  }

  async create(data: CreateChatData): Promise<Misspelled<Response>> {
    return this.http.post(ChatAPIPath.Chats, { data })
  }

  async delete(id: ChatDeleteData): Promise<Misspelled<Response>> {
    return this.http.delete(`/${id}`)
  }

  async addUsers(data: UsersRequestData): Promise<Misspelled<Response>> {
    return this.http.put(ChatAPIPath.Users, { data })
  }

  async removeUsers(data: UsersRequestData): Promise<Misspelled<Response>> {
    return this.http.delete(ChatAPIPath.Users, { data })
  }

  async getChatUsers(id: number): Promise<Misspelled<User[]>> {
    return this.http.get(`/${id}${ChatAPIPath.Users}`)
  }

  read = undefined
  update = undefined
}

export default new ChatAPI()
