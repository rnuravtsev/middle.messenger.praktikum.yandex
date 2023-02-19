import BaseAPI from './BaseAPI'
import { FindUserRequest, User } from './types'

enum UserAPIPath {
  Profile = '/profile',
  Password = '/password',
  Search = '/search',
}

class UserAPI extends BaseAPI {
  constructor() {
    super('/user')
  }

  update(data: unknown): Promise<Response> {
    return this.http.put(UserAPIPath.Profile, { data })
  }

  updatePassword(data: unknown): Promise<Response> {
    return this.http.put(UserAPIPath.Password, { data })
  }

  search(login: FindUserRequest): Promise<User[]> {
    return this.http.post(UserAPIPath.Search, { data: login })
  }

  getUserInfo(id: number): Promise<Response> {
    return this.http.get(`/${id}`)
  }

  create = undefined
  delete = undefined
  read = undefined
}

export default new UserAPI()
