<template>
  <el-dialog :title="T" width="80%">
    <el-input v-model="search" placeholder="Please input" />
    <el-table :data="gridData" border class="mt-10">
      <el-table-column property="uid" label="ID" align="center"></el-table-column>
      <el-table-column prop="slot_id" label="Slot ID" align="center" />
      <el-table-column prop="slot_name" label="Slot Name" align="center" />
      <el-table-column prop="email" label="Email" align="center" />
      <el-table-column prop="username" label="User Name" align="center" />
      <el-table-column label="Operation" align="center">
        <template #default="scope">
          <el-button type="primary" @click="addFn(scope)">点击添加</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, reactive, toRefs, watch } from 'vue'
import _ from 'lodash'
import { messageFun } from '@/utils/message'
import { ApiFenixFenixSearch, ApiFenixFenixCreate } from '@/api/fenix'
const title = ref('新建')
const search = ref('')
const gridDataDefault: Array<any> = []
const state = reactive({
  gridData: gridDataDefault
})
const { gridData } = toRefs(state)
let T = title.value
watch(search, (nelVal, oldVal) => {
  // 调用搜索函数
  debounceSearchFn()
})
const searchFn = async () => {
  console.log('search')
  const { data: userList } = await ApiFenixFenixSearch(search.value)
  state.gridData = userList
}
const debounceSearchFn = _.debounce(searchFn, 1000)
const emit = defineEmits(['emitParent'])
const addFn = async ({ row }: any) => {
  emit('emitParent', row)
  const ajaxData = {
    ...row
  }
  const res = await ApiFenixFenixCreate(ajaxData)
  messageFun(res)
}
</script>
