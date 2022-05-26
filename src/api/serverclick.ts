import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'

// 服预设置 列表
export function serverClickOverallSettingList(data: ObjTy) {
  return request({
    url: '/server-click/overall-setting-list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// 服预设置  根据国家信息修改数据（多条修改）
export function serverClickOverallSettingChangeAll(data: ObjTy) {
  return request({
    url: '/server-click/overall-setting-all',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// 服预设置  根据id修改数据（单条修改）
export function serverClickOverallSettingChangeOne(data: ObjTy) {
  return request({
    url: '/server-click/overall-setting-one',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// 服预设置  设备信息查询
export function serverClickOverallSettingGetConfig(data: ObjTy) {
  return request({
    url: '/server-click/overall-setting-get-config',
    data,
    method: 'get',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// 服预设置  修改设备库信息
export function serverClickOverallSettingEditConfig(data: ObjTy) {
  return request({
    url: '/server-click/overall-setting-edit-config',
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

