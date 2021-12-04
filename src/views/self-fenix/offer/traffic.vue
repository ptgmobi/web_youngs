<template>
  <div>
    <div class="flex jc-end">
      <el-button type="primary" @click="addTrafficFn">Add</el-button>
    </div>
    <el-table class="mt-10" :data="manage_traffic" style="width: 100%" border>
      <el-table-column label="Pub Name" align="center">
        <template #default="scope">
          <el-select filterable v-model="scope.row.pub" @change="selectPub(scope)" clearable placeholder="">
            <el-option
              v-for="item in options.pub"
              :key="item"
              :label="item"
              :value="item">
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
import { ref, reactive, watch } from 'vue'
import { clipboardFn } from '@/utils/clipboard'
import _ from 'lodash'
const props = defineProps({
  list: {
    require: true,
    default: [],
    type: Array
  }
})
const options = reactive({
  pub: []
})
interface trafficObjType {
  pub: string
  slotid: string
  payout: number | undefined
  cap_daily: number | undefined
  pub_status: number
  pub_tracking_link: string
}
let manage_traffic = ref(props.list)

const trafficObj: trafficObjType = {
  pub: '',
  slotid: '',
  payout: undefined,
  cap_daily: undefined,
  pub_status: 2,
  pub_tracking_link: ''
}
const addTrafficFn = () => {
  manage_traffic.value.push(_.cloneDeep(trafficObj))
}
const deleteFn = (item: any) => {
  const index = item.$index
  manage_traffic.value.splice(index, 1)
}
const selectPub = (scope: any) => {
  console.log(scope)
  // 生成对应的pub_tracking_link
  const url = 'http://track.adsforward.com/api/track?offer=6011690&mid=95108831&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}'
  const { row } = scope
  row.pub_tracking_link = url
  console.log(scope)
}
const copyFn = ({ row }: any) => {
  const { pub_tracking_link: text } = row
  clipboardFn(text)

}
const emit = defineEmits(['kk', 'up'])
watch(() => manage_traffic.value, (newVal, oldVal) => {
  emit('kk', newVal)
}, {
  immediate: true,
  deep: true
})
const changeStatusFn = ({ row }: any) => {
  console.log(row)
}
</script>
