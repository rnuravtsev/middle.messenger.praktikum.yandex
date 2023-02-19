import store from '../utils/Store'
import { SocketEvents, WSTransport } from '../services/WSTransport'
import { Message } from '../api/types'

class MessagesController {
  private sockets: Map<number, WSTransport> = new Map()

  async connect(chatId: number, token: string) {
    if (this.sockets.has(chatId)) {
      return
    }

    const userId = store.getState()?.user?.data?.id
    const socket = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`)

    if (!token || !userId) {
      console.error('No token or userId')
      return
    }

    this.sockets.set(chatId, socket)
    await socket.connect()

    this.subscribe(socket, chatId)
    this.fetchOldMessages(chatId)
  }

  onClose(chatId: number) {
    this.sockets.delete(chatId)
  }

  fetchOldMessages(id: number) {
    const socket = this.sockets.get(id)

    if (!socket) {
      throw new Error('Socket is not connected')
    }

    socket.send({
      type: 'get old',
      content: '0',
    })

  }

  sendMessage(id: number, content: string) {
    const socket = this.sockets.get(id)

    if (!socket) {
      throw new Error('Socket is not connected')
    }


    socket.send({
      content: `${content}`,
      type: 'message'
    })
  }

  closeAll() {
    Array.from(this.sockets.values()).forEach(socket => socket.close())
  }

  private onMessage(chatId: number, messages: Message | Message[]) {
    let messagesToAdd: Message[] = []

    if (Array.isArray(messages)) {
      messagesToAdd = messages.reverse()
    } else {
      messagesToAdd.push(messages)
    }

    const currentMessages = (store.getState().messages || {})[chatId] || []

    messagesToAdd = [...currentMessages, ...messagesToAdd]

    store.set(`messages.${chatId}`, messagesToAdd)
  }

  private subscribe(socket: WSTransport, id: number) {
    socket.on(SocketEvents.Message, (message) => this.onMessage(id, message))
    socket.on(SocketEvents.Close, () => this.onClose(id))
  }
}

const messagesController = new MessagesController()

export default messagesController
