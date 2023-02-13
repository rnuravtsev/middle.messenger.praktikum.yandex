export type FormProps = {
  className: string,
  inputClassName: string,
  inputPlaceholder: string,
  isSubmitButtonHide: boolean,
  submitButtonClassname: string,
  submitButtonType: string,
  onSubmit: (data: unknown) => void,
  gridType: 'row' | 'column',
  fields: unknown[],
  buttonText: string,
}
