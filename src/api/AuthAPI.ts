import BaseApi from './BaseApi';
import { SignInData, SignUpData, User } from './types';
export class AuthAPI extends BaseApi {
  constructor() {
    super('/auth');
  }

  public signin(data: SignInData): Promise<unknown> {
    return this.http.post('/signin', { data });
  }

  public signup(data: SignUpData): Promise<unknown> {
    return this.http.post('/signup', { data });
  }

  public logout(): Promise<unknown> {
    return this.http.post('/logout', {});
  }

  public getUser(): Promise<User> {
    return this.http.get('/user');
  }

  update = undefined
  delete = undefined
  create = undefined
  read = undefined
}
