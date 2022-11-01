import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ad series
export function ApiGetAdSeriesList(data: ObjTy) {
  return request({
    url: '/dvs/list',
    data,
    method: 'get', 
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeAdSeriesStatus(data: ObjTy) {
  return request({
    url: '/dvs/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteAdSeries(data: ObjTy) {
  return request({
    url: '/dvs/delete',
    data,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! details
export function ApiAdSeriesCreate(data: ObjTy) {
  return request({
    url: '/dvs',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiAdSeriesEdit(data: ObjTy) {
  return request({
    url: '/dvs',
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetAdSeriesOne(params: string) {
  return request({
    url: `/dvs/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetConfig() {
  return request({
    url: '/dvs/edit-config',
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// ad group

export function ApiGetAdGroupList(data: ObjTy) {
  return request({
    url: '/dvg/list',
    data,
    method: 'get', 
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeAdGroupStatus(data: ObjTy) {
  return request({
    url: '/dvg/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteAdGroup(data: ObjTy) {
  return request({
    url: '/dvg/delete',
    data,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! details
export function ApiAdGroupCreate(data: ObjTy) {
  return request({
    url: '/dvg',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiAdGroupEdit(data: ObjTy) {
  return request({
    url: '/dvg',
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetAdGroupOne(params: string) {
  return request({
    url: `/dvg/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

