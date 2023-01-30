import BaseAPI from './BaseAPI';
class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  async fetchChats() {
    return this.http.get('/');
  }

  create = undefined
  read = undefined
  update = undefined
  delete = undefined
}

export default new ChatAPI();
