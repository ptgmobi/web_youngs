import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取国家列表
export function ApiGetCommonCountryList() {
  return request({
    // baseURL: '/mock-api',
    url: '/c/country',
    method: 'get',
    isParams: true
  })
}
