// 172.31.21.0/af-report/view
import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ! buzz list
export function ApiGetBuzzList(data: ObjTy) {
  return request({
    url: '/obuzz',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApichangeClk(data: ObjTy) {
  return request({
    url: '/obuzz/offer-max-clk',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApichangeSiteClkLimit(data: ObjTy) {
  return request({
    url: '/obuzz/edit-clk-limit',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApichangeCutoff(data: ObjTy) {
  return request({
    url: '/obuzz/cutoff',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiChangeBuzzStatus(data: ObjTy) {
  return request({
    url: '/obuzz/status',
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
    url: '/obuzz',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiOperationOfferEdit(data: ObjTy) {
  return request({
    url: '/obuzz',
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetOfferData(params: string) {
  return request({
    url: `/obuzz/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetCopyOfferData(data: ObjTy) {
  return request({
    url: '/obuzz/copy',
    method: 'get',
    data,
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetConfig() {
  return request({
    url: '/obuzz/edit-config',
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetDeviceCount(data: ObjTy) {
  return request({
    url: '/obuzz/get-device-num',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetOfferDevice(data: ObjTy) {
  return request({
    url: '/obuzz/offer-device',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeToOfferDevice(data: ObjTy) {
  return request({
    url: '/obuzz/device',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// 批量修改device
export function ApiChangeToOffersDevice(data: ObjTy) {
  return request({
    url: '/obuzz/batch-device',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
