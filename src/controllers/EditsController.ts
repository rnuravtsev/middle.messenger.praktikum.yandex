import ProfileAPI from '../api/UserAPI'
import { isBadRequest, request, setDataToStore } from './utils'
import { ChangePasswordRequest, UserRequest } from '../api/types'

class EditController {
  private api = ProfileAPI
  private namespace = 'user'

  async changeUserInfo(data: UserRequest) {
    await request(this.namespace, async () => {
      const response = await this.api.update(data)
      if (isBadRequest(response)) {
        throw new Error(response.reason)
      }

      setDataToStore(this.namespace, response)
    })
  }

  async changeUserPassword(data: ChangePasswordRequest) {
    await request(this.namespace, async () => {
      const response = await this.api.updatePassword(data)
      if (isBadRequest(response)) {
        throw new Error(response.reason)
      }

      setDataToStore(this.namespace, data)
    })
  }

  async changeUserAvatar(data: FormData) {
    await request(this.namespace, async () => {
      const response = await this.api.updateAvatar(data)
      if (isBadRequest(response)) {
        throw new Error(response.reason)
      }

      setDataToStore(this.namespace, response)
    })
  }

  async getUser(id: number) {
    await request(this.namespace, async () => {
      const response = await this.api.getUserInfo(id)
      if (isBadRequest(response)) {
        throw new Error(response.reason)
      }

      setDataToStore(this.namespace, response)
    })
  }
}

export default new EditController()
