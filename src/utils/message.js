import { ElNotification } from 'element-plus'
/**
 *
 * @param {data} res
 */
export function messageFun(res) {
  if (res) {
    ElNotification({
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
  return false
}
