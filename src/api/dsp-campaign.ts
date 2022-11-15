import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// ad series
export function ApiGetCampaignList(data: ObjTy) {
  return request({
    url: '/d/dio/list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function ApiChangeCampaignStatus(data: ObjTy) {
  return request({
    url: '/d/dio/status',
    data,
    method: 'patch',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiDeleteCampaign(data: ObjTy) {
  return request({
    url: '/d/dio/del',
    data,
    method: 'delete',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

// ! details
export function ApiCampaignCreate(params: string, data: ObjTy) {
  return request({
    url: `/d/dio?${params}`,
    data,
    method: 'post',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiCampaignEdit(params: string, data: ObjTy) {
  return request({
    url: `/d/dio?${params}`,
    data,
    method: 'put',
    bfLoading: false,
    isParams: false,
    isAlertErrorMsg: false
  })
}

export function ApiGetCampaignOne(params: string, query: string) {
  // let res = {
  //   code: 200,
  //   data: {
  //     id: 200000001,
  //     name: 'test-ww2',
  //     desc: 'desc2',
  //     type: 2,
  //     url: 'https://staticdn.cloudmobi.net/newdsp/637366c69c7cd650ea7a52fd.mp4',
  //     logo_url: 'https://staticdn.cloudmobi.net/newdsp/637366da9c7cd650ea7a52ff.jpg',
  //     cover_url: 'https://staticdn.cloudmobi.net/newdsp/637366cf9c7cd650ea7a52fe.jpg',
  //     title: 'title',
  //     main_body: 'bb',
  //     status: 1,
  //     audit_status: 0,
  //     size: '320*480',
  //     memory_size: '6.63MB',
  //     format: 'video/mp4',
  //     duration: 15,
  //     is_del: 0,
  //     ids: null,
  //     create_email: '',
  //     create_date: '2022-11-15 18:16:05',
  //     update_date: '2022-11-15 18:16:05'
  //   },
  //   msg: 'success'
  // }
  // return res
  return request({
    url: `/d/dio/view/${params}?${query}`,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}
