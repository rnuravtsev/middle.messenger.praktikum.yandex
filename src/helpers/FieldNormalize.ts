import { User } from '../api/types'
import { isEmpty, omit } from './helpers'

const FieldType = {
  login: 'text',
  first_name: 'text',
  second_name: 'text',
  display_name: 'text',
  email: 'email',
  phone: 'tel',
  password: 'password',
  oldPassword: 'password',
  newPassword: 'password',
  repeatedNewPassword: 'password',
} as Record<string, string>

export const LabelName = {
  login: 'Логин',
  first_name: 'Имя',
  second_name: 'Фамилия',
  display_name: 'Имя в чате',
  email: 'Почта',
  phone: 'Телефон',
  password: 'Пароль',
  oldPassword: 'Старый пароль',
  newPassword: 'Новый пароль',
  repeatedNewPassword: 'Повторите новый пароль',
} as Record<string, string>
class FieldNormalize {
  getFields(obj: User, fields: string[]): Record<string, unknown> {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (fields.includes(key)) {
        return {
          ...acc,
          [key]: value,
        }
      } else {
        return acc
      }
    }, {})
  }
  omitFields(obj: Record<string, unknown>, fields: string[] = ['id', 'avatar']) {
    return omit(obj, fields)
  }
  createFields(
    fields: string[] = Object.keys(FieldType),
    obj: User | Record<string, unknown> = {}) {

    let resolveObj

    if (!isEmpty(obj)) {
      resolveObj = this.getFields(obj as User, fields)
    } else {
      resolveObj = fields.reduce((acc, field) => {
        return {
          ...acc,
          [field]: '',
        }
      }, {})
    }

    return Object.entries(this.omitFields(resolveObj))
      .map(([key, value]) => {
        return {
          labelText: LabelName[key],
          name: key,
          type: FieldType[key],
          value: value,
        }
      })
  }
}

export default new FieldNormalize()
