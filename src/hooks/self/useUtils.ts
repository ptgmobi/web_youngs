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
  const handleAjaxNumberKeyFn = (obj, arr) => {
    if (arr.length === 0) return obj
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
  
  const handleAjaxArrayKeyFn = (obj, arr) => {
    if (arr.length === 0) return obj
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

  return {
    handleAjaxNumberKeyFn,
    handleAjaxArrayKeyFn
  }
}