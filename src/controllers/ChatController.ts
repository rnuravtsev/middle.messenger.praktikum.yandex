import ChatAPI from '../api/ChatAPI/ChatAPI';
import { request, setDataToStore } from './utils';
import { CreateChatData, UsersRequestData } from '../api/ChatAPI/types';

class ChatController {
  private api = ChatAPI;
  private namespace = 'chats';

  async getChats() {
    await request(this.namespace,async () => {
      const chats = await this.api.fetchChats();
      setDataToStore(this.namespace, chats)
    })
  }

  async createChat(data: CreateChatData) {
    await request(this.namespace,async () => {
      const chat = await this.api.create(data);
      setDataToStore(this.namespace, chat);
    })
  }

  async addUserToChat(data: UsersRequestData) {
    await request(this.namespace,async () => {
      const chat = await this.api.addUsers(data);
      setDataToStore(this.namespace, chat);
    })
  }

  async deleteUserFromChat(data: UsersRequestData) {
    await request(this.namespace,async () => {
      const chat = await this.api.removeUsers(data);
      setDataToStore(this.namespace, chat);
    })
  }
}

export default new ChatController();
