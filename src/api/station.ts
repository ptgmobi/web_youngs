import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getStations() {
  return request({
    // baseURL: '/mock-api',
    url: '/positions',
    method: 'get'
  })
}
// 获取单独
export function getStation(params) {
  return request({
    // baseURL: '/mock-api',
    url: `/positions/${params}`,
    method: 'get'
  })
}
// 新建
export function setCreateStation(data) {
  return request({
    // baseURL: '/mock-api',
    url: '/positions',
    method: 'post',
    data
  })
}
// 修改
export function setEditStation(params, data) {
  return request({
    // baseURL: '/mock-api',
    url: `/positions/${params}`,
    method: 'patch',
    data
  })
}
