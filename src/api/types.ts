export interface Chat {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: {
    user: {
      first_name: string,
      second_name: string,
      avatar: string,
      email: string,
      login: string,
      phone: string
    },
    time: string,
    content: string
  }
}

export interface SignUpData {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}

export interface SignInData {
  login: string,
  password: string
}

export interface User {
  [key: string]: unknown
  id: number,
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string,
  avatar: string
}

export interface Message {
  chat_id: number,
  time: string,
  type: string,
  user_id: string,
  content: string,
  file?: {
    id: number,
    user_id: number,
    path: string,
    filename: string,
    content_type: string,
    content_size: number,
    upload_date: string,
  }
}

export type CreateChatData = {
  title: string,
}
export type ChatDeleteData = {
  chatId: number,
}

export type UserRequest = {
  first_name:	string
  second_name:	string

  display_name:	string

  login:	string

  email:	string

  phone:	string
}

export type UsersRequestData = {
  users: number[],
  chatId: number,
}

export type FindUserRequest = {
  login:	string
}

export type CreateChatRequest = {
  title:	string
}

export type ChangePasswordRequest = {
  oldPassword: string,

  newPassword:string
}

export type BadRequestError = {
  reason: string,
}

export type Misspelled<T> = T | BadRequestError
