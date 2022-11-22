import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// 国家列表
export function ApiGetCommonCountryList() {
  return request({
    url: '/d/common/country',
    method: 'get', 
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
// 文件上传接口
export function ApiUploadFile(data: ObjTy) {
  return request({
    url: '/d/common/file',
    data,
    method: 'post', 
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
// 商品分类列表
export function ApiGetCommonCategoryList() {
  return request({
    url: '/d/common/ctg',
    method: 'get', 
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
// 获取模板尺寸
export function ApiGetCommonTemplateSizeList() {
  return request({
    url: '/d/common/size',
    method: 'get', 
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
