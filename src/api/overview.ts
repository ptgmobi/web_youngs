// 172.31.21.0/af-report/view
import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'

export function getOverviewList(data: ObjTy) {
  return request({
    url: '/af-report/view',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// card
export function getOverviewCard(data: ObjTy) {
  return request({
    url: '/overview/card',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// chart
export function getOverviewChart(data: ObjTy) {
  return request({
    url: '/overview/chart',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// table
export function getOverviewTable(data: ObjTy) {
  return request({
    url: '/overview/table',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// 搜索条件
export function getOverviewSearchForCountry(data: ObjTy) {
  return request({
    url: '/overview/country',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
export function getOverviewSearchForChannel(data: ObjTy) {
  return request({
    url: '/overview/channel',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
export function getOverviewSearchForPkg(data: ObjTy) {
  return request({
    url: '/overview/pkg',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
