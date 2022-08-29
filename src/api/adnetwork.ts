// 172.31.21.0/af-report/view
import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// adnetwork list
export function ApiGetAdnetworkList(data: ObjTy) {
  return request({
    url: '/adn/list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
// 获取单个
export function ApiGetAdnetworkData(params: string) {
  return request({
    url: `/adn/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
// 创建
export function ApiCreatAdnetwork(data: ObjTy) {
  return request({
    url: '/adn',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
// 修改
export function ApiEditAdnetwork(data: ObjTy) {
  return request({
    url: '/adn',
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
// 状态修改
export function ApiChangeAdnetworkStatus(data: ObjTy) {
  return request({
    url: '/adn/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
// pmt status
export function ApiChangePmtStatus(data: ObjTy) {
  return request({
    url: '/adn/pmt',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
// android pmt status
export function ApiChangeAndroidPmtStatus(data: ObjTy) {
  return request({
    url: '/adn/android-pmt',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
