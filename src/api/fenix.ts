import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// fenix fenix list
export function ApiFenixFenixList() {
  return request({
    url: '/fenix',
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
// fenix fenix search
export function ApiFenixFenixSearch(uid: string) {
  return request({
    url: `/fenix/user/${uid}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
// 创建finix
export function ApiFenixFenixCreate(data: ObjTy) {
  return request({
    url: `/fenix`,
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
// get finix details
export function ApiFenixFenixDetails(uid: string) {
  return request({
    url: `/fenix/view/${uid}`,
    method: 'get',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
// edit finix slot
export function ApiFenixFenixEdit(data: ObjTy) {
  return request({
    url: `/fenix`,
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
// delete finix slot
export function ApiFenixFenixDelete(slot_id: string) {
  return request({
    url: `/fenix/${slot_id}`,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}
// change finix status
export function ApiFenixFenixChangeStatus(uid: string, data: ObjTy) {
  return request({
    url: `/fenix/status`,
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}


// ! finix offer
// 新建offer时获取一个新的offer id
export function ApiGetOfferCreateId() {
  return request({
    url: '/offer/id',
    method: 'get'
  })
}
// 判断当前的advoffer是否已存在
export function ApiJudgeOffer() {

}
// dump接口获取当前offer信息
export function ApiGetAdvOfferForDump() {

}
// buzz获取当前offer信息
export function ApiGetAdvOfferForBuzzList() {

}