import { isPlainObject } from './utils/typer'

export function buildRequestData(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
