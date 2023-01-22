import { ValidateRuleType } from '../utils/validateForm';

export const editProfileFields = [
  {
    type: 'email',
    name: ValidateRuleType.Email,
    labelText: 'Почта',
    value: 'pochta@yandex.ru',
  },
  {
    name: ValidateRuleType.Login,
    labelText: 'Логин',
    value: 'ivanivanov',
  },
  {
    name: ValidateRuleType.FirstName,
    labelText: 'Имя',
    value: 'Иван',
  },
  {
    name: ValidateRuleType.SecondName,
    labelText: 'Фамилия',
    value: 'Иванов',
  },
  {
    name: ValidateRuleType.DisplayName,
    labelText: 'Имя в чате',
    value: 'Иван',
  },
  {
    type: 'tel',
    name: ValidateRuleType.Phone,
    labelText: 'Телефон',
    value: '+7 (909) 967 30 30',
  }
]
