import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getUsers(data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: '/users',
    method: 'get',
    data
  })
}
// 获取单独
export function getUser(params: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/users/${params}`,
    method: 'get'
  })
}
// 新建
export function setCreateUser(data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: '/users',
    method: 'post',
    data
  })
}
// 修改
export function setEditUser(params: ObjTy, data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/users/${params}`,
    method: 'put',
    data
  })
}
// 修改状态
export function changeStatusUser(params: ObjTy, data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/users/status/${params}`,
    method: 'patch',
    data
  })
}
// 管理员修改密码
export function changeUserPassword(params: ObjTy, data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/users/pwd/${params}`,
    method: 'patch',
    data
  })
}
// 用户修改自己的密码
export function changeMyPassword(data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: '/users/edit-pwd',
    method: 'patch',
    data
  })
}
