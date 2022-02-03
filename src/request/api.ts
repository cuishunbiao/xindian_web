import { getRequest, postRequest } from './request'

const BaseUrl = '/api/index.php'

//获取 Type 类型
const getTypeApi = (params: any, config?: any) => getRequest(`${BaseUrl}/User/do_get_type`, params)

// 登录接口
const postLoginApi = (params: any, config?: any) => postRequest(`${BaseUrl}/User/do_verification`, params, config)

//获取参数列表
const getSearchApi = (params: any, config?: any) => getRequest(`${BaseUrl}/Index/do_get_search`, params)

//获取医院列表
const getHospitalApi = (params: any, config?: any) => getRequest(`${BaseUrl}/Index/do_get_hospital`, params)

export { getTypeApi, postLoginApi, getSearchApi, getHospitalApi }
