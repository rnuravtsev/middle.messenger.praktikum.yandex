import { SignUpData, SignInData } from '../api/types'
import AuthAPI from '../api/AuthAPI'
import Router from 'core/Router/Router'
import { request, setDataToStore } from './utils'
import { Routes } from '../core/Router/types'

class AuthController {
  private api = AuthAPI
  private namespace = 'user'

  async signUp(data: SignUpData) {
    await request(this.namespace, async () => {
      await this.api.signUp(data)
      await this.fetchUser()

      Router.go(Routes.Profile)
    })
  }

  async signIn(data: SignInData) {
    await request(this.namespace, async () => {
      await this.api.signIn(data)
      await this.fetchUser()

      Router.go(Routes.Profile)
    })
  }

  async logout() {
    await request(this.namespace, async () => {
      await this.api.logout()

      Router.go(Routes.Home)
    })
  }

  async fetchUser() {
    await request(this.namespace, async () => {
      const user = await this.api.getUser()
      setDataToStore(this.namespace, user)
    })
  }
}

export default new AuthController()
