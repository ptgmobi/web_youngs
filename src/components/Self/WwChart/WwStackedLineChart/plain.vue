<template>
  <div class="ww-chart-box">
    <!-- chart -->
    <ww-chart-data class="mt-40" :chart-data="chartData" :color="color" />
  </div>
</template>
<script>
import { WwStackedLineChartFn, handleChartArr } from '@/utils/echarts'
import WwChartData from '@/components/Self/WwChart/WwChartData'
export default {
  name: 'WwPlainStackedLineChart',
  components: {
    WwChartData
  },
  props: {
    baseChartData: {
      type: Object,
      require: true,
      default() {
        return []
      }
    },
    xAxisName: {
      type: String,
      require: true,
      default() {
        return 'date'
      }
    },
    formatTooltipFn: {
      type: Function,
      require: false,
      default(params) {
        return params.value
      }
    },
    color: {
      type: Array,
      require: false,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    // chart
    chartData() {
      // 根据选择的name，选择对应的数据
      const data = handleChartArr('value', this.baseChartData, this.xAxisName)
      return WwStackedLineChartFn(data, this.formatTooltipFn, {
        color: this.color
      })
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
