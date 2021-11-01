<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>
<script lang="ts" setup>
import { getCurrentInstance, shallowRef, reactive, watch, onMounted, onActivated, onDeactivated } from 'vue'
let { proxy }: any = getCurrentInstance()
let chart: echarts.ECharts | null = null
import * as echarts from 'echarts'
// import resize from '@/components/Charts/mixins/resize'
import resizeFn from '@/utils/resize'
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
    type: Object,
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
