import store from '../utils/Store';

export const setDataToStore = (namespace: string, data: unknown) => {
  store.set(`${namespace}.data`, data)
}

export const setErrorToStore = (namespace: string, error: unknown = '') => {
  store.set(`${namespace}.error`, error)
}

export const setLoadingToStore = (namespace: string, loading: boolean) => {
  store.set(`${namespace}.loading`, loading)
}

export const request = async (namespace: string, cb: () => void) => {
  setLoadingToStore(namespace, true)
  try {
    await cb();
    setErrorToStore(namespace)
  } catch (e) {
    setErrorToStore(namespace, e)
  } finally {
    setLoadingToStore(namespace, false)
  }
}
