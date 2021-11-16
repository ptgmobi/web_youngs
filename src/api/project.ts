import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getProjects() {
  return request({
    // baseURL: '/mock-api',
    url: '/project',
    method: 'get',
    isParams: true
  })
}
// 获取单独
export function getProject(params: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/project/view/${params}`,
    method: 'get',
    isParams: true
  })
}
// 新建
export function setCreateProject(data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: '/project',
    method: 'post',
    data
  })
}
// 修改
export function setEditProject(params: ObjTy, data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/project/${params}`,
    method: 'patch',
    data
  })
}
