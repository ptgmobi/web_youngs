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


/*
获取并验证excel字符串
str: excel字符串
num: 横向几列
regstr: 每个字符串的正则
**/
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
    return {
      type: flag,
      data: newArr
    }
  } else {
    return {
      type: flag,
      data: newArr
    }
  }
}

// 随机生成特定长度的字符串
export function randomStr (num: number = 0) {
  let str = 'abcdefghijklmnopqrstuvwxyz'
  let strLen = str.length
  let n = Math.floor(Math.random() * strLen)
  let str1 = str[n]
  // 生成7位长随机字符串
  let str2 = Math.random().toString(16).substring(2, num + 1)
  return `${str1}${str2}`
}

