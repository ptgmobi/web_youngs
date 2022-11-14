import uploadSetting from '@/self-upload-setting'
import type { UploadProps, UploadUserFile, genFileId } from 'element-plus'
import { ApiUploadImg } from '@/api/dsp-advertiser'

const {
  logo_type_reg,
  logo_limit,
  logo_size,
  // image
  image_type_reg,
  image_limit,
  image_size,
  // video
  video_type_reg,
  video_limit,
  video_duration,
  video_size,
} = uploadSetting

const validate = async (rawFile, type) => {
  console.log(rawFile, type)
  if (type === 'logo') {
    const judgeSize = new Promise(function (resolve, reject) {
      let URL = window.URL || window.webkitURL
      let image = new Image()
      image.onload = function () {
        let w = image.width
        let h = image.height
        let valid = logo_size.find(ele => {
          return ele.width === w && ele.height === h
        })
        valid ? resolve(null) : reject('图片尺寸错误')
      }
      image.src = URL.createObjectURL(rawFile)
    })
    const judgeTyle = new Promise(function (resolve, reject) {
      let file_type = rawFile.type
      let valid = logo_type_reg.test(file_type)
      valid ? resolve(null) : reject('图片类型错误')
    })
    const judgeLimit = new Promise(function (resolve, reject) {
      let file_limit = rawFile.size
      let valid = file_limit <= logo_limit
      valid ? resolve(null) : reject('图片大小错误')
    })
    return Promise.allSettled([judgeSize, judgeTyle, judgeLimit]).then(value => {
      console.log(value)
      return value
    })
  }
  if (type === 'image') {
    const judgeSize = new Promise(function (resolve, reject) {
      let URL = window.URL || window.webkitURL
      let image = new Image()
      image.onload = function () {
        let w = image.width
        let h = image.height
        let valid = image_size.find(ele => {
          return ele.width === w && ele.height === h
        })
        valid ? resolve(true) : reject('图片尺寸错误')
      }
      image.src = URL.createObjectURL(rawFile)
    })
    const judgeTyle = new Promise(function (resolve, reject) {
      let file_type = rawFile.type
      let valid = image_type_reg.test(file_type)
      valid ? resolve(true) : reject('图片类型错误')
    })
    const judgeLimit = new Promise(function (resolve, reject) {
      let file_limit = rawFile.size
      let valid = file_limit <= image_limit
      valid ? resolve(true) : reject('图片大小错误')
    })
    return Promise.allSettled([judgeSize, judgeTyle, judgeLimit]).then(value => {
      console.log(value)
      return value
    })
  }
  if (type === 'video') {
    const judgeSize = new Promise(function (resolve, reject) {
      let video = URL.createObjectURL(rawFile)
      let videoObj = document.createElement('video')
      videoObj.onloadedmetadata = function (evt) {
        URL.revokeObjectURL(video)
        let w = videoObj.videoWidth
        let h = videoObj.videoHeight
        let valid = video_size.find(ele => {
          return ele.width === w && ele.height === h
        })
        valid = true
        valid ? resolve(true) : reject('视频尺寸错误')
      }
      videoObj.src = video
      videoObj.load()
    })
    const judgeTyle = new Promise(function (resolve, reject) {
      let file_type = rawFile.type
      console.log(file_type, video_type_reg)
      let valid = video_type_reg.test(file_type)
      valid ? resolve(true) : reject('视频类型错误')
    })
    const judgeLimit = new Promise(function (resolve, reject) {
      let file_limit = rawFile.size
      let valid = file_limit <= video_limit
      valid ? resolve(true) : reject('视频大小错误')
    })
    return Promise.allSettled([judgeSize, judgeTyle, judgeLimit]).then(value => {
      console.log(value)
      return value
    })
  }
}

const uploadHttpRequest: UploadProps['httpRequest'] = async(
  param
) => {
  const formData = new FormData()
  formData.append("logo_url", param.file)
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
  if (errArr.length !== 0) {
    return {
      status: 0,
      msg: errArr.map(ele => {
        return ele.reason
      }).join(',')
    }
  } else {
    return {
      status: 1,
      msg: 'success'
    }
  }
}

export default {
  validate,
  uploadHttpRequest,
  handleRes
}