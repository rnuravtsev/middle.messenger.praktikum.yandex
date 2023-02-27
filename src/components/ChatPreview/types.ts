export type ChatProps = {
  title: string,
  message: {
    content: string,
    time: string,
    id: number,
    user: {
      avatar: string,
      display_name: string,
      email: string,
      first_name: string,
      login: string,
      phone: string,
      second_name: string,
    },
  },
  activeChatId: number,
  id: number,
}
