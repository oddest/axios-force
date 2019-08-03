import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { processURL } from './helpers/url'
import { processRequestData, processResponseData } from './helpers/data'
import { processHeaders } from './helpers/headers'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return processURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return processRequestData(config.data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = processResponseData(res.data)
  return res
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
