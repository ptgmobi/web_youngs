const setting: any = {
  choice_type: [
    {value: 1, label: '包含'},
    {value: 2, label: '排除'},
  ],
  status: [
    {value: 1, label: '开'},
    {value: 2, label: '关'},
  ],
  // 操作系统
  system: [
    {value: 1, label: 'Android'},
    {value: 2, label: 'iOS'},
    {value: 3, label: 'Windows'},
    {value: 4, label: 'macOS'},
    {value: 5, label: '其他'},
    {value: 6, label: '未知'},
  ],
  // 终端类型
  terminal_type: [
    {value: 1, label: '手机'},
    {value: 2, label: '平板'},
    {value: 3, label: 'PC'},
    {value: 4, label: '其他'},
    {value: 5, label: '未知'},
  ],
  // 网络连接
  network_type: [
    {value: 1, label: 'WIFI'},
    {value: 2, label: '移动网络'},
    {value: 3, label: '其他'},
    {value: 4, label: '未知'},
  ],
  // 流量类型
  flow_type: [
    {value: 1, label: 'in-APP'},
    {value: 2, label: 'Web'},
  ],
  //新建广告主 > 广告主类型
  adv_type: [
    {value: 'app-android', label: 'App-Android'},
    {value: 'app-ios', label: 'App-iOS'},
    {value: 'web', label: 'Web'},
  ],
  //新建广告主 > 行业分类
  ind_cla: [
    {value: 'e-commerce', label: '电商'},
    {value: 'game', label: '游戏'},
    {value: 'entertainment', label: '泛娱乐'},
    {value: 'other', label: '其他'},
  ],
  //新建广告主 > 第三方监测平台
  third_party: [
    {value: 'appflyer', label: 'Appflyer'},
    {value: 'adjust', label: 'Adjust'},
    {value: 'branch', label: 'Branch'},
    {value: 'other-third', label: '其他第三方'},
    {value: 'client', label: '客户追踪'},
    {value: 'no', label: '无追踪'},
  ],
  //新建广告主 > 回传方式
  return_mode: [
    {value: 'appflyer', label: 'Appflyer回传'},
    {value: 'adjust', label: 'Adjust回传'},
    {value: 'branch', label: 'Branch回传'},
    {value: 'other-third', label: '其他第三方回传'},
    {value: 'client-sdk', label: '客户SDK回传'},
    {value: 'client-api', label: '客户API回传'},
    {value: 'client-excel', label: '客户人工回传'},
    {value: 'no', label: '无回传'},
  ],
  // time_zone
  time_zone: [
    {value: 'UTC-12', label: 'UTC-12（IDLW — 国际换日线）'},
    {value: 'UTC-11', label: 'UTC-11 （SST — 美属萨摩亚标准时间）'},
    {value: 'UTC-10', label: 'UTC-10（HST — 夏威夷-阿留申标准时间）'},
    {value: 'UTC-9:30', label: 'UTC-9:30（MIT — 马克萨斯群岛标准时间）'},
    {value: 'UTC-9', label: 'UTC-9（AKST — 阿拉斯加标准时间）'},
    {value: 'UTC-8', label: 'UTC-8（PST — 太平洋标准时间）'},
    {value: 'UTC-7', label: 'UTC-7（MST — 北美山区标准时间）'},
    {value: 'UTC-6', label: 'UTC-6（CST — 北美中部标准时间）'},
    {value: 'UTC-5', label: 'UTC-5（EST — 北美东部标准时间）'},
    {value: 'UTC-4', label: 'UTC-4（AST — 大西洋标准时间）'},
    {value: 'UTC-3:30', label: 'UTC-3:30（NST — 纽芬兰岛标准时间）'},
    {value: 'UTC-3', label: 'UTC-3（BRT — 巴西利亚标准时间）'},
    {value: 'UTC-2', label: 'UTC-2（FNT — 费尔南多·迪诺罗尼亚群岛标准时间）'},
    {value: 'UTC-1', label: 'UTC-1（CVT — 佛得角标准时间）'},
    {value: 'UTC', label: 'UTC（WET — 欧洲西部时区，GMT - 格林尼治标准时间）'},
    {value: 'UTC+1', label: 'UTC+1（CET — 欧洲中部时区）'},
    {value: 'UTC+2', label: 'UTC+2（EET — 欧洲东部时区）'},
    {value: 'UTC+3', label: 'UTC+3（MSK — 莫斯科时区）'},
    {value: 'UTC+3:30', label: 'UTC+3:30（IRST — 伊朗标准时间）'},
    {value: 'UTC+4', label: 'UTC+4（GST — 海湾标准时间）'},
    {value: 'UTC+4:30', label: 'UTC+4:30（AFT — 阿富汗标准时间）'},
    {value: 'UTC+5', label: 'UTC+5（PKT — 巴基斯坦标准时间）'},
    {value: 'UTC+5:30', label: 'UTC+5:30（IST — 印度标准时间）'},
    {value: 'UTC+5:45', label: 'UTC+5:45（NPT — 尼泊尔标准时间）'},
    {value: 'UTC+6', label: 'UTC+6（BHT — 孟加拉标准时间）'},
    {value: 'UTC+6:30', label: 'UTC+6:30（MMT — 缅甸标准时间）'},
    {value: 'UTC+7', label: 'UTC+7（ICT — 中南半岛标准时间）'},
    {value: 'UTC+8', label: 'UTC+8（CT/CST — 中原标准时间）'},
    {value: 'UTC+9', label: 'UTC+9（JST — 日本标准时间）'},
    {value: 'UTC+9:30', label: 'UTC+9:30（ACST — 澳大利亚中部标准时间）'},
    {value: 'UTC+10', label: 'UTC+10（AEST — 澳大利亚东部标准时间）'},
    {value: 'UTC+10:30', label: 'UTC+10:30（LHST — 豪勋爵群岛标准时间）'},
    {value: 'UTC+11', label: 'UTC+11（VUT — 瓦努阿图标准时间）'},
    {value: 'UTC+12', label: 'UTC+12（NZST — 纽西兰标准时间）'},
    {value: 'UTC+12:45', label: 'UTC+12:45（CHAST — 查塔姆群岛标准时间）'},
    {value: 'UTC+13', label: 'UTC+13（PHOT — 菲尼克斯群岛标准时间）'},
    {value: 'UTC+14', label: 'UTC+14（LINT — 莱恩群岛标准时间）'},
  ]

}


export default setting
