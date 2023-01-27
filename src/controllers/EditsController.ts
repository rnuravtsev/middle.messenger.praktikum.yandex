import ProfileAPI from '../api/ProfileAPI';

class EditController {
  async changeUserInfo(data: unknown) {
    return await ProfileAPI.update(data);
  }

  async changeUserPassword(data: unknown) {
    return await ProfileAPI.updatePassword(data);
  }

  async getUser(id: number) {
    return await ProfileAPI.getUserInfo(id);
  }
}

export default new EditController();
