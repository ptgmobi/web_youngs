<template>
  <div>
    <div>
      <el-form
        :inline="true"
        :model="searchData.data"
        class="flex jc-between w100"
      >
        <el-form-item label="指标">
          <el-select
            v-model="searchData.data.target"
            placeholder="Select"
            @change="changeTarget"
          >
            <el-option
              v-for="item in searchData.options.target"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <ww-chart-data :chart-data="state.chartData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, toRaw, computed } from 'vue'
import WwChartData from '@/components/Self/WwChart/WwChartData'
import { getProfitChart } from '@/api/overview'
import { toFixedFn } from '@/utils/format'
import { handleAjaxDataDelNoKeyFn } from '@/utils/new-format'
const props = defineProps({
  json: {
    require: true,
    default: {},
    type: Object
  }
})
const searchData = reactive({
  // 1转化
  // 2单价
  // 3收入
  // 4支出
  // 5毛利
  // 6毛利率
  // 7展示
  // 8点击
  // 9安装
  // 10CR
  // 11eCPC
  data: {
    target: 'cost'
  },
  options: {
    target: [
      {
        value: 'profit',
        label: '毛利'
      },
      {
        value: 'revenue',
        label: '收入'
      },
      {
        value: 'cost',
        label: '支出'
      },
      {
        value: 'profit_rate',
        label: '毛利率'
      },
    ]
  }
})
const state = reactive({
  data: props.json,
  baseCharData: {},
  chartData: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          show: true,
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      show: true,
      data: ['all']
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
        data: []
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '',
        type: 'line',
        stack: 'Total',
        emphasis: {
          focus: 'series'
        },
        data: []
      }
    ]
  }
})
watch(() => state.data, (newVal, oldVal) => {
  // console.log(newVal)
  console.warn('get chart data')
  init()
}, {
  // ! 此处如果加上会多执行一次
  // immediate: true,
  deep: true
})
const getChartTitle = () => {
  let obj = searchData.options.target.find(ele => {
    return ele.value === searchData.data.target
  })
  return obj?.label ?? ''
}
const rateArr = ['6']
const changeTarget = () => {
  handleSeriesData()
}
const handleSeriesData = () => {
  let target = searchData.data.target
  console.log(target)
  let dataArr = state.baseCharData[target] ?? []
  if (rateArr.includes(searchData.data.target.toString())) {
    let finallArr = dataArr.map(ele => {
      return toFixedFn(ele * 100, 2)
    })
    state.chartData.series[0].data = finallArr
  } else {
    let finallArr = dataArr.map(ele => {
      return toFixedFn(ele, 2)
    })
    state.chartData.series[0].data = finallArr
  }
}
const init = async () => {
  let ajaxData = {
    ...state.data.data
  }
  ajaxData = handleAjaxDataDelNoKeyFn(ajaxData)
  state.chartData.xAxis[0].data = []
  state.chartData.series[0].data = []
  const { data: charData } = await getProfitChart(ajaxData)
  console.log(charData)
  state.baseCharData = charData
  state.chartData.xAxis[0].data = charData?.date ?? []
  state.chartData.series[0].name = getChartTitle()
  handleSeriesData()
  
}
</script>

<style></style>
