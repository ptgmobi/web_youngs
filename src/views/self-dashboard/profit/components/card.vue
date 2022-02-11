<template>
  <div>
    <div class="flex flex-wrap jc-between">
      <el-card
        v-for="(item, key) in state.titleMap"
        class="box-card m10"
      >
        <div class="flex jc-between">
          <h3>{{ state.titleMap[key] }}</h3>
          <h2 class="color_primary" v-if="state.groupVal.includes(key)">$ {{ state.data[key] }}</h2>
          <h2 class="color_primary" v-if="state.groupRate.includes(key)">{{ toFixedFn(state.data[key] * 100) }} %</h2>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted, watch } from 'vue'
import { getProfitCard } from '@/api/overview'
import { toFixedFn } from '@/utils/format'
import { handleAjaxDataDelNoKeyFn } from '@/utils/new-format'
const props = defineProps({
  json: {
    require: true,
    default: {},
    type: Object
  }
})
const titleMap = {
  profit: '毛利合计',
  revenue: '收入合计',
  cost: '支出合计',
  profit_rate: '毛利率',
}
const baseData: any = {}
const state = reactive({
  baseData: props.json,
  data: baseData,
  titleMap,
  groupVal: ['profit', 'revenue', 'cost'],
  groupRate: ['profit_rate']
})
const handleValToRateFn = (val) => {
  let absN = Math.abs(val) * 100
  return `${toFixedFn(absN, 2)}%`
}
const init = async () => {
  let ajaxData = {
    ...state.baseData.data
  }

  ajaxData = handleAjaxDataDelNoKeyFn(ajaxData)
  const { data: cardData } = await getProfitCard(ajaxData)
  if (Array.isArray(cardData) && cardData.length !== 0) {
    state.data = cardData[0]
  } else {
    for (const key in state.data) {
      if (Object.prototype.hasOwnProperty.call(state.data, key)) {
        state.data[key] = 0
      }
    }
  }
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
<style lang="scss" scoped>
.box-card{
  width: 240px;
  height: 60px;
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
