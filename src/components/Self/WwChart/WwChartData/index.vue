<template>
  <div
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>
<script lang="ts" setup>
import { getCurrentInstance, shallowRef, reactive, watch, onMounted, onActivated, onDeactivated, PropType } from 'vue'
let { proxy }: any = getCurrentInstance()
let chart: echarts.ECharts | undefined = undefined
import * as echarts from 'echarts'
// import resize from '@/components/Charts/mixins/resize'
import resizeFn from '@/utils/resize'
interface chartDataType {
  grid: any
  legend: any
  series: any
  tooltip: any
  xAxis: any
  yAxis: any
}
const props = defineProps({
  className: {
    type: String,
    default: 'chart'
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '350px'
  },
  autoResize: {
    type: Boolean,
    default: true
  },
  chartData: {
    type: Object as PropType<chartDataType>,
    required: true
  }
})
watch(props.chartData, (newVal, oldVal) => {
  setOptions(newVal)
})
const setOptions = (options: any) => {
  if (options && chart && options.series) {
    chart.setOption(options, true)
  }
}
const initChart = () => {
  chart = echarts.init(proxy.$el)
  setOptions(props.chartData)
}

onMounted(() => {
  initChart()
  const { initListener } = resizeFn(chart)
  initListener()
})
</script>
