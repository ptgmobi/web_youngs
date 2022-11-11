<template>
  <div>
    <!-- <div class="flex jc-end">
      <el-button
        type="primary"
        @click="addTrafficFn"
      >
        Add
      </el-button>
    </div> -->
    <el-table
      class="mt-10"
      :data="state.list"
      style="width: 100%"
      border
    >
      <el-table-column
        label="Adx Name"
        align="center"
      >
        <template #default="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="单价($/千次曝光)"
        align="center"
      >
        <template #default="scope">
          <el-input
            v-model="scope.row.price"
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
            v-model="scope.row.rate"
            type="number"
            min="0"
            step="0.001"
            placeholder="Please input"
            class="input-with-select"
          />
        </template>
      </el-table-column>
      <!-- <el-table-column
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
      </el-table-column> -->
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { clipboardFn } from '@/utils/clipboard'
import _ from 'lodash'
const props = defineProps({
  list: {
    require: true,
    default: () => {
      return []
    },
    type: Array
  }
})

let state: any = reactive({
  list: []
})

const init = async () => {
  console.log('adx init')
}

watch(
  () => props.list,
  (newVal, oldVal) => {
    state.list = newVal
  },
  {
    immediate: true,
    deep: true
  }
)

const emit = defineEmits(['kk', 'up'])

watch(
  () => state.list,
  (newVal, oldVal) => {
    let arr: any = []
    toRaw(newVal).map(ele => {
      let obj = {
        id: ele.id,
        name: ele.name,
        price: ele.price,
        rate: ele.rate
      }
      arr.push(obj)
    })
    emit('kk', arr)
  },
  {
    immediate: true,
    deep: true
  }
)
onMounted(() => {
  init()
})
</script>
