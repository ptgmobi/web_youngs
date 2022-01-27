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
