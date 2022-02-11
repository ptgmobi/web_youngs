import store from '@/store'
import axios from 'axios'
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus'
import { getToken, setToken } from '@/utils/auth'
import { AxiosConfigTy, AxiosReqTy, ObjTy } from '@/types/common'
let reqConfig: any
// import qs from 'qs'
let loadingE: any

const service: any = axios.create({
  // baseURL: process.env.VUE_APP_BASE_URL,
  // timeout: 30000 // 超时时间
})
// 请求拦截
service.interceptors.request.use(
  (request: AxiosReqTy) => {
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
    reqConfig = request
    if (request.bfLoading) {
      loadingE = ElLoading.service({
        lock: true,
        text: '数据载入中',
        // spinner: 'el-icon-ElLoading',
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
    // if (request.method === 'post') {
    //   request.data = qs.stringify(request.data)
    // }
    return request
  },
  (err: any) => {
    Promise.reject(err)
  }
)
// 响应拦截
service.interceptors.response.use(
  (res: any) => {
    if (reqConfig.afHLoading && loadingE) {
      loadingE.close()
    }
    // 如果是下载文件直接返回
    if (reqConfig.isDownLoadFile) {
      return res.data
    }
    // const { flag, msg, isNeedUpdateToken, updateToken, code } = res.data
    // //更新token保持登录状态
    // if (isNeedUpdateToken) {
    //   setToken(updateToken)
    // }
    // const successCode = '0,200,20000'
    // if (successCode.indexOf(code)) {
    //   return res.data
    // } else {
    //   if (code === 403) {
    //     ElMessageBox.confirm('请重新登录', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //         //direct return
    //         return Promise.reject(res.data)
    //       })
    //     })
    //   }
    //   if (reqConfig.isAlertErrorMsg) {
    //     ElMessage({
    //       message: msg,
    //       type: 'error',
    //       duration: 2 * 1000
    //     })
    //   }
    //   //返回错误信息
    //   //如果未catch 走unhandledrejection进行收集
    //   return Promise.reject(res.data)
    // }
    const { code, message } = res.data
    if (code !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (code === 50008 || code === 50012 || code === 50014) {
        // to re-login
        ElMessageBox.confirm(message, '系统提示', {
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

export function axiosReq({
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

export default axiosReq
