import uploadSetting from '@/self-upload-setting'
import type { UploadProps, UploadUserFile, genFileId } from 'element-plus'

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
      let valid = file_limit > image_limit
      valid ? resolve(true) : reject('图片大小错误')
    })
    return Promise.allSettled(judgeSize, judgeTyle, judgeLimit).then(value => {
      console.log(value)
      return value
    }).finally((value: any) => {
      console.log(value)
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
        console.log(videoObj.videoWidth, videoObj.videoHeight)
        let valid = video_size.find(ele => {
          return ele.width === w && ele.height === h
        })
        valid = true
        valid ? resolve(null) : reject()
      }
      videoObj.src = video
      videoObj.load()
    })
  }
}

export default {
  validate
}