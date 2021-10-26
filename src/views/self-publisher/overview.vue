<template>
  <div>
    <ww-chart-data class="mt-40" :chart-data="chartData" />
  </div>
</template>

<script lang="ts">
import WwChartData from '@/components/Self/WwChart/WwChartData'
import store from '@/store'
console.log(store.state.user.email)
export default {
  components: { WwChartData },
  data() {
    return {
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
    }
  },
  created() {
    console.log(this.$store.state.user.email)
  }
}
</script>

<style></style>
