import EventBus from 'core/EventBus';

enum SocketEvents {
  Message = 'message',
}

export class WSTransport extends EventBus {
  private socket: Nullable<WebSocket> = null;
  constructor(private url: string) {
    super();
  }

  connect() {
    this.socket = new WebSocket(this.url)

    this.subscribe(this.socket)
  }

  send(data: unknown) {
    if (!this.socket) {
      throw new Error('Websocket connection is not established')
    }
    this.socket?.send(JSON.stringify(data))
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener('message', (message) => {
      const data = JSON.parse(message.data)

      if(data?.type === 'pong') {
        return
      }

      this.emit(SocketEvents.Message, data)
    })
  }
}
