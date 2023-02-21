import BaseAPI from './BaseAPI'
import { Misspelled, SignInData, SignUpData, User } from './types'

enum AuthAPIPath {
  SignIn = '/signin',
  SignUp = '/signup',
  Logout = '/logout',
  User = '/user',
}
class UserAPI extends BaseAPI {
  constructor() {
    super('/auth')
  }

  public signIn(data: SignInData): Promise<Misspelled<Response>> {
    return this.http.post(AuthAPIPath.SignIn, { data })
  }

  public signUp(data: SignUpData): Promise<Misspelled<Response>> {
    return this.http.post(AuthAPIPath.SignUp, { data })
  }

  public logout(): Promise<Misspelled<Response>> {
    return this.http.post(AuthAPIPath.Logout, {})
  }

  public getUser(): Promise<Misspelled<User>> {
    return this.http.get(AuthAPIPath.User)
  }

  update = undefined
  delete = undefined
  create = undefined
  read = undefined
}

export default new UserAPI()
