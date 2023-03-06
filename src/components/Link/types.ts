import Router from '../../core/Router/Router'

export type LinkProps = {
  className?: string,
  color?: string,
  href: string,
  target?: '_self' | '_blank',
  label: string,
  router: typeof Router,
}
