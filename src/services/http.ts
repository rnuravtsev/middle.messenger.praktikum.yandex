import { queryStringify } from '../helpers/helpers'

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

interface IOptions {
  method?: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  headers?: {},
  data?: any,
  timeout?: number
}

type HTTPMethod<T = any> = (url: string, options?: IOptions) => Promise<T>

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2'
  protected endpoint: string

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`
  }

  public get: HTTPMethod =  (url = '/') => {
    return this.request(`${this.endpoint}${url}`)
  }

  public post: HTTPMethod = (url, options) => {
    return this.request(`${this.endpoint}${url}`, {
      data: options?.data,
      method: METHODS.POST
    }, options?.timeout)
  }

  public put: HTTPMethod = (url, options) => {
    return this.request(`${this.endpoint}${url}`,
      {
        data: options?.data,
        method: METHODS.PUT
      }
      , options?.timeout)
  }

  public delete: HTTPMethod = (url, options) => {
    return this.request(`${this.endpoint}${url}`, {
      ...options,
      method: METHODS.DELETE
    }, options?.timeout)
  }

  private request<Response>(url: string, options: IOptions = {} as IOptions, timeout = 5000): Promise<Response> {
    const { headers = {}, method = METHODS.GET, data } = options

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method')
        return
      }

      const xhr = new XMLHttpRequest()
      const isGet = method === METHODS.GET

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      )

      Object.keys(headers).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = () => resolve(xhr.response)
      xhr.timeout = timeout

      xhr.onabort = () => reject({ reason: 'abort' })
      xhr.onerror = () => reject({ reason: 'error' })
      xhr.ontimeout = () => reject({ reason: 'timeout' })


      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json')
      }

      xhr.withCredentials = true
      xhr.responseType = 'json'


      if (isGet || !data) {
        xhr.send()
        return
      }

      if (data instanceof FormData) {
        xhr.send(data)
        return
      }

      xhr.send(JSON.stringify(data))
    })
  }
}
