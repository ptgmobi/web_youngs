<template>
  <div>
    <div class="flex flex-wrap jc-between">
      <el-card
        v-for="(item, key) in state.data"
        class="box-card m10"
      >
        <template #header>
          <div class="card-header">
            <h3>{{ state.titleMap[key] }}</h3>
          </div>
        </template>
        <div>
          <div v-if="state.titleGroup.includes(key.toString())">
            <h4>{{ item.date }}</h4>
            <div class="mt-10 mb-10">
              <!-- <h2 v-if="item.hasOwnProperty('revenue')">$ {{item.revenue}}</h2>
              <h2 v-if="item.hasOwnProperty('rate')">{{item.rate * 100}} %</h2> -->
              <h2 v-if="key.toString() !== 'yesterday_gross_margin'">
                $ {{ item.revenue }}
              </h2>
              <h2 v-if="key.toString() === 'yesterday_gross_margin'">
                {{ toFixedFn(item.revenue * 100, 2) }} %
              </h2>
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
                  <span v-else></span>
                  <span class="value-val">{{ handleValToRateFn(item.dod) }}</span>
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
                  <span v-else></span>
                  <span class="value-val">{{ handleValToRateFn(item.wow) }}</span>
                </span>
              </div>
            </div>
            <div class="valueBox">
              <div class="value-box">
                <span>7日均:</span>
                <span v-if="key.toString() !== 'yesterday_gross_margin'">{{ item.d7 }}</span>
                <span v-if="key.toString() === 'yesterday_gross_margin'">{{ handleValToRateFn(item.d7) }}</span>
              </div>
            </div>
            <div class="valueBox">
              <div class="value-box">
                <span>30日均:</span>
                <span v-if="key.toString() !== 'yesterday_gross_margin'">{{ item.d30 }}</span>
                <span v-if="key.toString() === 'yesterday_gross_margin'">{{ handleValToRateFn(item.d30) }}</span>
              </div>
            </div>
          </div>
          <div v-if="state.titleGroup1.includes(key.toString())">
            <h4>{{ item.date }}</h4>
            <div
              class="mt-10 mb-10"
              style="height: 21px;"
            >
            </div>
            <div class="valueBox">
              <div class="value-box">
                <span>收入:</span>
                <span class="value-right">
                  <span class="value-val">{{ item.revenue }}</span>
                </span>
              </div>
            </div>
            <div class="valueBox">
              <div class="value-box">
                <span>支出:</span>
                <span class="value-right">
                  <span class="value-val">{{ item.cost }}</span>
                </span>
              </div>
            </div>
            <div class="valueBox">
              <div class="value-box">
                <span>毛利:</span>
                <span class="value-right">
                  <span class="value-val">{{ item.profit }}</span>
                </span>
              </div>
            </div>
            <div class="valueBox">
              <div class="value-box">
                <span>日均毛利:</span>
                <span class="value-right">
                  <span class="value-val">{{ item.avg_profit }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted, watch } from 'vue'
import { getOverviewCard } from '@/api/overview'
import { toFixedFn } from '@/utils/format'
import { handleAjaxDataDelNoKeyFn } from '@/utils/new-format'
const props = defineProps({
  json: {
    require: true,
    default: () => {
      return {}
    },
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
const baseData: any = {}
const state = reactive({
  baseData: props.json,
  data: baseData,
  titleMap,
  titleGroup,
  titleGroup1
})
const handleValToRateFn = (val) => {
  let absN = Math.abs(val) * 100
  return `${toFixedFn(absN, 2)}%`
}
const init = async () => {
  let ajaxData = {
    ...state.baseData.data
  }
  delete ajaxData.date

  ajaxData = handleAjaxDataDelNoKeyFn(ajaxData)
  const { data: cardData } = await getOverviewCard(ajaxData)
  state.data = cardData
}
watch(() => state.baseData, (newVal, oldVal) => {
  // console.log(newVal)
  console.warn('get card data')
  init()
}, {
  // ! 此处如果加上会多执行一次
  // immediate: true,
  deep: true
})
onMounted(() => {
  // console.log(props.json)
})
</script>
<style lang="scss">
.box-card{
  width: 240px;
  height: 280px;
  .valueBox{
    overflow: hidden;
    .value-box{
      margin: 8px 0;
      display: flex;
      justify-content: space-between;
      .value-right{
        width: 120px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .value-val{
          width: 100%;
          margin-left: 10px;
          text-align: right;
          overflow: hidden;
        }
      }
    }
  }
  
}
</style>
