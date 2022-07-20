import axios from 'axios'

/**
 * 统一请求函数
 * @type {AxiosInstance}
 */
const request = axios.create({
  baseURL: 'http://localhost:3000'
})

/**
 * 请求拦截器
 */

request.interceptors.request.use((config) => {
  console.log("axios", request)
  return config
})


/**
 * 响应拦截器
 */

request.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data
  }
})

export default request
