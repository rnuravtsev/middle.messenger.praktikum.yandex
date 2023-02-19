export type FieldProps = {
  className: string,
  labelClassName: string,
  inputClassName: string,
  labelText: string,
  placeholder: string,
  name: string,
  /** Тип ошибки при валидации формы по Submit */
  validationType: string,
  /** Сообщение ошибки при валидации формы по Submit */
  validationError: string,
  /** Тип инпута */
  type: string,
  /** Сообщение ошибки при валидации поля по Focus/Blur */
  errorMessages: string,
  /** Значение инпута */
  value: string,
}
