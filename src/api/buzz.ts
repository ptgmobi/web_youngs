// 172.31.21.0/af-report/view
import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ! buzz list
export function ApiGetBuzzList(data: ObjTy) {
  return request({
    url: '/af-report/view',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApichangeClk(data: ObjTy) {
  return request({
    url: '/af-report/view',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApichangeCutoff(data: ObjTy) {
  return request({
    url: '/af-report/view',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeStatus(data: ObjTy) {
  return request({
    url: '/af-report/view',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// ! buzz details
export function ApiGetOfferList(data: ObjTy) {
  return request({
    url: '/af-report/view',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetOfferData(data: ObjTy) {
  return request({
    url: '/af-report/view',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetConfig(data: ObjTy) {
  return request({
    url: '/af-report/view',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetCutOffCount(data: ObjTy) {
  return request({
    url: '/af-report/view',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
