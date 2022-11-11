import { ApiGetCommonCountryList } from '@/api/common'
import { ElMessageBox, Action } from 'element-plus'
import setting from '@/self-options-setting'
export const handleAjaxNumberKeyFn = (obj, arr) => {
  let finalObj = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key]
      if (arr.includes(key)) {
        finalObj[key] = Number(element)
      } else {
        finalObj[key] = element
      }
    }
  }
  return finalObj
}

export const handleAjaxArrayKeyFn = (obj, arr) => {
  let finalObj = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key]
      if (arr.includes(key)) {
        finalObj[key] = element.length === 0 ? '' : element.join(',')
      } else {
        finalObj[key] = element
      }
    }
  }
  return finalObj
}

export default function () {
  const { proxy }: any = getCurrentInstance()
  const router = useRouter()

  const goNewUrl = (options) => {
    const { url, query } = options
    proxy.$router.push({
      path: url,
      query: query
    })
  }

  const getRouterData = () => {
    let route = router.currentRoute.value
    return route
  }
  
  const getCommonCountryList = async () => {
    const res = await ApiGetCommonCountryList()
    const {data: countryData} = res
    let arr: any = []
    for (const key in countryData) {
      if (Object.prototype.hasOwnProperty.call(countryData, key)) {
        const element = countryData[key]
        if (element.short_name) {
          arr.push(element)
        }
      }
    }
    arr.map(ele => {
      ele.value = ele.short_name.toString()
      ele.label = `${ele.short_name}-${ele.zh_cn}`
      return ele
    })
    return arr
  }

  // 二次弹框确认
  const openAlert = (options, callbackFn) => {
    let {text, title, buttonText} = options
    ElMessageBox.alert(text, title || '温馨提示', {
      confirmButtonText: buttonText || 'OK',
      callback: (action: Action) => {
        console.log(action)
        if (action === 'confirm') {
          callbackFn()
        }
      },
    })
  }

  // 处理数组，其中对应的字段改为对应的值
  const setArrayValueToLable = (arr) => {
    let targetSetting = {
      flow_source: setting.flow_source,
      offer_source: setting.offer_source,
      flow_type: setting.flow_type,
      ad_type: setting.ad_type,
      bidding_agreement: setting.bidding_agreement,
      bidding_type: setting.bidding_type,
      device_type: setting.device_type,
      platform: setting.platform,

    }
    return arr.map(object => {
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          const element = object[key]
          if (targetSetting.hasOwnProperty(key)) {
            let o = targetSetting[key].find(ele => {
              let a = ele.value.split(',')
              return a.includes(element.toString())
            })
            if (o) {
              object[key] = o.label
            }
          }
        }
      }
      return object
    })
  }

  return {
    handleAjaxNumberKeyFn,
    handleAjaxArrayKeyFn,
    goNewUrl,
    getRouterData,
    getCommonCountryList,
    openAlert,
    setArrayValueToLable
  }
}