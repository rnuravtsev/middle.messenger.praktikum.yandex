import ProfileAPI from '../api/ProfileAPI';
import { request, setDataToStore } from './utils';

class EditController {
  private api = ProfileAPI;
  private namespace = 'user';
  async changeUserInfo(data: unknown) {
    await request(this.namespace, async () => {
      await this.api.update(data);
    });
  }

  async changeUserPassword(data: unknown) {
    await request(this.namespace, async () => {
       await this.api.updatePassword(data);
    })
  }

  async getUser(id: number) {
    await request(this.namespace, async () => {
      const userInfo = await this.api.getUserInfo(id);
      setDataToStore(this.namespace, userInfo)
    })
  }
}

export default new EditController();
