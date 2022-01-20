<template>
  <div>
    <div class="flex flex-wrap">
      <el-card class="box-card m10" v-for="(item, key) in state.data">
        <template #header>
          <div class="card-header">
            <h3>{{state.titleMap[key]}}</h3>
          </div>
        </template>
        <div v-if="state.titleGroup.includes(key.toString())">
          <h4>{{item.date}}</h4>
          <div class="mt-10 mb-10">
            <h2 v-if="item.hasOwnProperty('revenue')">$ {{item.revenue}}</h2>
            <h2 v-if="item.hasOwnProperty('rate')">{{item.rate * 100}} %</h2>
          </div>
          <div class="valueBox">
            <div class="value-box">
              <span>日环比:</span>
              <span class="value-right">
                <span v-if="item.dod < 0">
                  <el-icon class="el-svg-icon color_down">
                    <caret-bottom />
                  </el-icon>
                </span>
                <span v-if="item.dod > 0">
                  <el-icon class="el-svg-icon color_up">
                    <caret-top />
                  </el-icon>
                </span>
                <span class="value-val">{{handleValFn(item.dod)}}</span>
              </span>
            </div>
          </div>
          <div class="valueBox">
            <div class="value-box">
              <span>周同比:</span>
              <span class="value-right">
                <span v-if="item.wow < 0">
                  <el-icon class="el-svg-icon color_down">
                    <caret-bottom />
                  </el-icon>
                </span>
                <span v-if="item.wow > 0">
                  <el-icon class="el-svg-icon color_up">
                    <caret-top />
                  </el-icon>
                </span>
                <span class="value-val">{{handleValFn(item.wow)}}</span>
              </span>
            </div>
          </div>
          <div class="valueBox">
            <div class="value-box">
              <span>7日均:</span>
              <span>{{item.d7}}</span>
            </div>
          </div>
          <div class="valueBox">
            <div class="value-box">
              <span>30日均:</span>
              <span>{{item.d30}}</span>
            </div>
          </div>
        </div>
        <div v-if="state.titleGroup1.includes(key.toString())">
          <h4>{{item.date}}</h4>
          <div class="mt-10 mb-10" style="height: 21px;">
            
          </div>
          <div class="valueBox">
            <div class="value-box">
              <span>收入:</span>
              <span class="value-right">
                <span class="value-val">{{item.revenue}}</span>
              </span>
            </div>
          </div>
          <div class="valueBox">
            <div class="value-box">
              <span>支出:</span>
              <span class="value-right">
                <span class="value-val">{{item.cost}}</span>
              </span>
            </div>
          </div>
          <div class="valueBox">
            <div class="value-box">
              <span>毛利:</span>
              <span class="value-right">
                <span class="value-val">{{item.profit}}</span>
              </span>
            </div>
          </div>
          <div class="valueBox">
            <div class="value-box">
              <span>日均毛利:</span>
              <span class="value-right">
                <span class="value-val">{{item.profit_d}}</span>
              </span>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
const props = defineProps({
  json: {
    require: true,
    default: {},
    type: Object
  }
})
const titleGroup: Array<string> = ['yesterday_revenue', 'yesterday_gross_profit', 'yesterday_gross_margin']
const titleGroup1: Array<string> = ['accumulated_month', 'accumulated_quarter']
const titleMap = {
  yesterday_revenue: '昨日收入',
  yesterday_gross_profit: '昨日毛利',
  yesterday_gross_margin: '昨日毛利率',
  accumulated_month: '本月累计',
  accumulated_quarter: '本季度累计'
}
const baseData: any = {
  // 昨日收入
  yesterday_revenue: {
    date: '2021-01-13',
    revenue: 81234.88,
    dod: -0.1423,
    wow: 1.4231,
    d7: 80000,
    d30: 70000,
  },
  // 昨日毛利
  yesterday_gross_profit: {
    date: '2021-01-13',
    revenue: 81234.88,
    dod: -0.1423,
    wow: 1.4231,
    d7: 80000,
    d30: 70000,
  },
  // 昨日毛利率
  yesterday_gross_margin: {
    date: '2021-01-13',
    rate: 0.8613,
    dod: -0.1423,
    wow: 1.4231,
    d7: 80000,
    d30: 70000,
  },
  // 本月累计
  accumulated_month: {
    date: '2021-01-13',
    revenue: 240000,
    cost: 32000,
    profit: 208000,
    profit_d: 70000
  },
  // 本季度累计
  accumulated_quarter: {
    date: '2021-01-13',
    revenue: 240000,
    cost: 32000,
    profit: 208000,
    profit_d: 70000
  }
}
const state = reactive({
  data: baseData,
  titleMap,
  titleGroup,
  titleGroup1
})
const handleValFn = (val) => {
  return `${Math.abs(val) * 100}%`
}
onMounted(() => {
  console.log(props.json)
})
</script>
<style lang="scss">
.box-card{
  width: 200px;
  height: 280px;
  .valueBox{
    overflow: hidden;
    .value-box{
      margin: 8px 0;
      display: flex;
      justify-content: space-between;
      .value-right{
        width: 80px;
        display: flex;
        justify-content: space-between;
        .value-val{
          margin-left: 10px;
        }
      }
    }
  }
  
}
</style>
