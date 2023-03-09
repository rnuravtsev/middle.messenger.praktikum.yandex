import { TColors } from '../../types/colors'

export type LogoutProps = {
  className?: string
  color: keyof TColors,
  label: string,
  dataTestId?: string
}
