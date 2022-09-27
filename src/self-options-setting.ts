interface OptionTy {
  value: number | string
  label: string
}

interface SettingTy {
  flow_source: Array<OptionTy>
  offer_source: Array<OptionTy>
  flow_type: Array<OptionTy>
  ad_type: Array<OptionTy>
  bidding_agreement: Array<OptionTy>
  bidding_type: Array<OptionTy>
  currency: Array<OptionTy>
  status: Array<OptionTy>
  choice_type: Array<OptionTy>
  choice_type_region: Array<OptionTy>
  method: Array<OptionTy>
  security: Array<OptionTy>
  is_del: Array<OptionTy>
  value_type: Array<OptionTy>
  device_type: Array<OptionTy>
  platform: Array<OptionTy>
}

const setting: SettingTy = {
  flow_source: [
    {value: 1, label: '开发者'},
    {value: 2, label: 'ADX'},
    {value: 3, label: 'SSP'},
    {value: 4, label: 'DSP'},
  ],
  offer_source: [
    {value: 1, label: '直客'},
    {value: 2, label: 'ADX'},
    {value: 3, label: 'SSP'},
    {value: 4, label: 'DSP'},
  ],
  flow_type: [
    {value: '1', label: 'in-app'},
    {value: '2', label: 'mobile'},
    {value: '3', label: 'pc web'}
  ],
  ad_type: [
    {value: '1', label: '图片'},
    {value: '2', label: '原生'},
    {value: '3', label: '视频'}
  ],
  bidding_agreement: [
    {value: 1, label: 'OpenRTB2.3'},
    {value: 2, label: 'OpenRTB2.5'},
    {value: 3, label: 'OpenRTB3.0'},
    {value: 4, label: '自定义'},
    {value: 5, label: '未知'},
  ],
  bidding_type: [
    {value: 1, label: '第一高价'},
    {value: 2, label: '第二高价'},
    {value: 3, label: '其它'},
    {value: 4, label: '未知'},
  ],
  currency: [
    {value: 1, label: '美元USD'},
    {value: 2, label: '人民币CNY'},
  ],
  status: [
    {value: 1, label: '开'},
    {value: 2, label: '关'},
  ],
  choice_type_region: [
    {value: 1, label: '包含这些地区'},
    {value: 2, label: '排除这些地区'},
  ],
  choice_type: [
    {value: 1, label: '包含'},
    {value: 2, label: '排除'},
  ],
  method: [
    {value: 'head', label: 'HEAD'},
    {value: 'get', label: 'GET'},
    {value: 'post', label: 'POST'},
  ],
  security: [
    {value: 'http', label: 'http'},
    {value: 'https', label: 'https'},
  ],
  is_del: [
    {value: 1, label: '未删除'},
    {value: 2, label: '删除'},
  ],
  value_type: [
    {value: 'name', label: '名称'},
    {value: 'id', label: 'ID'},
    {value: 'token', label: 'Token'},
  ],
  device_type: [
    {value: '1,4', label: '手机'},
    {value: '5', label: '平板'},
    {value: '2', label: 'PC'},
    {value: '3,6,7', label: '其他'},
    {value: '0', label: '未知'},
  ],
  platform: [
    {value: '1', label: 'Android'},
    {value: '2', label: 'iOS'},
    {value: 'Windows', label: 'Windows'},
    {value: 'MacOS', label: 'MacOS'},
    {value: '0', label: '其他'},
  ]
}


export default setting
