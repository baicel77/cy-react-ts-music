import CYRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

const cyRequest = new CYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    successRequetInterceptors: (config) => {
      return config
    },
    failRequetInterceptors: (err) => {
      return err
    },
    successResponseInterceptors: (res) => {
      return res
    },
    failResponseInterceptors: (err) => {
      return err
    }
  }
})

export default cyRequest
