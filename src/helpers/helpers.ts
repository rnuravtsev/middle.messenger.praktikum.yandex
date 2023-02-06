export type Indexed<T = any> = {
  [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    // eslint-disable-next-line no-prototype-builtins
    if (!rhs.hasOwnProperty(p)) {
      continue
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed)
      } else {
        lhs[p] = rhs[p]
      }
    } catch (e) {
      lhs[p] = rhs[p]
    }
  }

  return lhs
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string')
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc,
  }), value as any)

  return merge(object as Indexed, result)
}

export function omit(
  obj: Record<string, unknown>,
  args: unknown[]) {

  return Object.keys(obj).reduce((acc: { [key: string]: unknown }, key) => {
    if (args.indexOf(key) === -1) {
      acc[key] = obj[key]
    }

    return acc
  }, {})
}

export function isEmpty<T extends Indexed | string | boolean>(value: T): boolean {
  if (typeof value === 'boolean') {
    return false
  }
  if (typeof value === 'string') {
    return value.trim().length === 0
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }
  // TODO: Доработать для других типов
  return false
}

export const isEqual = (a: any, b: any): boolean => {
  if (a === b) {
    return true
  }

  if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false
    }

    for (const key in a) {
      if (!(key in b) || !isEqual(a[key], b[key])) {
        return false
      }
    }

    return true
  }

  return false
}

export function debounce(cb: (...args: unknown[]) => unknown, timeout = 2000) {
  let timer: undefined | ReturnType<typeof setTimeout> = undefined

  return (...args: unknown[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      cb.apply(this, args)
    }, timeout)
  }
}
