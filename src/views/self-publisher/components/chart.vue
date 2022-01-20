<template>
  <div>
    <div>
      <el-form :inline="true" :model="searchData.data" class="flex jc-between w100">
        <el-form-item label="指标">
          <el-select v-model="searchData.data.target" placeholder="Select">
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
import { reactive, watch, toRaw } from 'vue'
import WwChartData from '@/components/Self/WwChart/WwChartData'
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
    target: 5
  },
  options: {
    target: [
      {
        value: 1,
        label: '转化'
      },
      {
        value: 2,
        label: '单价'
      },
      {
        value: 3,
        label: '收入'
      },
      {
        value: 4,
        label: '支出'
      },
      {
        value: 5,
        label: '毛利'
      },
      {
        value: 6,
        label: '毛利率'
      },
      {
        value: 7,
        label: '展示'
      },
      {
        value: 8,
        label: '点击'
      },
      {
        value: 9,
        label: '安装'
      },
      {
        value: 10,
        label: 'CR'
      },
      {
        value: 11,
        label: 'eCPC'
      },
    ]
  }
})
const state = reactive({
  data: props.json,
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
      show: false,
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
        data: ['1', '2', '3', '4', '5', '6']
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
        emphasis: {
          focus: 'series'
        },
        data: [10, 20, 30, 40, 50, 60]
      }
    ]
  }
})
watch(() => state.data, (newVal, oldVal) => {
  // console.log(newVal)
  console.log('get chart data')
  init()
}, {
  // ! 此处如果加上会多执行一次
  // immediate: true,
  deep: true
})
const init = () => {
  const ajaxData = {
    ...state.data.data,
    ...searchData.data
  }
  console.log(ajaxData)
}
</script>

<style></style>
