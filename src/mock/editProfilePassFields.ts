import { ValidateRuleType } from '../utils/validateForm';

export const editProfilePassFields = [
  {
    labelText: 'Старый пароль',
    type: 'password',
    name: ValidateRuleType.Password,
    value: '123ASdf@'
  },
  {
    labelText: 'Новый пароль',
    type: 'password',
    name: ValidateRuleType.Password,
    value: '91239ddfF'
  },
  {
    labelText: 'Повторите новый пароль',
    type: 'password',
    name: ValidateRuleType.Password,
    value: '91239ddfF'
  }
]
