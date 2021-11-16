import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getStations() {
  return request({
    // baseURL: '/mock-api',
    url: '/position',
    method: 'get'
  })
}
// 获取单独
export function getStation(params: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/position/view/${params}`,
    method: 'get'
  })
}
// 新建
export function setCreateStation(data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: '/position',
    method: 'post',
    data
  })
}
// 修改
export function setEditStation(params: ObjTy, data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/position/${params}`,
    method: 'patch',
    data
  })
}
