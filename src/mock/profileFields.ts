import { ValidateRuleType } from '../utils/validateForm';

export const profileFields = [
  {
    title: 'Почта',
    text: 'abs@gmail.com',
    name: ValidateRuleType.Email
  },
  {
    title: 'Логин',
    text: 'kReal',
    name: ValidateRuleType.Login
  },
  {
    title: 'Имя',
    text: 'Кирилл',
    name: ValidateRuleType.FirstName
  },
  {
    title: 'Фамилия',
    text: 'Фомин',
    name: ValidateRuleType.SecondName
  },
  {
    title: 'Имя в чате',
    text: 'kReal',
    name: ValidateRuleType.FirstName
  },
  {
    title: 'Телефон',
    text: '7 (917) 234 54 23',
    name: ValidateRuleType.Phone
  },
]
