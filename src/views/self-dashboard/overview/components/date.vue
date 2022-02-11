<template>
  <div class="control-box mt-20">
    <el-form
      :inline="true"
      :model="searchForm.data"
      class="flex jc-between"
    >
      <div class="flex jc-start">
        <el-form-item label="日期选择">
          <el-date-picker
            v-model="searchForm.data.search.date"
            class="mr-10 mb-10"
            type="daterange"
            unlink-panels
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :shortcuts="searchForm.shortcuts"
            :clearable="false"
          ></el-date-picker>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, getCurrentInstance, computed, onMounted, watch, ref } from 'vue'
import { getSectionTime, getSectionAnyTime, choiceDefaultProduct } from '@/utils/format'
let searchForm: any = reactive({
  shortcuts: [
    {
      text: '今天',
      value: getSectionTime(0, 'day')
    },
    {
      text: '昨天',
      value: () => {
        return getSectionAnyTime(1, 1, 'day')
      }
    },
    {
      text: '最近7天',
      value: () => {
        return getSectionTime(6, 'day')
      }
    },
    {
      text: '最近30天',
      value: () => {
        return getSectionTime(29, 'day')
      }
    }
  ],
  data: {
    search: {
      date: getSectionTime(6, 'day')
    }
  }
})
const emit = defineEmits(['emitParent'])
// 搜索
const handleSubmitSearch = () => {
  console.warn('set search date')
  emit('emitParent', [...searchForm.data.search.date])
}
watch(() => searchForm.data.search.date, (newVal, oldVal) => {
  handleSubmitSearch()
}, {
  immediate: true
})
</script>
