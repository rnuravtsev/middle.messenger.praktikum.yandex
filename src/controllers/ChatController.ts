import ChatAPI from '../api/ChatAPI';
import { request, setDataToStore } from './utils';

class ChatController {
  private api = ChatAPI;
  private namespace = 'chats';

  async getChats() {
    await request(this.namespace,async () => {
      const chats = await this.api.fetchChats();
      setDataToStore(this.namespace, chats)
    })
  }
}

export default new ChatController();
