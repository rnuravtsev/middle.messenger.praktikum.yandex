const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

interface IOptions {
  method?: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  headers?: {},
  data?: any,
  timeout?: number
}

function queryStringify(data: any) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(url = '/'): Promise<Response> {
    return this.request(`${this.endpoint}${url}`);
  }

  public post<Response>(url: string, options = {} as IOptions): Promise<Response> {
    return this.request(`${this.endpoint}${url}`, {
      data: JSON.stringify(options.data),
      method: METHODS.POST
    }, options?.timeout);
  }

  public put<Response>(url: string, options = {} as IOptions): Promise<Response> {
    return this.request(`${this.endpoint}${url}`, { ...options, method: METHODS.PUT }, options?.timeout);
  }

  public delete<Response>(url: string, options = {} as IOptions): Promise<Response> {
    return this.request(`${this.endpoint}${url}`, {
      ...options,
      method: METHODS.DELETE
    }, options?.timeout);
  }

  private request<Response>(url: string, options: IOptions = {} as IOptions, timeout = 5000): Promise<Response> {
    const { headers = {}, method = 'GET', data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => resolve(xhr.response);
      xhr.timeout = timeout;

      xhr.onabort = () => reject({ reason: 'abort' });
      xhr.onerror = () => reject({ reason: 'error' });
      xhr.ontimeout = () => reject({ reason: 'timeout' });


      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
