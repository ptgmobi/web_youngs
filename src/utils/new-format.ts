import { isNumber } from "lodash"

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

// 通过传入数组和对象，把ajaxData的值转变为数字
export function handleAjaxDataObjectFun(arr: any, data: any) {
  const newObj: any = {}
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key]
      if (arr.includes(key)) {
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
  if (n === strLen) {
    n = strLen - 1
  }
  let str1 = str[n]
  // 生成7位长随机字符串
  let str2 = Math.random().toString(16).substring(2, num + 1)
  // return `${str1}${str2}`
  return randomString(4) + `_` + randomString(6)
}

function randomString(num: number = 0) {    
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz",
  a = t.length,
  n = "";
  for (let i = 0; i < num; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

// 提交表单的时候对表单提交数据进行美化
// 字符串换为数字
export function handleAjaxNumberKeyFn (obj, arr) {
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
// 提交时数组换为字符串,不传为-1
export function handleAjaxArrayKeyFn (obj, arr) {
  let finalObj = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key]
      if (arr.includes(key) && Array.isArray(element)) {
        finalObj[key] = element.length === 0 ? '' : element.sort().join(',')
      } else {
        finalObj[key] = element
      }
    }
  }
  return finalObj
}

// 提交时数组换为字符串,不传为空
export function handleAjaxArray2KeyFn (obj, arr) {
  let finalObj = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key]
      if (arr.includes(key) && Array.isArray(element)) {
        if (element.length === 1) {
          finalObj[key] = element.join()
        } else {
          finalObj[key] = element.length === 0 ? '' : element.sort().join(',')
        }
      } else {
        finalObj[key] = element
      }
    }
  }
  console.log(finalObj)
  return finalObj
}

// 把ajaxData的空值的key去掉
export function handleAjaxDataDelNo2KeyFn(data: any) {
  const newObj: any = {}
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key]
      if (element && element !== '') {
        newObj[key] = element
      } else {
        delete data[key]
      }
    }
  }
  return newObj
}

// 提交时个别空值需要传-1
export function handleAjaxEmptyKeyFn(obj, arr) {
  let finalObj = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key]
      if (arr.includes(key) && element === '') {
        finalObj[key] = -1
      } else {
        finalObj[key] = element
      }
    }
  }
  return finalObj
}


// 获取单个时, 数组字符串变为数组
export function handleOneDataArrayFn(obj, arr) {
  let finalObj = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key]
      if (arr.includes(key)) {
        if (element === '-1' || element === '') {
          finalObj[key] = []
        } else {
          finalObj[key] = element.toString().includes(',') ? element.split(',').map(ele => {
            if(isFinite(ele)) {
              return Number(ele)
            } else {
              return ele.toString()
            }
          }) : [isFinite(element) ? Number(element) : element]
        }
      } else {
        finalObj[key] = element
      }
    }
  }
  return finalObj
}

// 获取options中对应的值
export function getOptionsValue (key, arr) {
  if (arr) {
    let label = arr.find(ele => {
      return ele.value === key
    })?.label
    return label ? label : '-'
  }
  return '-'
  
}

