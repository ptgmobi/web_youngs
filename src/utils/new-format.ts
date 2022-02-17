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
