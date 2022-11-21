// 172.31.21.0/af-report/view
import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'

export function ApiGetAdvertiserList(data: ObjTy) {
  return request({
    url: '/d/dv/list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeAdvertiserStatus(data: ObjTy) {
  return request({
    url: '/d/dv/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteAdvertiser(data: ObjTy) {
  return request({
    url: '/d/dv/delete',
    data,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! details
export function ApiAdvertiserCreate(data: ObjTy) {
  return request({
    url: '/d/dv',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiAdvertiserEdit(data: ObjTy) {
  return request({
    url: '/d/dv',
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetAdvertiserOne(params: string) {
  return request({
    url: `/d/dv/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetConfig() {
  return request({
    url: '/d/dv/edit-config',
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiUploadImg(data: ObjTy) {
  console.log(data)
  return request({
    url: `/d/dv/pic`,
    method: 'post',
    data,
    isUploadFile: true
  })
}
