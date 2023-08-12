import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ICYRequestConfig } from './type'
/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

class CYRequest {
  instance: AxiosInstance

  constructor(config: ICYRequestConfig) {
    this.instance = axios.create(config)
    // 全局的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    // 每个实例自己的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.successRequetInterceptors,
      config.interceptors?.failRequetInterceptors
    )
    this.instance.interceptors.response.use(
      config.interceptors?.successResponseInterceptors,
      config.interceptors?.failResponseInterceptors
    )
  }

  request<T = any>(config: ICYRequestConfig<T>) {
    if (config.interceptors?.successRequetInterceptors) {
      config = config.interceptors.successRequetInterceptors(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.successResponseInterceptors) {
            res = config.interceptors.successResponseInterceptors(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: ICYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: ICYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: ICYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: ICYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default CYRequest
