import * as clipboard from 'clipboard-polyfill/text'
import { ElMessage } from 'element-plus'
// 复制到粘贴板
export function clipboardFn (text: string) {
  if (text) {
    clipboard.writeText(text).then(() => {
      // success
      ElMessage({
        message: 'Copy Success !',
        type: 'success',
      })
    }, () => {
      // error
      ElMessage({
        message: 'Copy Error !',
        type: 'error',
      })
    })
  }
}
