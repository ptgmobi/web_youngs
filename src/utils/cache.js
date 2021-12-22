export function setLocalStorage(key, value) {
  window.localStorage.setItem(key, value)
}
export function getLocalStorage(key) {
  return window.localStorage.getItem(key)
}
export function delLocalStorage(key) {
  return window.localStorage.removeItem(key)
}
export function batchDelLocalStorage(keys) {
  return keys?.map((item) => {
    window.localStorage.removeItem(item)
  })
}
