import type { UploadProps, UploadUserFile, genFileId } from 'element-plus'
import { ElMessage } from 'element-plus'
import { ApiUploadImg } from '@/api/dsp-advertiser'

const validate = async (rawFile, type, options) => {
  const {
    type_reg,
    size,
    limit,
    duration
  } = options
  console.log(rawFile, type, options)
  if (type === 'image') {
    const judgeSize = new Promise(function (resolve, reject) {
      let URL = window.URL || window.webkitURL
      let image = new Image()
      image.onload = function () {
        let w = image.width
        let h = image.height
        let valid = size.find(ele => {
          return ele.width === w && ele.height === h
        })
        valid ? resolve(true) : reject('图片尺寸错误')
      }
      image.src = URL.createObjectURL(rawFile)
    })
    const judgeTyle = new Promise(function (resolve, reject) {
      let file_type = rawFile.type
      let valid = type_reg.test(file_type)
      console.log(valid)
      valid ? resolve(true) : reject('图片类型错误')
    })
    const judgeLimit = new Promise(function (resolve, reject) {
      let file_limit = rawFile.size
      let valid = file_limit <= limit
      valid ? resolve(true) : reject('图片大小错误')
    })
    const res = await Promise.allSettled([judgeTyle, judgeLimit, judgeSize,]).then(value => {
      return value
    })
    console.log(res)
    return new Promise((resolve, reject) => {
      let result: any = handleRes(res)
      if (result.status) {
        resolve(result)
      } else {
        reject('error')
      }
    })
  }
  if (type === 'video') {
    const judgeSize = new Promise(function (resolve, reject) {
      let video = URL.createObjectURL(rawFile)
      let videoObj = document.createElement('video')
      videoObj.onloadedmetadata = function (evt) {
        URL.revokeObjectURL(video)
        let duration_time = videoObj.duration
        let w = videoObj.videoWidth
        let h = videoObj.videoHeight
        let valid_size = size.find(ele => {
          return ele.width === w && ele.height === h
        })
        let valid_duration = duration_time <= duration ? true : false
        if (!valid_size) {
          return reject('视频尺寸错误')
        }
        if (!valid_duration) {
          return reject('视频时长错误')
        }
        return resolve(true)
      }
      videoObj.src = video
      videoObj.load()
    })
    const judgeTyle = new Promise(function (resolve, reject) {
      let file_type = rawFile.type
      let valid = type_reg.test(file_type)
      valid ? resolve(true) : reject('视频类型错误')
    })
    const judgeLimit = new Promise(function (resolve, reject) {
      let file_limit = rawFile.size
      let valid = file_limit <= limit
      valid ? resolve(true) : reject('视频大小错误')
    })
    const res = await Promise.allSettled([judgeTyle, judgeLimit, judgeSize,]).then(value => {
      return value
    })
    console.log(res)
    return new Promise((resolve, reject) => {
      let result: any = handleRes(res)
      if (result.status) {
        resolve(result)
      } else {
        reject('error')
      }
    })
  }
}

const uploadHttpRequest: UploadProps['httpRequest'] = async(
  param
) => {
  const formData = new FormData()
  formData.append("logo_url", param.file)
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'serve-dev') {
    return void 0
  } else {
    const res = await ApiUploadImg(formData)
    return res
  }
}

const handleRes = (res) => {
  let errArr = res.filter(ele => {
    return ele.status === 'rejected'
  })
  let result: any = {}
  if (errArr.length !== 0) {
    result = {
      status: false,
      msg: errArr.map(ele => {
        return ele.reason
      }).join(',')
    }
    ElMessage.error(result.msg)
  } else {
    result = {
      status: true,
      msg: 'success'
    }
  }
  return result
}

export default {
  validate,
  uploadHttpRequest
}