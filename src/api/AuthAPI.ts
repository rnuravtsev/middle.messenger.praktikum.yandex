import BaseAPI from './BaseAPI';
import { SignInData, SignUpData, User } from './types';

enum AuthAPIPath {
  SignIn = '/signin',
  SignUp = '/signup',
  Logout = '/logout',
  User = '/user',
}
class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  public signIn(data: SignInData): Promise<unknown> {
    return this.http.post(AuthAPIPath.SignIn, { data });
  }

  public signUp(data: SignUpData): Promise<unknown> {
    return this.http.post(AuthAPIPath.SignUp, { data });
  }

  public logout(): Promise<unknown> {
    return this.http.post(AuthAPIPath.Logout, {});
  }

  public getUser(): Promise<User> {
    return this.http.get(AuthAPIPath.User);
  }

  update = undefined
  delete = undefined
  create = undefined
  read = undefined
}

export default new AuthAPI();
