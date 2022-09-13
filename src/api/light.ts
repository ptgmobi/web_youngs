// 172.31.21.0/af-report/view
import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ! light list
export function ApiGetLightList(data: ObjTy) {
  return request({
    url: 'light-sy',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApichangeClk(data: ObjTy) {
  return request({
    url: 'light-sy/offer-max-clk',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApichangeSiteClkLimit(data: ObjTy) {
  return request({
    url: 'light-sy/edit-clk-limit',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApichangeCutoff(data: ObjTy) {
  return request({
    url: 'light-sy/cutoff',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiChangeLightStatus(data: ObjTy) {
  return request({
    url: 'light-sy/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! light details
export function ApiOperationOfferCreate(data: ObjTy) {
  return request({
    url: 'light-sy',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiOperationOfferEdit(data: ObjTy) {
  return request({
    url: 'light-sy',
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetOfferData(params: string) {
  return request({
    url: `light-sy/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetCopyOfferData(data: ObjTy) {
  return request({
    url: 'light-sy/copy',
    method: 'get',
    data,
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetConfig() {
  return request({
    url: 'light-sy/edit-config',
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetDeviceCount(data: ObjTy) {
  return request({
    url: 'light-sy/get-device-num',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetOfferDevice(data: ObjTy) {
  return request({
    url: 'light-sy/offer-device',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeToOfferDevice(data: ObjTy) {
  return request({
    url: 'light-sy/device',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
