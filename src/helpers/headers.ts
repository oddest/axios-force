import { isPlainObject } from './utils/typer'

function normalizeHeaderNames(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderNames(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}

export function parseHeaders(headers: string): any {
  let parsedHeaders = Object.create(null)

  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')

    if (key) {
      key = key.trim().toLowerCase()
    }

    if (val) {
      val = val.trim()
    }

    if (!key) {
      return
    }

    parsedHeaders[key] = val
  })

  return parsedHeaders
}
