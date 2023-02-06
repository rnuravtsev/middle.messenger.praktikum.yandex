import { ValidateRuleType } from '../utils/validateForm'

export const chatFields = [
  {
    icon: 'clip',
    name: ValidateRuleType.File,
    type: 'file',
  },
  {
    placeholder: 'Сообщение',
    name: ValidateRuleType.Message,
  }
]
