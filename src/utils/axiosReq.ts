import store from '@/store'
import axios from 'axios'
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus'
import { getToken, setToken } from '@/utils/auth'
import { AxiosConfigTy, AxiosReqTy } from '@/types/common'
import qs from 'qs'
let requestData: any
let loadingE: any

const service: any = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  // timeout: 30000 // 超时时间
})
// 请求拦截
service.interceptors.request.use(
  (request: AxiosReqTy) => {
    // console.log('request', request)
    // token配置
    const token = getToken()
    if (token) {
      // request.headers['AUTHORIZE_TOKEN'] = token
      request.headers['token'] = token
      request.headers['Authorization'] = `Bearer ${token}`
    }
    /* 下载文件*/
    if (request.isDownLoadFile) {
      request.responseType = 'blob'
    }
    if (request.isUploadFile) {
      console.log('上传的是文件', request)
      request.headers['Content-Type'] = 'multipart/form-data'
    }
    requestData = request
    if (request.bfLoading) {
      loadingE = ElLoading.service({
        lock: true,
        text: '数据载入中',
        spinner: 'el-icon-ElLoading',
        background: 'rgba(0, 0, 0, 0.1)'
      })
    }
    /*
     *params会拼接到url上
     * */
    if (request.isParams) {
      request.params = request.data
      request.data = {}
    }
    if (request.method === 'post') {
      request.data = qs.stringify(request.data)
    }
    return request
  },
  (err: any) => {
    Promise.reject(err)
  }
)
// 响应拦截
service.interceptors.response.use(
  (res: any) => {
    console.log('res', res)
    if (requestData.afHLoading && loadingE) {
      loadingE.close()
    }
    // 如果是下载文件直接返回
    if (requestData.isDownLoadFile) {
      return res.data
    }
    // const { flag, msg, isNeedUpdateToken, updateToken } = res.data
    // //更新token保持登录状态
    // if (isNeedUpdateToken) {
    //   setToken(updateToken)
    // }
    // if (flag) {
    //   return res.data
    // } else {
    //   if (requestData.isAlertErrorMsg) {
    //     ElMessage({
    //       message: msg,
    //       type: 'error',
    //       duration: 2 * 1000
    //     })
    //     return Promise.reject(msg)
    //   } else {
    //     return res.data
    //   }
    // }
    const { code, data } = res.data
    console.log(code, data)
    if (code !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      if (res.code === 400) {
        // to re-login
        ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            store.dispatch('user/resetToken').then(() => {
              location.reload()
            })
          })
          .catch((err: any) => {
            console.log(err)
          })
      }
    } else {
      return res.data
    }
  },
  (err: any) => {
    if (loadingE) loadingE.close()
    if (err && err.response && err.response.code) {
      if (err.response.code === 403) {
        ElMessageBox.confirm('请重新登录', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      } else {
        ElMessage({
          message: err,
          type: 'error',
          duration: 2 * 1000
        })
      }
    } else {
      ElMessage({
        message: err,
        type: 'error',
        duration: 2 * 1000
      })
    }
    return Promise.reject(err)
  }
)

export default function khReqMethod({
  url,
  data,
  method,
  isParams,
  bfLoading,
  afHLoading,
  isUploadFile,
  isDownLoadFile,
  baseURL,
  timeout,
  isAlertErrorMsg = true
}: AxiosConfigTy): any {
  return service({
    url: url,
    method: method ?? 'post',
    data: data ?? {},
    isParams: isParams ?? false,
    bfLoading: bfLoading ?? false,
    afHLoading: afHLoading ?? true,
    isUploadFile: isUploadFile ?? false,
    isDownLoadFile: isDownLoadFile ?? false,
    isAlertErrorMsg: isAlertErrorMsg,
    baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL,
    timeout: timeout ?? 15000
  })
}
