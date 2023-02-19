export type LinkProps = {
  className?: string,
  color?: string,
  href: string,
  target?: '_self' | '_blank',
  label: string,
  events?: Record<string, (e: Event) => void>,
}
