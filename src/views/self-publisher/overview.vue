<template>
  <div>
    <ww-chart-data class="mt-40" :chart-data="data.chartData" />
    <DD :count="data.count" @kk="handleClick" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import WwChartData from '@/components/Self/WwChart/WwChartData'
import DD from './test'

const data = reactive({
  count: 666,
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
      data: ['全部渠道']
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
        data: [null]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '全部渠道',
        type: 'line',
        emphasis: {
          focus: 'series'
        },
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  }
})
const handleClick = (data: string) => {
  console.log(data)
}
</script>

<style></style>
