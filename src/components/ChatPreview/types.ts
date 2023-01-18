export type TChat = {
  title: string,
  avatar: string,
  message: {
    prefix: boolean,
    text: string,
  },
  time: string,
  count: number
}
