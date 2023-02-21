import store from '../utils/Store'
import { BadRequestError } from '../api/types'

export const setDataToStore = (namespace: string, data: unknown) => {
  store.set(`${namespace}.data`, data)
}

export const setErrorToStore = (namespace: string, error: unknown = '') => {
  store.set(`${namespace}.error`, error)
}

export const setLoadingStateToStore = (namespace: string, state: boolean) => {
  store.set(`${namespace}.isLoading`, state)
}

export const request = async (namespace: string, cb: () => unknown) => {
  setLoadingStateToStore(namespace, true)
  try {
    await cb()
    setErrorToStore(namespace, '')
  } catch (e) {
    setErrorToStore(namespace, e)
  } finally {
    setLoadingStateToStore(namespace, false)
  }
}
export const isBadRequest = (obj: object): obj is BadRequestError => {
  return 'reason' in obj
}
