<template>
  <div
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>
<script lang="ts">
import * as echarts from 'echarts'
import resize from '@/components/Charts/mixins/resize'
let chart = null
export default {
  mixins: [resize],
  props: {
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
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeUnmount() {
    if (!chart) {
      return
    }
    chart.dispose()
    chart = null
  },
  methods: {
    initChart() {
      chart = echarts.init(this.$el)
      this.setOptions(this.chartData)
    },
    setOptions(data) {
      if (data && chart && data.series) {
        chart.setOption(data, true)
      }
    }
  }
}
</script>
