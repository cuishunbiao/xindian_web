import { getRequest, postRequest } from './request'

const BaseUrl = '/api/index.php'

//获取 Type 类型
const getTypeApi = (params?: any, config?: any) => getRequest(`${BaseUrl}/User/do_get_type`, params)

//获取 Type 类型
const getAccountApi = (params: any, config?: any) => getRequest(`${BaseUrl}/User/do_get_account`, params)

// 登录接口
const postLoginApi = (params: any, config?: any) => postRequest(`${BaseUrl}/User/do_verification`, params, config)

//退出登录
const postLogoutApi = (params?: any, config?: any) => postRequest(`${BaseUrl}/User/do_logout`, params, config)

//获取参数列表
const getSearchApi = (params?: any, config?: any) => getRequest(`${BaseUrl}/Index/do_get_search`, params)

//获取医院列表
const getHospitalApi = (params: any, config?: any) => getRequest(`${BaseUrl}/Index/do_get_hospital`, params)

//获取步骤
const getStepApi = (params: any, config?: any) => getRequest(`${BaseUrl}/Index/do_get_step`, params)

//提交步骤信息
const postEditStepApi = (params: any, config?: any) => getRequest(`${BaseUrl}/Index/do_edit_step`, params)

//获取登录信息
const getIsLoginApi = (params?: any, config?: any) => getRequest(`${BaseUrl}/User/is_login`, params)

export {
	getTypeApi,
	postLoginApi,
	getSearchApi,
	getHospitalApi,
	getAccountApi,
	postLogoutApi,
	getStepApi,
	postEditStepApi,
	getIsLoginApi
}
