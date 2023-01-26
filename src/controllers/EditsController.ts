import ProfileAPI from '../api/ProfileAPI';

class EditController {
  async changeUserInfo(data: unknown) {
    return await ProfileAPI.update(data);
  }
}

export default new EditController();
