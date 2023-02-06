import EventBus from 'core/EventBus'

export enum SocketEvents {
  Message = 'message',
  Close = 'close',
  Connected = 'connected',
  Error = 'error',
}

export class WSTransport extends EventBus {
  private socket: Nullable<WebSocket> = null
  private pingInterval: ReturnType<typeof setTimeout> | number = 0

  constructor(private url: string) {
    super()
  }

  connect() {
    this.socket = new WebSocket(this.url)

    this.subscribe(this.socket)

    this.setupPing()

    return new Promise((resolve, reject) => {
      this.on(SocketEvents.Connected, resolve)
      this.on(SocketEvents.Error, reject)
    })
  }

  send(data: unknown) {
    if (!this.socket) {
      throw new Error('Websocket connection is not established')
    }

    this.socket?.send(JSON.stringify(data))
  }

  close() {
    if (!this.socket) {
      throw new Error('Websocket connection is not established')
    }

    this.socket?.close()
  }

  private setupPing() {
    this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' })
    }, 5000)

    this.on(SocketEvents.Close, () => {
      clearInterval(this.pingInterval)

      this.pingInterval = 0
    })
  }


  private subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(SocketEvents.Connected)
    })

    socket.addEventListener('close', () => {
      this.emit(SocketEvents.Close)
    })

    socket.addEventListener('error', (e) => {
      this.emit(SocketEvents.Error, e)
    })

    socket.addEventListener('message', (message) => {
      const data = JSON.parse(message.data)

      if (data?.type === 'pong') {
        return
      }

      this.emit(SocketEvents.Message, data)
    })
  }
}
