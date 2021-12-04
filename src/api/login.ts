import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'

export function loginReq(data: ObjTy) {
  return request({
    url: '/site/login',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function getInfoReq(params: ObjTy, data?: ObjTy) {
  return request({
    url: `/site/page-config/${params}`,
    data,
    bfLoading: false,
    method: 'get'
  })
}

export function logoutReq() {
  return request({
    url: '/ty-user/user/loginOut',
    method: 'post'
  })
}

export function changeMyPassword() {}
