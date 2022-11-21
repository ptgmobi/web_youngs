import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// media custom
export function ApiGetMediaCustomList(data: ObjTy) {
  return request({
    url: '/d/dme/list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeMediaCustomStatus(data: ObjTy) {
  return request({
    url: '/d/dme/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteMediaCustom(data: ObjTy) {
  return request({
    url: '/d/dme/del',
    data,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! media custom details
export function ApiMediaCustomCreate(data: ObjTy) {
  return request({
    url: `/d/dme`,
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiMediaCustomEdit(data: ObjTy) {
  return request({
    url: `/d/dme`,
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetMediaCustomOne(params: string) {
  return request({
    url: `/d/dme/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// media public

export function ApiGetMediaPublicList(data: ObjTy) {
  return request({
    url: '/d/dmb/list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteMediaPublic(data: ObjTy) {
  return request({
    url: '/d/dmb/del',
    data,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! media public details
export function ApiMediaPublicCreate(data: ObjTy) {
  return request({
    url: `/d/dmb`,
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}


