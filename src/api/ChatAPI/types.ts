export type CreateChatData = {
  title: string,
}

export type ChatDeleteData = {
  chatId: number,
}

export type UsersRequestData = {
  users: number[],
  chatId: number,
}
