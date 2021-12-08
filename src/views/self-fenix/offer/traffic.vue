<template>
  <div>
    <div class="flex jc-end">
      <el-button type="primary" @click="addTrafficFn">Add</el-button>
    </div>
    <el-table class="mt-10" :data="state.manage_traffic" style="width: 100%" border>
      <el-table-column label="Pub Name" align="center">
        <template #default="scope">
          <el-select filterable v-model="scope.row.pub" @change="selectPub(scope)" clearable placeholder="">
            <el-option
              v-for="item in options.pub"
              :key="item.id"
              :label="item.pub_name"
              :value="item.pub_name">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="Payout" align="center">
        <template #default="scope">
          <el-input
            v-model="scope.row.payout"
            type="number"
            min="0"
            placeholder="Please input"
            class="input-with-select"
          />
        </template>
      </el-table-column>
      <el-table-column label="Cap Daily" align="center">
        <template #default="scope">
          <el-input
            v-model="scope.row.cap_daily"
            type="number"
            min="0"
            placeholder="Please input"
            class="input-with-select"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="Operation"
        align="center"
        width="180px"
      >
        <template #default="scope">
          <div class="flex">
            <el-button class="mr-10" type="danger" icon="Delete" circle @click="deleteFn(scope)"></el-button>
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="2"
              class="mr-10"
              @change="changeStatusFn(scope)"
            />
            <el-button v-if="scope.row.pub_tracking_link" class="cp" type="primary" @click="copyFn(scope)">Copy</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, toRefs, computed, reactive, watch, onMounted } from 'vue'
import { clipboardFn } from '@/utils/clipboard'
import _ from 'lodash'
import { ApiGetAllManageSlot } from '@/api/fenix'
const props = defineProps({
  list: {
    require: true,
    default: [],
    type: Array
  },
  offer: {
    require: true,
    default: '',
    type: String
  }
})
const options = reactive({
  pub: [
    {
      id: '',
      pub_name: ''
    }
  ]
})
interface trafficObjType {
  pub: string
  slotid: string
  payout: number
  cap_daily: number
  pub_status: number
  pub_tracking_link: string
}
let state : any = reactive({
  manage_traffic: []
})
// let manage_traffic: any = computed(() => {
//   return props.list
// })
const trafficObj: trafficObjType = {
  pub: '',
  slotid: '',
  payout: 0,
  cap_daily: 0,
  pub_status: 2,
  pub_tracking_link: ''
}
const addTrafficFn = () => {
  state.manage_traffic.push(_.cloneDeep(trafficObj))
}
const deleteFn = (item: any) => {
  const index = item.$index
  state.manage_traffic.splice(index, 1)
}
const selectPub = (scope: any) => {
  const { row } = scope
  // 生成对应的pub_tracking_link
  const url = 'http://track.adsforward.com/api/track?offer={offer}&mid={slot}&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}'
  row.pub_tracking_link = url
  const slot: any = options.pub.find(ele => {
    return ele.pub_name === row.pub
  })
  row.slotid = slot.slot_id
  row.pub_status = slot.status
  row.pub_tracking_link = url.replace('{offer}', props.offer).replace('{slot}', slot.slot_id)
}
const copyFn = ({ row }: any) => {
  const { pub_tracking_link: text } = row
  clipboardFn(text)

}
const changeStatusFn = ({ row }: any) => {
  console.log(row)
}
const init = async () => {
  console.log('traffic init')
  const { data: slotList } = await ApiGetAllManageSlot()
  options.pub = slotList
}
const handleFn = (arr: any) => {
  arr.map((ele: any) => {
    if (ele.payout) {
      ele['payout'] = parseFloat(ele.payout)
    }
    if (ele.cap_daily) {
      ele['cap_daily'] = parseFloat(ele.cap_daily)
    }
    return ele
  })
  return arr
}
watch(() => props.list, (newVal, oldVal) => {
  state.manage_traffic = handleFn(newVal)
}, {
  immediate: true,
  deep: true
})

const emit = defineEmits(['kk', 'up'])
watch(() => state.manage_traffic, (newVal, oldVal) => {
  // console.log('emit')
  // let arr = handleFn(newVal)
  // emit('kk', arr)
}, {
  immediate: true,
  deep: true
})
onMounted(() => {
  init()
})
</script>
