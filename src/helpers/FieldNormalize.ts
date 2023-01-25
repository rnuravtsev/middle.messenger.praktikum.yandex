import { User } from '../api/types';
import { omit } from './helpers';

const fieldTypeMap = {
  login: 'text',
  first_name: 'text',
  second_name: 'text',
  display_name: 'text',
  email: 'email',
  phone: 'tel',
  password: 'password',
} as Record<string, string>;

export const fieldLabelMap = {
  login: 'Логин',
  first_name: 'Имя',
  second_name: 'Фамилия',
  display_name: 'Имя в чате',
  email: 'Почта',
  phone: 'Телефон',
  password: 'Пароль',
} as Record<string, string>;
class FieldNormalize {
  omitFields(obj: User, fields: string[] = ['id', 'avatar', 'display_name']) {
    return omit(obj, fields);
  }
  createFields(obj: User) {
    return Object.entries(this.omitFields(obj))
      .map(([key, value]) => {
        return {
          labelText: fieldLabelMap[key],
          name: key,
          type: fieldTypeMap[key],
          value: value,
        }
      });
  }
}

export default new FieldNormalize();
