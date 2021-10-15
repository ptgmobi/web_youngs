import moment from 'moment'
// moment.locale('zh-cn')
/**
 * toFixedFn
 * ? params
 * num 需要处理的数
 * n 保留几位
 */
export function toFixedFn(num, n) {
  if (typeof (num) === 'number') {
    return num.toFixed(n)
  }
  if (typeof (num) === 'string') {
    if (isNaN(num)) {
      return num
    } else {
      return parseFloat(num).toFixed(n)
    }
  }
  return num
}
/**
 * toFixed2
 */
export function toFixed2(num) {
  return toFixedFn(num, 2)
}
/**
 * toNumberSort
 */
export function toNumberSort(a, b) {
  return parseFloat(a.rev) - parseFloat(b.rev)
}

/**
 * 获取到今天日期区间
 * ? params
 * ! day
 */
export function getSectionTime(num, type) {
  return [moment().subtract(num, type).format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]
}

/**
 * 获取任意日期区间
 * ? params
 * ! day
 */
export function getSectionAnyTime(startnum, endnum, type) {
  return [moment().subtract(startnum, type).format('YYYY-MM-DD'), moment().subtract(endnum, type).format('YYYY-MM-DD')]
}

/**
 * 获取日期区间数组
 * ? params
 * ! day
 */
export function getSectionTimeArr(num, type) {
  return [...new Array(num - 1)].map((i, idx) => moment().subtract(idx, type).format('YYYY-MM-DD')).reverse()
}
/**
 * 获取一天24小时数组
 * ? params
 * ! day
 */
export function getSectionTimeArrForOneDay() {
  const arr = []
  for (let index = 0; index < 24; index++) {
    arr.push(moment().hour(index).format('HH'))
  }
  return arr
}
/**
 * 处理获取到的报表数据
 * ? params
*/
export function handleChartData(date, columns, rows) {
  const obj = {}
  for (const key in columns) {
    // if (columns.hasOwnProperty(key)) {
    if (Object.prototype.hasOwnProperty.call(columns, key)) {
      obj[key] = {
        columns: [date, key],
        rows: []
      }
      rows.forEach(ele => {
        obj[key].rows.push({
          [date]: ele[date],
          [key]: ele[key]
        })
      })
    }
  }
  return obj
}
// 处理获取到的table数据字符串变为数字
export function handleTableDataObj(ele) {
  for (const key in ele) {
    // if (ele.hasOwnProperty(key)) {
    if (Object.prototype.hasOwnProperty.call(ele, key)) {
      const element = ele[key]
      if (typeof element !== 'object') {
        // eslint-disable-next-line
        if (element == parseFloat(element)) {
          ele[key] = parseFloat(element)
        }
      } else {
        handleTableDataObj(ele[key])
      }
    }
  }
  return ele
}
// 处理获取到的table数据
export function handleTableData(data) {
  console.log(data)
  if (data && data.length !== 0) {
    data.map(ele => {
      ele = handleTableDataObj(ele)
      return ele
    })
    return data
  }
  return []
}
// 处理获取到的一维数组变为树状结构
export function handlePowerTree(data) {
  // console.log(data)
  const arr = []
  const toTree = (ele, parent) => {
    ele.group = ele.path.shift()
    const obj = parent.find((o, i, a) => {
      return ele.group === o.value
    })
    if (obj) {
      if (ele.path.length === 0) {
        parent.push(ele)
      } else {
        toTree(ele, obj.children)
      }
    } else {
      if (ele.path.length === 0) {
        parent.push(ele)
      } else {
        parent.push({
          value: ele.group,
          label: ele.group,
          children: [ele]
        })
      }
    }
  }
  data.map(ele => {
    ele.path = ele.content.split('/')
    toTree(ele, arr)
    return ele
  })
  return arr
}
// 处理路由tree结构，处理因tree结构需要但导航不需要的chridren
export function handleRouteTree(data, getInfo) {
  const menu = getInfo.menu
  const fn = (arr) => {
    if (Array.isArray(arr)) {
      arr.map(ele => {
        if (ele.meta) {
          if (process.env.NODE_ENV === 'development') {
            ele.meta.roles = [getInfo.role_id]
          }
          if (menu.includes(ele.id)) {
            ele.meta.roles = [getInfo.role_id]
          }
        }
        if (!ele.children) {
          return ele
        } else {
          return fn(ele.children)
        }
      })
    }
    return arr
  }
  const result = fn(data)
  return result
}

