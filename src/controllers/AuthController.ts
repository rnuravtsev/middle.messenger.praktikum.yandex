import { SignUpData, SignInData } from '../api/types'
import AuthAPI from '../api/AuthAPI'
import Router from 'core/Router/Router'
import { isBadRequest, request, setDataToStore } from './utils'
import { Routes } from '../core/Router/types'

class AuthController {
  private api = AuthAPI
  private namespace = 'user'

  async signUp(data: SignUpData) {
    await request(this.namespace, async () => {
      const response = await this.api.signUp(data)
      if (isBadRequest(response)) {
        throw new Error(response.reason)
      }

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
    const response = await this.api.getUser()
      if(isBadRequest(response)) {
        throw new Error(response.reason)
      }

      setDataToStore(this.namespace, response)
  }
}

export default new AuthController()
