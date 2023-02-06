import BaseAPI from './BaseAPI'

enum ProfileAPIPath {
  Profile = '/profile',
  Password = '/password',
}

class ProfileAPI extends BaseAPI {
  constructor() {
    super('/user')
  }

  update(data: unknown): Promise<Response> {
    return this.http.put(ProfileAPIPath.Profile, { data })
  }

  updatePassword(data: unknown): Promise<Response> {
    return this.http.put(ProfileAPIPath.Password, { data })
  }

  getUserInfo(id: number): Promise<Response> {
    return this.http.get(`/${id}`)
  }

  create = undefined
  delete = undefined
  read = undefined
}

export default new ProfileAPI()
