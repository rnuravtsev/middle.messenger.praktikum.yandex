import { SignUpData, SignInData } from '../api/types';
import { AuthAPI } from '../api/AuthAPI';
import store from '../utils/Store';
import Router from 'core/Router';
import { Routes } from '../index';

class AuthController {
  private api = new AuthAPI();

  async signup(data: SignUpData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();

      Router.go(Routes.Profile)
    } catch (e) {
      console.log('Error during signing up');
      store.set('error', e)
    }
  }

  async signin(data: SignInData) {
    try {
      await this.api.signin(data);
      await this.fetchUser();

      Router.go(Routes.Profile)
    } catch (e) {
      console.log('Error during signing in');
      store.set('error', e)
    }
  }

  async logout() {
    try {
      await this.api.logout()

      Router.go(Routes.Onboard)
    } catch (e) {
      console.log('Error during logout');
      store.set('error', e)
    }
  }

  async fetchUser() {
    store.set('user.loading', true)

    try {
      const user = await this.api.getUser()
      store.set('user.data', user)
    } catch (e) {
      console.log('Error during fetching user');
      store.set('user.error', e)
    } finally {
      store.set('user.loading', false)
    }
  }
}

export default new AuthController();
