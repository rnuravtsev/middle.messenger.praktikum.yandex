import BaseAPI from '../BaseAPI';
import { ChatDeleteData, CreateChatData, UsersRequestData } from './types';
class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  async fetchChats() {
    return this.http.get('/');
  }

  async create(data: CreateChatData): Promise<Response> {
    return this.http.post('/', { data });
  }

  async delete(id: ChatDeleteData): Promise<Response> {
    return this.http.delete(`/${id}`);
  }

  async addUsers(data: UsersRequestData): Promise<Response> {
    return this.http.put('/users', { data });
  }

  async removeUsers(data: UsersRequestData): Promise<Response> {
    return this.http.delete('/users', { data });
  }

  read = undefined
  update = undefined
}

export default new ChatAPI();
