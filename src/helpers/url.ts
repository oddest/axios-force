import { isDate, isPlainObject } from './utils/typer'
import { encode } from './utils/encoder'

/**
 * Processing and optimizing Request URL
 *
 * @return A formatted Request URL
 */
export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    const val = params[key]

    if (val === null || typeof val === 'undefined') {
      return
    }

    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    /**
     * Foreach param values
     *
     * Date => ISO string
     * Object => JSON string
     * parts will save encoded `${key}=>${val}` string
     */
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  /**
   * Edge case
   *
   * has '#' will be sliced
   * has '?' then serializedParams will be add to the last exist param
   */
  let serializedParams = parts.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
