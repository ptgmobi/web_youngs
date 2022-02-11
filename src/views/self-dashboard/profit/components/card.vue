<template>
  <div>
    <div class="flex flex-wrap jc-between">
      <el-card class="box-card m10" v-for="(item, key) in state.titleMap">
        <div class="flex jc-start">
          <h3>{{state.titleMap[key]}}</h3>
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
    default: {},
    type: Object
  }
})
const titleMap = {
  profit: '毛利合计',
  revenue: '收入合计',
  cost: '支出合计',
  rate: '毛利率',
}
const baseData: any = {}
const state = reactive({
  baseData: props.json,
  data: baseData,
  titleMap
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
