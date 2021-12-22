import _ from 'lodash'
// 获取当前选中name的chart数据
export function handleChartArr(name, basedata, date, type = '') {
  const data = _.cloneDeep(basedata)
  const dateArr = data[date]
  const res = {
    date: dateArr,
    data: []
  }
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key) && key !== date) {
      const element = data[key]
      dateArr.map((d, i) => {
        const obj = element.find((ele) => {
          return ele[date] === d
        })
        if (!obj) {
          element.splice(i, 0, {
            [date]: d
          })
        }
      })
      const arr = []
      element.map((ele) => {
        if (ele[name] !== undefined) {
          arr.push(ele[name])
        } else {
          type === 'monitor' ? arr.push(0) : arr.push(null)
          // arr.push(null)
        }
      })
      res.data.push({
        name: key,
        data: arr
      })
    }
  }
  return res
}
// 根据数据处理为折线堆积图，可能为多层
export function WwStackedLineChartFn(data, formatTooltipFn, options) {
  if (data.data) {
    // 获取横坐标数组
    const xAxisData = data.date
    // 获取类别数组
    const legendData = []
    // 获取纵坐标数组
    const yAxisData = []
    data.data.map((ele) => {
      legendData.push(ele.name)
      const obj = {
        name: ele.name,
        type: 'line',
        // areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: ele.data
      }
      yAxisData.push(obj)
    })
    const res = {
      ...options,
      // title: {
      //   text: '堆叠区域图',
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            show: true,
            formatter: function (params) {
              // return `${params.value}---aaa`
              return formatTooltipFn(params)
            },
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        show: data.data.length !== 1,
        data: legendData
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: xAxisData
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: yAxisData
    }
    // console.log(options, res)
    return res
  }
}
