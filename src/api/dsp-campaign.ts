import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// list
export function ApiGetCampaignList(data: ObjTy) {
  return request({
    url: '/d/dio/list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeCampaignStatus(data: ObjTy) {
  return request({
    url: '/d/dio/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteCampaign(data: ObjTy) {
  return request({
    url: '/d/dio/del',
    data,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! details
export function ApiCampaignCreate(params: string, data: ObjTy) {
  return request({
    url: `/d/dio?${params}`,
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiCampaignEdit(params: string, data: ObjTy) {
  return request({
    url: `/d/dio?${params}`,
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetCampaignOne(params: string, query: string) {
  return request({
    url: `/d/dio/view/${params}?${query}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// dpa

// list

export function ApiGetCampaignDpaList(data: ObjTy) {
  return request({
    url: '/d/dio/list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeCampaignDpaStatus(data: ObjTy) {
  return request({
    url: '/d/dio/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteCampaignDpa(data: ObjTy) {
  return request({
    url: '/d/dio/del',
    data,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! details
export function ApiCampaignDpaCreate(data: ObjTy) {
  return request({
    url: `/d/dio`,
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiCampaignDpaEdit(data: ObjTy) {
  return request({
    url: `/d/dio`,
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetCampaignDpaOne(params: string) {
  return request({
    url: `/d/dio/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

