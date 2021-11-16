import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 获取列表
export function getProducts(data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: '/product',
    method: 'get',
    data,
    isParams: true
  })
}
// 获取单独
export function getProduct(params: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/product/view/${params}`,
    method: 'get',
    isParams: true
  })
}
// 新建
export function setCreateProduct(data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: '/product',
    method: 'post',
    data
  })
}
// 修改
export function setEditProduct(params: ObjTy, data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/product/${params}`,
    method: 'put',
    data
  })
}
// 修改状态
export function changeStatusProduct(params: ObjTy, data: ObjTy) {
  return request({
    // baseURL: '/mock-api',
    url: `/product/${params}`,
    method: 'patch',
    data
  })
}
