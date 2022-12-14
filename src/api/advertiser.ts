// 172.31.21.0/af-report/view
import request from '@/utils/axiosReq'
import { ObjTy } from '@/types/common'
// offer list
export function ApiGetAdvertiserOfferList(data: ObjTy) {
  return {"state":1,"info":{"0":{"total":"8768"},"data":[{"id":"9264","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9263","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9262","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9261","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9260","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9259","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9258","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9257","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9256","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9255","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9254","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9253","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9252","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9251","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9250","channel":"cli","title":"Lazada","payout":"0.03","platform":"1","status":"1","icon":"https://res.zcoup.com/1621251144353_WechatIMG70.png","country_data":"ID"},{"id":"9249","channel":"ali2","title":"Alibaba.com","payout":"0.15","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"DE"},{"id":"9248","channel":"ali2","title":"Alibaba.com","payout":"0.15","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"IT"},{"id":"9247","channel":"ali2","title":"Alibaba.com","payout":"0.15","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"TH"},{"id":"9246","channel":"ali2","title":"Alibaba.com","payout":"0.15","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"ID"},{"id":"9245","channel":"ali2","title":"Alibaba.com","payout":"0.15","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"VN"},{"id":"9244","channel":"ali2","title":"Alibaba.com","payout":"0.15","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"ES"},{"id":"9243","channel":"ali2","title":"Alibaba.com","payout":"0.15","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"FR"},{"id":"9242","channel":"ali2","title":"Alibaba.com","payout":"0.20","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"JP"},{"id":"9241","channel":"ali2","title":"Alibaba.com","payout":"0.15","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"KR"},{"id":"9239","channel":"ali2","title":"Alibaba.com","payout":"0.35","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"US"},{"id":"9238","channel":"ali2","title":"Alibaba.com","payout":"0.25","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"GB"},{"id":"9237","channel":"ali2","title":"Alibaba.com","payout":"1.50","platform":"2","status":"1","icon":"https://res.zcoup.com/1627026839639_1.png","country_data":"BR"},{"id":"9235","channel":"mn","title":"Digido","payout":"0.10","platform":"1","status":"1","icon":"https://res.zcoup.com/1650004012452_digidp.webp","country_data":"PH"},{"id":"9234","channel":"mn","title":"Viettel Money","payout":"0.10","platform":"1","status":"1","icon":"https://res.zcoup.com/1649845343027_money.webp","country_data":"VN"},{"id":"9233","channel":"mn","title":"Hago","payout":"0.30","platform":"1","status":"1","icon":"https://res.zcoup.com/1649845247839_hago.webp","country_data":"VN"}],"page":"1","page_size":"30","sort":"id","order":"desc","total":"8768","offer_search":""}}
  return request({
    url: '/buzz',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// api update offer
export function ApiGetUpdateOfferList(data: ObjTy) {
  return request({
    url: '/apu/list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

// api update offer log
export function ApiGetUpdateOffferLog(data: ObjTy) {
  return request({
    url: '/apu/log-list',
    data,
    method: 'get',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })}

