<template>
  <div>
    <div class="flex jc-end">
      <el-button
        type="primary"
        @click="addTrafficFn"
      >
        Add
      </el-button>
    </div>
    <el-table
      class="mt-10"
      :data="state.manage_traffic"
      style="width: 100%"
      border
    >
      <el-table-column
        label="Adx Name"
        align="center"
      >
        <template #default="scope">
          <el-select
            v-model="scope.row.pub"
            filterable
            clearable
            placeholder=""
            @change="selectPub(scope)"
          >
            <el-option
              v-for="item in options.pub"
              :key="item.id"
              :label="item.pub_name"
              :value="item.pub_name ?? item.id"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="单价($/前次曝光)"
        align="center"
      >
        <template #default="scope">
          <el-input
            v-model="scope.row.payout"
            type="number"
            min="0"
            step="0.001"
            placeholder="请输入单价"
            class="input-with-select"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="自动点击率%"
        align="center"
      >
        <template #default="scope">
          <el-input
            v-model="scope.row.cap_daily"
            type="number"
            min="0"
            step="0.001"
            placeholder="Please input"
            class="input-with-select"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="100px"
      >
        <template #default="scope">
          <div class="flex">
            <el-button
              class="mr-10"
              type="danger"
              icon="Delete"
              circle
              @click="deleteFn(scope)"
            ></el-button>
            <el-switch
              v-model="scope.row.pub_status"
              :active-value="1"
              :inactive-value="2"
              class="mr-10"
              @change="changeStatusFn(scope)"
            />
            <el-button
              v-if="scope.row.pub_tracking_link"
              class="cp"
              type="primary"
              @click="copyFn(scope)"
            >
              Copy
            </el-button>
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
    default: () => {
      return []
    },
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
const slot_obj: any = {
  '55527824': 0.1,
  '95108831': 0.1,
  '95846929': 0.005,
  '59845210': 0.005
}
interface trafficObjType {
  pub: string
  slotid: string
  payout: number | undefined
  cap_daily: number | undefined
  pub_status: number
  pub_tracking_link: string
}
let state: any = reactive({
  manage_traffic: []
})
// let manage_traffic: any = computed(() => {
//   return props.list
// })
const trafficObj: trafficObjType = {
  pub: '',
  slotid: '',
  payout: undefined,
  cap_daily: undefined,
  pub_status: 1,
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
  const url =
    'http://track.adsforward.com/api/track?offer={offer}&mid={slot}&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}'
  row.pub_tracking_link = url
  const slot: any = options.pub.find((ele) => {
    return ele.pub_name === row.pub
  })
  console.log(slot)
  row.slotid = slot.slot_id
  row.pub_status = slot.status
  row.pub_tracking_link = url.replace('{offer}', props.offer).replace('{slot}', slot.slot_id)
  // 针对个别的slot生成默认的payout
  if (slot_obj[slot.slot_id]) {
    row.payout = slot_obj[slot.slot_id]
  }
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
watch(
  () => props.list,
  (newVal, oldVal) => {
    state.manage_traffic = newVal
  },
  {
    immediate: true,
    deep: true
  }
)

const emit = defineEmits(['kk', 'up'])
watch(
  () => state.manage_traffic,
  (newVal, oldVal) => {
    // console.log('emit')
    // emit('kk', arr)
  },
  {
    immediate: true,
    deep: true
  }
)
onMounted(() => {
  init()
  addTrafficFn()
})
</script>
