import BaseApi from './BaseApi';

class ProfileAPI extends BaseApi {
  constructor() {
    super('/user');
  }

  //TODO: change type any
  update(data: any): Promise<Response> {
    return this.http.put('/profile', { data });
  }

  updatePassword(data: any): Promise<Response> {
    return this.http.put('/password', { data });
  }

  getUserInfo(id: number): Promise<Response> {
    return this.http.get(`/${id}`);
  }

  create = undefined
  delete = undefined
  read = undefined
}

export default new ProfileAPI();
