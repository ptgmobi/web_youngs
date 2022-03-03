// 把ajaxData的值转变为数字
export function handleAjaxDataObjectFn(data: any) {
  const newObj: any = {}
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key]
      if (element && element !== '' && element == Number(element)) {
        newObj[key] = Number(element)
      } else {
        newObj[key] = element
      }
    }
  }
  return newObj
}
// 把ajaxData的空值的key去掉，并且把字符串数字变为数值数字
export function handleAjaxDataDelNoKeyFn(data: any) {
  const newObj: any = {}
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key]
      if (element && element !== '') {
        if (element == Number(element)) {
          newObj[key] = Number(element)
        } else {
          newObj[key] = element
        }
      } else {
        delete data[key]
      }
    }
  }
  return newObj
}

// 打开新的网站
export function openNewUrl(str: string) {
  let href = window.location.href
  let reg = /(?<=#).+/g
  let baseUrl = href.replaceAll(reg, '')
  let finalUrl = `${baseUrl}${str}`
  window.open(finalUrl)
  return finalUrl
}

// 
export function analysisExcelFn (str: string, num: number, regStr: RegExp){
  // 此处解析复制的excel数据
  let reg = new RegExp(/\n+/)
  let reg1 = new RegExp(/\s+/)
  let reg2 = new RegExp(/[\S]+/)
  let arr = str.split(reg)
  let flag = true
  let newArr: any = []
  arr.forEach((ele: string, index: any) => {
    if (ele && reg2.test(ele)) {
      let arr = ele.trim().split(/\s+/)
      if (arr.length === num) {
        arr.map(o => {
          console.log(regStr)
          if (!regStr.test(o)) {
            flag = false
          }
        })
        newArr.push(arr)
      } else {
        flag = false
      }
    } else {
      flag = false
    }
  })
  if (flag) {
    return newArr
  } else {
    return flag
  }
}
