// 172.31.21.0/af-report/view
import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ! buzz list
export function ApiGetBuzzList(data: ObjTy) {
  return request({
    url: '/buzz/buzz-index',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApichangeClk(data: ObjTy) {
  return request({
    url: '/buzz/edit-offer-max-clk',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApichangeCutoff(data: ObjTy) {
  return request({
    url: '/buzz/edit-cutoff',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiChangeStatus(data: ObjTy) {
  return request({
    url: '/buzz/edit-offer-status',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! buzz details
export function ApiOperationOffer(data: ObjTy) {
  return request({
    url: '/buzz/buzz-edit',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetOfferData(data: ObjTy) {
  return request({
    url: '/buzz/buzz-edit',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetConfig(data: ObjTy) {
  return request({
    url: '/buzz/edit-config',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetDeviceCount(data: ObjTy) {
  return request({
    url: '/buzz/get-device-num',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
