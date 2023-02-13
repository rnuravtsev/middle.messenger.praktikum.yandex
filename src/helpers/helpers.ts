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

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc,
  }), value as any)

  return merge(object as Indexed, result)
}

export function omit(
  obj: Record<string, unknown>,
  args: unknown[]) {

  return Object.keys(obj).reduce((acc: Indexed, key) => {
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

function isPlainObject(value: unknown): value is Indexed {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]'
}

function isArray(value: unknown): value is [] {
  return Array.isArray(value)
}

function isArrayOrObject(value: unknown): value is [] | Indexed {
  return isPlainObject(value) || isArray(value)
}

export function isEqual(lhs: Indexed, rhs: Indexed): boolean {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false
  }


  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key]

    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue
      }

      return false
    }

    if (value !== rightValue) {
      return false
    }
  }

  return true
}

export function debounce(cb: (...args: unknown[]) => unknown, timeout = 2000) {
  let timer: undefined | ReturnType<typeof setTimeout> = undefined

  return function (this: unknown, ...args: unknown[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      cb.apply(this, args)
    }, timeout)
  }
}

export const dateToHumanHoursAndMinutes = (string: string): string => {
  let date: string | Date = new Date(string)

  date = `${date.getHours()}:${date.getMinutes()}`

  return date
}

export function trim(string: string, chars?: string): string {
  if (string && !chars) {
    return string.trim()
  }

  const reg = new RegExp(`[${chars}]`, 'gi')
  return string.replace(reg, '')
}

export function cloneDeep<T extends object = object>(obj: T) {
  return (function _cloneDeep(item: T): T | Date | Set<unknown> | Map<unknown, unknown> | object | T[] {
    if (item === null || typeof item !== 'object') {
      return item
    }

    if (item instanceof Date) {
      return new Date(item.valueOf())
    }

    if (isArray(item)) {
      const copy: unknown[] = []

      item.forEach((_, i) => (copy[i] = _cloneDeep(item[i])))

      return copy
    }

    // Handle:
    // * Set
    if (item instanceof Set) {
      const copy = new Set()

      item.forEach(v => copy.add(_cloneDeep(v)))

      return copy
    }

    if (item instanceof Map) {
      const copy = new Map()

      item.forEach((v, k) => copy.set(k, _cloneDeep(v)))

      return copy
    }

    if (isPlainObject(item)) {
      const copy: object = {}

      Object.getOwnPropertySymbols(item).forEach(s => (copy[s] = _cloneDeep(item[s])))

      Object.keys(item).forEach(k => (copy[k] = _cloneDeep(item[k])))

      return copy
    }

    throw new Error(`Unable to copy object: ${item}`)
  })(obj)
}

export function queryStringify(obj: StringIndexed) {
  let queryString = ''

  function buildQueryString(obj: StringIndexed, prefix = '') {
    for (const key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) {
        const value = obj[key]
        const keyName = prefix ? prefix + '[' + key + ']' : key

        if (value instanceof Array) {
          buildQueryString(value, keyName)
        } else if (value instanceof Object) {
          buildQueryString(value, keyName)
        } else {
          queryString += keyName + '=' + value + '&'
        }
      }
    }
  }

  buildQueryString(obj)

  return queryString.slice(0, -1)
}

const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
}

export function escapeHtml(string: string) {
  return String(string).replace(/[&<>"'`=/]/g, function(s) {
    // TODO: Доделать тип
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return entityMap[s]
  })
}
