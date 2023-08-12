import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ICYInterceptors<T> {
  successRequetInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  failRequetInterceptors?: (err: any) => any
  successResponseInterceptors?: (res: T) => T
  failResponseInterceptors?: (err: any) => any
}

export interface ICYRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: ICYInterceptors<T>
}
