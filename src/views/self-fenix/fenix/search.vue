<template>
  <el-dialog v-model="dialogTableVisible" :title="T">
    <el-input v-model="search" placeholder="Please input" />
    <el-table :data="gridData" border class="mt-10">
      <el-table-column
        property="id"
        label="ID"
        align="center"
      ></el-table-column>
      <el-table-column prop="email" label="Email" align="center" />
      <el-table-column prop="user_name" label="User Name" align="center" />
      <el-table-column
        label="Operation"
        align="center"
      >
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
const props = defineProps({
  dialogTableVisible: {
    require: true,
    default: '',
    type: String
  }
})
const title = ref('新建')
const search = ref('')
const gridDataDefault = [
  {
    id: 66
  }
]
let state = reactive({
  gridData: gridDataDefault
})
let T = title.value
let { gridData } = toRefs(state)
watch(search, (nelVal, oldVal) => {
  // 调用搜索函数
  debounceSearchFn()
})
const searchFn = () => {
  console.log('search')
}
const debounceSearchFn = _.debounce(searchFn, 1000)
const emit = defineEmits(['emitParent'])
const addFn = ({ row }: any) => {
  emit('emitParent', row)
}
</script>
