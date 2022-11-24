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
