import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ad series
export function ApiGetAudienceManageList(data: ObjTy) {
  return request({
    url: '/d/dap/list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeAudienceManageStatus(data: ObjTy) {
  return request({
    url: '/d/dap/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteAudienceManage(data: ObjTy) {
  return request({
    url: '/d/dap/del',
    data,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! details
export function ApiAudienceManageCreate(data: ObjTy) {
  return request({
    url: `/d/dap`,
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiAudienceManageEdit(data: ObjTy) {
  return request({
    url: `/d/dap`,
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetAudienceManageOne(params: string) {
  return request({
    url: `/d/dap/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
