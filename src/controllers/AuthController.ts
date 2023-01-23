import { SignUpData, SignInData } from '../api/types';
import { AuthAPI } from '../api/AuthAPI';
import store from '../utils/Store';
import Router from 'core/Router';
import { Routes } from '../index';

class AuthController {
  private api = new AuthAPI();

  async request(cb: () => void) {
    try {
      store.set('user.loading', true)
      await cb()
    } catch (e) {
      console.log('Error during request');
      store.set('error', e)
    } finally {
      store.set('user.loading', false)
    }
  }

  async signup(data: SignUpData) {
    await this.request(async () => {
      await this.api.signup(data);
      await this.fetchUser();

      Router.go(Routes.Profile)
    });
  }

  async signin(data: SignInData) {
    await this.request(async () => {
      await this.api.signin(data);
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
    await this.request(async () => {
      const user = await this.api.getUser()
      store.set('user.data', user)
      store.set('user.error', null)
    })
  }
}

export default new AuthController();
