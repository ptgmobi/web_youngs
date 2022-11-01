import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ad series
export function ApiGetCommonCountryList(data: ObjTy) {
  return request({
    url: '/common',
    data,
    method: 'get', 
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
