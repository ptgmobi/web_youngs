import type { UploadProps, UploadUserFile, genFileId } from 'element-plus'
import { ElMessage } from 'element-plus'
import { ApiUploadImg } from '@/api/dsp-advertiser'

const validate = async (controlType, rawFile, type, options) => {
  const {
    type_reg,
    size,
    limit,
    duration
  } = options
  console.log(rawFile, type, options)
  if (type === 'image') {
    let imageData: any = {
      w: '',
      h: '',
      limit: rawFile.size,
      type: rawFile.type
    }
    const judgeSize = new Promise(function (resolve, reject) {
      let URL = window.URL || window.webkitURL
      let url = ''
      if (controlType === 'file') {
        url = URL.createObjectURL(rawFile)
      }
      if (controlType === 'url') {
        url = rawFile
      }
      let imageData: any = {}
      let image = new Image()
      image.onload = function () {
        let w = image.width
        let h = image.height
        let valid = size.find(ele => {
          return ele.width === w && ele.height === h
        })
        imageData.w = w
        imageData.h = h
        valid ? resolve(imageData) : reject('图片尺寸错误')
      }
      image.src = url
    })
    const judgeTyle = new Promise(function (resolve, reject) {
      let file_type = rawFile.type
      let valid = type_reg.test(file_type)
      console.log(valid)
      valid ? resolve(imageData) : reject('图片类型错误')
    })
    const judgeLimit = new Promise(function (resolve, reject) {
      let file_limit = rawFile.size
      let valid = file_limit <= limit
      valid ? resolve(imageData) : reject('图片大小错误')
    })
    const res = await Promise.allSettled([judgeSize, judgeTyle, judgeLimit]).then(value => {
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
    let videoData: any = {
      w: '',
      h: '',
      limit: rawFile.size,
      type: rawFile.type,
      duration: ''
    }
    const judgeSize = new Promise(function (resolve, reject) {
      let url = ''
      if (controlType === 'file') {
        url = URL.createObjectURL(rawFile)
      }
      if (controlType === 'url') {
        url = rawFile
      }
      let videoObj = document.createElement('video')
      videoObj.onloadedmetadata = function (evt) {
        URL.revokeObjectURL(url)
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
        videoData.w = w
        videoData.h = h
        videoData.duration = duration_time
        return resolve(videoData)
      }
      videoObj.src = url
      videoObj.load()
    })
    const judgeTyle = new Promise(function (resolve, reject) {
      let file_type = rawFile.type
      let valid = type_reg.test(file_type)
      valid ? resolve(videoData) : reject('视频类型错误')
    })
    const judgeLimit = new Promise(function (resolve, reject) {
      let file_limit = rawFile.size
      let valid = file_limit <= limit
      valid ? resolve(videoData) : reject('视频大小错误')
    })
    const res = await Promise.allSettled([judgeSize, judgeTyle, judgeLimit]).then(value => {
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
  if (process.env.NODE_ENV === 'serve-dev-no') {
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
    let data: any = {}
    res.map(ele => {
      let object = ele.value
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          const element = object[key]
          if (element) {
            data[key] = element
          }
        }
      }
    })
    result = {
      status: true,
      msg: 'success',
      data
    }
  }
  return result
}

export default {
  validate,
  uploadHttpRequest
}