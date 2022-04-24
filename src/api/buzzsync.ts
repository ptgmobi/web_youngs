// 172.31.21.0/af-report/view
import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ! buzz list
export function ApiGetBuzzList(data: ObjTy) {
  return request({
    url: '/buzz-sy',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApichangeClk(data: ObjTy) {
  return request({
    url: '/buzz-sy/offer-max-clk',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApichangeSiteClkLimit(data: ObjTy) {
  return request({
    url: '/buzz-sy/edit-clk-limit',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApichangeCutoff(data: ObjTy) {
  return request({
    url: '/buzz-sy/cutoff',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiChangeBuzzStatus(data: ObjTy) {
  return request({
    url: '/buzz-sy/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! buzz details
export function ApiOperationOfferCreate(data: ObjTy) {
  return request({
    url: '/buzz-sy',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiOperationOfferEdit(data: ObjTy) {
  return request({
    url: '/buzz-sy',
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetOfferData(params: string) {
  return request({
    url: `/buzz-sy/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetCopyOfferData(data: ObjTy) {
  return request({
    url: '/buzz-sy/copy',
    method: 'get',
    data,
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetConfig() {
  return request({
    url: '/buzz-sy/edit-config',
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetDeviceCount(data: ObjTy) {
  return request({
    url: '/buzz-sy/get-device-num',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetOfferDevice(data: ObjTy) {
  return request({
    url: '/buzz-sy/offer-device',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeToOfferDevice(data: ObjTy) {
  return request({
    url: '/buzz-sy/device',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
