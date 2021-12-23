export function handleAjaxDataObjectFn(data: any) {
  console.log(data)
  const newObj: any = {}
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const element = data[key]
      if (element && element !== '' && element == Number(element)) {
        console.log(key)
        newObj[key] = Number(element)
      } else {
        newObj[key] = element
      }
    }
  }
  return newObj
}
