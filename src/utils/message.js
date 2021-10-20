import { Notification } from 'element-ui'
/**
 *
 * @param {data} res
 */
export function messageFun(res) {
  Notification({
    title: res.code === 200 ? 'success' : 'error',
    dangerouslyUseHTMLString: true,
    message: res.info,
    type: res.code === 200 ? 'success' : 'error'
  })
  if (res.code === 200) {
    return true
  }
  return false
}
