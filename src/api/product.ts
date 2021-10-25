import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getProducts(params) {
  const { name, page, limit, project_id, order } = params
  return request({
    // baseURL: '/mock-api',
    url: `/products?name=${name}&page=${page}&limit=${limit}&project_id=${project_id}&order=${order}`,
    method: 'get'
  })
}
// 获取单独
export function getProduct(params) {
  return request({
    // baseURL: '/mock-api',
    url: `/products/${params}`,
    method: 'get'
  })
}
// 新建
export function setCreateProduct(data) {
  return request({
    // baseURL: '/mock-api',
    url: '/products',
    method: 'post',
    data
  })
}
// 修改
export function setEditProduct(params, data) {
  return request({
    // baseURL: '/mock-api',
    url: `/products/${params}`,
    method: 'put',
    data
  })
}
// 修改状态
export function changeStatusProduct(params, data) {
  return request({
    // baseURL: '/mock-api',
    url: `/products/${params}`,
    method: 'patch',
    data
  })
}
