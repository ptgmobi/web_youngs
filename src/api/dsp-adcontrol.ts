import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ad series
export function ApiGetAdSeriesList(data: ObjTy) {
  return request({
    url: '/d/dvs/list',
    data,
    method: 'get', 
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeAdSeriesStatus(data: ObjTy) {
  return request({
    url: '/d/dvs/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteAdSeries(data: ObjTy) {
  return request({
    url: 'd/dvs/del',
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
    url: '/d/dvs',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiAdSeriesEdit(data: ObjTy) {
  return request({
    url: '/d/dvs',
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetAdSeriesOne(params: string) {
  return request({
    url: `/d/dvs/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiGetConfig() {
  return request({
    url: '/d/dvs/edit-config',
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// ad group

export function ApiGetAdGroupList(data: ObjTy) {
  return request({
    url: '/d/dvg/list',
    data,
    method: 'get', 
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeAdGroupStatus(data: ObjTy) {
  return request({
    url: '/d/dvg/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteAdGroup(data: ObjTy) {
  return request({
    url: '/d/dvg/delete',
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
    url: '/d/dvg',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiAdGroupEdit(data: ObjTy) {
  return request({
    url: '/d/dvg',
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetAdGroupOne(params: string) {
  return request({
    url: `/d/dvg/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

