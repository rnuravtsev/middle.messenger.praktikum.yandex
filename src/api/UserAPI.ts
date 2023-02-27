import BaseAPI from './BaseAPI'
import { ChangePasswordRequest, FindUserRequest, Misspelled, User, UserRequest } from './types'

enum UserAPIPath {
  Profile = '/profile',
  Password = '/password',
  Search = '/search',
  Avatar = '/profile/avatar',
}

class UserAPI extends BaseAPI {
  constructor() {
    super('/user')
  }

  update(data: UserRequest): Promise<Misspelled<UserRequest>> {
    return this.http.put(UserAPIPath.Profile, { data })
  }

  updatePassword(data: ChangePasswordRequest): Promise<Misspelled<Response>> {
    return this.http.put(UserAPIPath.Password, { data })
  }

  search(login: FindUserRequest): Promise<Misspelled<User[]>> {
    return this.http.post(UserAPIPath.Search, { data: login })
  }

  getUserInfo(id: number): Promise<User> {
    return this.http.get(`/${id}`)
  }

  updateAvatar(data: FormData): Promise<Misspelled<User>> {
    return this.http.put(UserAPIPath.Avatar, { data })
  }

  create = undefined
  delete = undefined
  read = undefined
}

export default new UserAPI()
