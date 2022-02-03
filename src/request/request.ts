import axios, { AxiosResponse } from 'axios'

const LOGIN_EXPIRED = 900401 // 账号过期
const CODE_SUCCESS = 200
const instance = axios.create({
	timeout: 20000,
	headers: {
		'Content-Type': 'application/json; charset=UTF-8'
	}
})

// 请求拦截器
instance.interceptors.request.use(
	(request) => request,
	(error) => Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
	(response: AxiosResponse) => {
		// 判断接口是否成功
		if (response.status === CODE_SUCCESS) {
			// 登录过期
			if (response.data.status === LOGIN_EXPIRED) {
				window.location.href = window.location.origin
				localStorage.removeItem('isLogin')
				return false
			}
			return response.data
		}
		return Promise.reject(response.status)
	},
	(error) => Promise.reject(error)
)

/**
 * Get请求
 * @param url 访问的接口
 * @param data 传输的数据
 * @param header header 格式
 */
const getRequest = (url: string, params?: any) =>
	instance
		.get(`${url}`, { params })
		.then((res) => res)
		.catch((error) => error)
// Post请求
const postRequest = (url: string, params?: any, config?: any) =>
	instance
		.post(`${url}`, params, config)
		.then((res) => res)
		.catch((error) => error)

export { getRequest, postRequest }
