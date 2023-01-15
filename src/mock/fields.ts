import { ValidateRuleType } from "../utils/validateForm";

export const fields = [
  {
    id: 1,
    labelText: "Логин",
    validationText: "OOOps"
  },
  {
    id: 2,
    labelText: "Пароль",
    type: "password",
  },
]

export const signUpFields = [
  {
    type: 'email',
    name: ValidateRuleType.Email,
    labelText: 'Почта',
  },
  {
    name: ValidateRuleType.Login,
    labelText: 'Логин',
  },
  {
    name: ValidateRuleType.FirstName,
    labelText: 'Имя',
  },
  {
    name: ValidateRuleType.SecondName,
    labelText: 'Фамилия',
  },
  {
    type: 'tel',
    name: ValidateRuleType.Phone,
    labelText: 'Телефон',
  },
  {
    type: 'password',
    name: ValidateRuleType.Password,
    labelText: 'Пароль',
  },
  {
    type: 'password',
    name: ValidateRuleType.Password,
    labelText: 'Подтвердите пароль',
  }
]
