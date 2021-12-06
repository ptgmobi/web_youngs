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
// ! create
// 新建offer时获取一个新的offer id
export function ApiGetOfferCreateId() {
  return request({
    url: '/offer/id',
    method: 'get'
  })
}
// 获取channel list
export function ApiGetChannelList() {
  return request({
    url: '/offer/channel',
    method: 'get'
  })
}
// 获取country list
export function ApiGetCountryList() {
  return request({
    url: '/offer/country',
    method: 'get'
  })
}
// 判断当前的advoffer是否已存在
export function ApiJudgeOffer(data: ObjTy) {
  return request({
    url: '/offer/exists',
    data,
    method: 'get',
    isParams: true,
  })
}
// dump接口获取当前offer信息
export function ApiGetAdvOfferForDump(data: ObjTy) {
  return request({
    url: '/offer/dump',
    data,
    method: 'get',
    isParams: true,
  })
}
// buzz获取当前offer信息
export function ApiGetAdvOfferForBuzzList(data: ObjTy) {
  return request({
    url: '/offer/buzz',
    data,
    method: 'get',
    isParams: true,
  })
}
// 创建offer
export function ApiCreateOffer(data: ObjTy) {
  return request({
    url: '/offer',
    data,
    method: 'post',
  })
}
// 修改offer
export function ApiEditOffer(data: ObjTy) {
  return request({
    url: '/offer',
    data,
    method: 'put',
  })
}

// Traffic 下获取全部的Manage Slot
export function ApiGetAllManageSlot() {
  return request({
    url: '/offer/pub-name',
    method: 'get',
  })
}

// ! list
export function ApiGetOfferList(data: ObjTy) {
  return request({
    url: '/offer',
    data,
    method: 'get',
    isParams: true,
  })
}
// 修改开关
export function ApiOfferForChangeStatus(data: ObjTy) {
  return request({
    url: '/offer/status',
    data,
    method: 'patch'
  })
}
// 删除offer
export function ApiOfferForDelete(id: string) {
  return request({
    url: `/offer/${id}`,
    method: 'delete'
  })
}
// 获取单个offer
export function ApietOfferForOne(id: string) {
  return request({
    url: `/offer/view/${id}`,
    method: 'get'
  })
}
