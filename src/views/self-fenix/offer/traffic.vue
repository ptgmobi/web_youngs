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
        width="60px"
      >
        <template #default="scope">
          <el-button type="danger" icon="Delete" circle @click="deleteFn(scope)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
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
  payout: string
  cap_daily: string
  pub_status: string
}
let manage_traffic = ref(props.list)

const trafficObj: trafficObjType = {
  pub: '',
  slotid: '',
  payout: '',
  cap_daily: '',
  pub_status: ''
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
}
const emit = defineEmits(['kk', 'up'])
watch(() => manage_traffic.value, (newVal, oldVal) => {
  emit('kk', newVal)
}, {
  immediate: true,
  deep: true
})
</script>
