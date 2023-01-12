export enum ValidateRuleType {
  Login = 'login',
  Password = 'password',
  Email = 'email',
  Phone = 'phone',
  FirstName = 'first_name',
  SecondName = 'second_name',
  Message = 'message',
}

export type ValidateRule = {
  type: ValidateRuleType,
  value: string;
}

const validates = {
  [ValidateRuleType.Login]: (value: string) => {
    const regExp = /[a-zA-Z0-9-_]+$/;
    if (!(value.length >= 3 && value.length <= 20 && regExp.test(value))) {
      return 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)';
    }

    return '';
  },
  [ValidateRuleType.Password]: (value: string) => {
    const regExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,40})/;
    if (!regExp.test(value)) {
      return 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
    }

    return '';
  },
  [ValidateRuleType.Email]: (value: string) => {
    const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/;
    if (!regExp.test(value)) {
      return 'Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы'
    }

    return '';
  },
  [ValidateRuleType.Phone]: (value: string) => {
    const regExp = /^\+?[0-9]{10,15}$/;
    if (!regExp.test(value)) {
      return 'От 10 до 15 цифр, может начинаться с плюса'
    }

    return '';
  },
  [ValidateRuleType.FirstName]: (value: string) => {
    const regExp = /^[А-ЯЁA-Z][а-яёa-z-]+$/;
    if (!regExp.test(value)) {
      return 'От 2 до 20 символов, только буквы, первая заглавная, может содержать дефис'
    }

    return '';
  },
  [ValidateRuleType.SecondName]: (value: string) => {
    const regExp = /^[А-ЯЁA-Z][а-яёa-z-]+$/;
    if (!regExp.test(value)) {
      return 'От 2 до 20 символов, только буквы, первая заглавная, может содержать дефис'
    }

    return '';
  },
  [ValidateRuleType.Message]: (value: string) => {
    if (value.length < 1) {
      return 'Поле не может быть пустым'
    }

    return '';
  },
}

export function validateForm(rules: ValidateRule[]): ValidateRule[] {
  return rules.map((rule) => {
    const { type, value } = rule;

    const validateError = validates[type](value);

    return {
      type,
      value: validateError,
    }
  })
}

export const validateField = (input: HTMLInputElement) => {
  const { name, value } = input;
  const rule = {
    type: name as ValidateRuleType,
    value,
  }

  return validateForm([rule])
}
