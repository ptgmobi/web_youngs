const setting: any = {
  // logo
  logo_type_reg: /png|jpg|jpeg/,
  logo_limit: 3 * (1024 * 1024),
  logo_size: [
    { width: 100, height: 100 },
    { width: 500, height: 500 },
  ],
  // image
  image_type_reg: /png|jpg|jpeg|gif/,
  image_limit: 3 * (1024 * 1024),
  image_size: [
    { width: 160, height: 600 },
    { width: 250, height: 250 },
    { width: 300, height: 50 },
    { width: 300, height: 250 },
    { width: 300, height: 600 },
    { width: 320, height: 50 },
    { width: 320, height: 100 },
    { width: 320, height: 480 },
    { width: 480, height: 320 },
    { width: 628, height: 1200 },
    { width: 728, height: 90 },
    { width: 970, height: 250 },
    { width: 1200, height: 628 },
  ],
  // video
  video_type_reg: /mp4/,
  video_limit: 10 * (1024 * 1024),
  video_duration: 30,
  video_size: [
    { width: 320, height: 480 },
    { width: 480, height: 320 },
  ]
}


export default setting
