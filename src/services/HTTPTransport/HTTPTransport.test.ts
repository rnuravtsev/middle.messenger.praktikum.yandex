import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon'
import HTTPTransport from './HTTPTransport'

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic
  let instance: HTTPTransport
  const requests: SinonFakeXMLHttpRequest[] = []
  const TEST_ENDPOINT = '/'

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest()

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    global.XMLHttpRequest = xhr

    xhr.onCreate = (xhr) => (requests.push(xhr))

    instance = new HTTPTransport(TEST_ENDPOINT)
  })

  afterEach(() => {
    requests.length = 0
  })

  it('.get() should send GET request', () => {
    instance.get('/')

    const [request] = requests

    expect(request.method).toEqual('GET')
  })

  it('.post() should send correct payload', () => {
    const fakeData = { chatId: 322 }
    instance.post('/', {
      data: fakeData
    })

    const [request] = requests

    expect(request.requestBody).toEqual(JSON.stringify(fakeData))
  })

  it('.request() should contain correct headers, when data is FormData', () => {

    instance.post('', {
      data: new FormData()
    })

    const [request] = requests

    expect(request.requestHeaders).not.toEqual({ 'Content-Type': 'application/json' })
  })

  it('.request() should contain correct headers, when data is not FormData', () => {
    // NOTE : Это добавляет фейковый xhr
    const HEADER_TAIL = ';charset=utf-8'

    instance.post('', {
      data: { users: [1, 3, 5]}
    })

    const [request] = requests

    expect(request.requestHeaders).toEqual({ 'Content-Type': `application/json${HEADER_TAIL}` })
  })

  it('.request() should pass correct url', () => {
    const fakePath = '/test'
    instance.get(fakePath)

    const [request] = requests

    expect(request.url).toEqual(`${HTTPTransport.API_URL}${TEST_ENDPOINT}${fakePath}`)
  })
})
