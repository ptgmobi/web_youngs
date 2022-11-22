let feeds_num_base_arr: Array<any> = [...new Array(11)]
let feeds_num_arr: Array<any> = []
feeds_num_base_arr.map((index, ele: any) => {
  feeds_num_arr.push(
    {
      value: ele,
      label: ele
    }
  )
  return ele
})
const setting: any = {
  // 适配尺寸
  size: [
    { value: '160x600', label: '160x600' },
    { value: '250x250', label: '250x250' },
    { value: '300x50', label: '300x50' },
    { value: '300x250', label: '300x250' },
    { value: '300x600', label: '300x600' },
    { value: '320x50', label: '320x50' },
    { value: '320x100', label: '320x100' },
    { value: '320x480', label: '320x480' },
    { value: '480x320', label: '480x320' },
    { value: '628x1200', label: '628x1200' },
    { value: '728x900', label: '728x900' },
    { value: '970x250', label: '970x250' },
    { value: '1200x628', label: '1200x628' },
  ],
  // Feeds个数
  feeds_num: feeds_num_arr,
  // 创意目标：1：节日，2：常规，3：促销
  // 1、常规normal ；2、节日festival； 3、促销sale
  creative_goals: [
    { value: 'normal', label: '节日' },
    { value: 'festival', label: '常规' },
    { value: 'sale', label: '促销' },
  ],
  // 审核状态： 1未审核，2审核通过，3审核未通过
  audit_status: [
    { value: 1, label: '未审核' },
    { value: 2, label: '审核通过' },
    { value: 3, label: '审核未通过' },
  ],
}


export default setting
