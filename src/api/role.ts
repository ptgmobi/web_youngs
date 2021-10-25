import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getRoles() {
  return request({
    // baseURL: '/mock-api',
    url: '/roles',
    method: 'get'
  })
}
// 获取单独
export function getRole(params) {
  return request({
    // baseURL: '/mock-api',
    url: `/roles/${params}`,
    method: 'get'
  })
}
// 新建
export function setCreateRole(data) {
  return request({
    // baseURL: '/mock-api',
    url: '/roles',
    method: 'post',
    data
  })
}
// 修改
export function setEditRole(params, data) {
  return request({
    // baseURL: '/mock-api',
    url: `/roles/${params}`,
    method: 'patch',
    data
  })
}
