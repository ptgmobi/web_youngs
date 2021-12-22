import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getRoles() {
  return request({
    // baseURL: '/mock-api',
    url: '/role',
    method: 'get',
    isParams: true
  })
}
// 获取单独
export function getRole(params: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/role/view/${params}`,
    method: 'get',
    bfLoading: false,
    isParams: true
  })
}
// 新建
export function setCreateRole(data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: '/role',
    method: 'post',
    data
  })
}
// 修改
export function setEditRole(params: ObjTy, data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/role/${params}`,
    method: 'patch',
    data
  })
}
