export type ModalProps = {
  className?: string;
  title?: string;
  buttonText?: string;
  isOpen?: boolean;
  onSubmit?: (evt: Event) => void;
}
