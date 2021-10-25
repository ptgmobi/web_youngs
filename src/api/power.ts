import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getPermissions() {
  return request({
    // baseURL: '/mock-api',
    url: '/permissions',
    method: 'get'
  })
}
// 获取单独
export function getPermission(params) {
  return request({
    // baseURL: '/mock-api',
    url: `/permissions/${params}`,
    method: 'get'
  })
}
// 新建
export function setCreatePermission(data) {
  return request({
    // baseURL: '/mock-api',
    url: '/permissions',
    method: 'post',
    data
  })
}
// 修改
export function setEditPermission(params, data) {
  return request({
    // baseURL: '/mock-api',
    url: `/permissions/${params}`,
    method: 'patch',
    data
  })
}
