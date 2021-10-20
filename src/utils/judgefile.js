/**
 *
 * @param {data} res
 */
export function judgeFile(url) {
  const videoArr = ['mp4']
  const imageArr = ['jpg', 'png']
  if (videoArr.find(ele => {
    return url.includes(ele)
  })) {
    return 'video'
  }
  if (imageArr.find(ele => {
    return url.includes(ele)
  })) {
    return 'image'
  }
}
