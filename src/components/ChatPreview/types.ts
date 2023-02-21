export type ChatProps = {
  title: string,
  avatar: string,
  message: {
    prefix: boolean,
    text: string,
  },
  time: string,
  count: number
}

export type ChatNew = {
  'id': number,
  'title': string,
  'avatar': string,
  'unread_count': 15,
  'last_message': {
    'user': {
      'first_name': string,
      'second_name': string,
      'avatar': string,
      'email': string,
      'login': string,
      'phone': string,
    },
    'time': string,
    'content': string,
  }
}