// 处理数组变为tree结构，关系为子pid = 父id
export function handleIdTree(data) {
  const filterArray = (data, parent) => {
    const tree = []
    let temp
    data.map(ele => {
      ele.value = ele.url
      ele.label = ele.name
      if (ele.pid) {
        if (ele.pid === parent) {
          temp = filterArray(data, ele.id)
          if (temp.length > 0) {
            ele.children = temp
          }
          tree.push(ele)
        }
      } else {
        tree.push(ele)
      }
    })
    return tree
  }
  return filterArray(data, '0')
}
// 千位分隔符
export function thousandSeparator(num) {
  return (num + '').replace(/(?!^)(?=(\d{3})+$)/g, ',')
  // let count = 0
  // let ans = ''
  // do {
  //   const cur = n % 10
  //   n = Math.floor(n / 10)
  //   ans += cur.toString()
  //   ++count
  //   if (count % 3 === 0 && n) {
  //     ans += '.'
  //   }
  // } while (n)
  // return ans.split('').reverse().join('')
}

// 获取昨日时间
export function getYestenday() {
  return moment().subtract(1, 'days').format('YYYY-MM-DD')
}
// 获取当月时间
export function getCurrentMonth(num) {
  return moment().subtract(num, 'month').format('YYYY-MM')
}
export function getAnyMonth(startnum, endnum) {
  return [moment().subtract(startnum, 'month').format('YYYY-MM'), moment().subtract(endnum, 'month').format('YYYY-MM')]
}
// 根据周的number和开始以及截至日期处理成日的区间数组
export function getCurrentWeekArr(options) {
  const handleWeekDay = (date) => {
    return ''
    // const week = moment(date).isoWeekday()
    // switch (week) {
    //   case 1:
    //     return '周一'
    //   case 2:
    //     return '周二'
    //   case 3:
    //     return '周三'
    //   case 4:
    //     return '周四'
    //   case 5:
    //     return '周五'
    //   case 6:
    //     return '周六'
    //   case 0:
    //     return '周日'
    // }
  }
  const { number, startData, endData } = options
  // 第几周的周一
  const week = moment().isoWeek(number)
  if (week) {
    // 第几周的周一当天是周几
    const weekDay = moment(week).day()
    // 第几周的周一
    const firstDay = moment().isoWeek(number).subtract((weekDay - 1), 'days').format('YYYY/MM/DD')
    // 第几周的周日
    const lastDay = moment().isoWeek(number).add((7 - weekDay), 'days').format('YYYY/MM/DD')
    // 第几周
    const weekDataFormat = `${week.format('YYYY')}-${week.isoWeek()}`
    let str = `${firstDay}${handleWeekDay(firstDay)}-${lastDay}${handleWeekDay(lastDay)}`
    if (startData) {
      const startDataFormat = `${moment(startData).format('YYYY')}-${moment(startData).isoWeek()}`
      if (startDataFormat === weekDataFormat) {
        str = `${startData}${handleWeekDay(startData)}-${lastDay}${handleWeekDay(lastDay)}`
      }
    }
    if (endData) {
      const endDataFormat = `${moment(endData).format('YYYY')}-${moment(endData).isoWeek()}`
      if (endDataFormat === weekDataFormat) {
        str = `${firstDay}${handleWeekDay(firstDay)}-${endData}${handleWeekDay(endData)}`
      }
    }
    return str
  }
}

// 从产品数组中选择
export function choiceDefaultProduct(arr) {
  // 默认选择游戏
  return arr.find(ele => ele.id === '1') ? '1' : '2'
}
// 素材类型
export function choiceDefaultMaterialType(arr) {
  // 默认视频
  return arr.find(ele => ele.id === '1') ? '1' : '2'
}
