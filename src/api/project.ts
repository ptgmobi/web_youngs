import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getProjects() {
  return request({
    // baseURL: '/mock-api',
    url: '/projects',
    method: 'get'
  })
}
// 获取单独
export function getProject(params) {
  return request({
    // baseURL: '/mock-api',
    url: `/projects/${params}`,
    method: 'get'
  })
}
// 新建
export function setCreateProject(data) {
  return request({
    // baseURL: '/mock-api',
    url: '/projects',
    method: 'post',
    data
  })
}
// 修改
export function setEditProject(params, data) {
  return request({
    // baseURL: '/mock-api',
    url: `/projects/${params}`,
    method: 'patch',
    data
  })
}
