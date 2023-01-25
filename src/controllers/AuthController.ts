import { SignUpData, SignInData } from '../api/types';
import { AuthAPI } from '../api/AuthAPI';
import store from '../utils/Store';
import Router from 'core/Router';
import { Routes } from '../index';

class AuthController {
  private api = new AuthAPI();

  async request(cb: () => void) {
    store.set('user.loading', true)

    try {
      await cb()
      store.set('user.error', '')
    } catch (e) {
      console.log('Error during request');
      store.set('user.error', e)
    } finally {
      store.set('user.loading', false)
    }
  }

  async signUp(data: SignUpData) {
    await this.request(async () => {
      await this.api.signUp(data);
      await this.fetchUser();

      Router.go(Routes.Profile)
    });
  }

  async signIn(data: SignInData) {
    await this.request(async () => {
      await this.api.signIn(data);
      await this.fetchUser();
      Router.go(Routes.Profile)
    })
  }

  async logout() {
    await this.request(async () => {
      await this.api.logout()

      Router.go(Routes.Onboard)
    })
  }

  async fetchUser() {
    try {
      const user = await this.api.getUser()
      store.set('user.data', user)
    } catch (e) {
      store.set('user.data', null)
    }
  }
}

export default new AuthController();
