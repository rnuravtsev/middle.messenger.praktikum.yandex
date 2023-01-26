import BaseApi from './BaseApi';

class ProfileAPI extends BaseApi {
  constructor() {
    super('/user');
  }

  getProfile() {
    return this.http.get('/');
  }

  //TODO: change type any
  update(data: any): Promise<Response> {
    return this.http.put('/profile', { data });
  }

  create = undefined
  delete = undefined
  read = undefined
}

export default new ProfileAPI();
