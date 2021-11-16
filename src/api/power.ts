import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getPermissions() {
  return request({
    // baseURL: '/mock-api',
    url: '/permission',
    method: 'get',
    isParams: true
  })
}
// 获取单独
export function getPermission(params: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/permission/view/${params}`,
    method: 'get',
    isParams: true
  })
}
// 新建
export function setCreatePermission(data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: '/permission',
    method: 'post',
    data
  })
}
// 修改
export function setEditPermission(params: ObjTy, data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/permission/update`,
    method: 'patch',
    data
  })
}
