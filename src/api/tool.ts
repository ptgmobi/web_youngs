// 172.31.21.0/af-report/view
import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ! buzz list
export function ApiGetAdvsettingList(data: ObjTy) {
  return request({
    url: '/d/df/list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeAdvsettingStatus(data: ObjTy) {
  return request({
    url: '/d/df/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteAdvsetting(params: string) {
  return request({
    url: `/d/df/${params}`,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! adv setting details
export function ApiAdvsettingCreate(data: ObjTy) {
  return request({
    url: '/d/df',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiAdvsettingEdit(data: ObjTy) {
  return request({
    url: '/d/df',
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetAdvsettingData(params: string) {
  return request({
    url: `/d/df/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
