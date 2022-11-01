<template>
  <div class="mb-10 search-box flex jc-between ai-start">
    <div class="button-box"></div>
    <el-form
      v-model="searchForm"
      :inline="true"
      class="flex w100 ai-start jc-end"
    >
      <!-- 广告主 -->
      <el-form-item label="">
        <el-select
          v-model="searchForm.adv"
          filterable
          clearable
          placeholder="请选择广告主"
        >
          <el-option
            v-for="item in options.adv"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <!-- 日期 -->
        <el-date-picker
          v-model="searchForm.date"
          class="mr-10 mb-10"
          type="daterange"
          unlink-panels
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :shortcuts="shortcuts"
          :clearable="false"
        ></el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { getSectionTime, getSectionAnyTime, choiceDefaultProduct } from '@/utils/format'
let searchForm = reactive({
  adv: '',
  date: getSectionTime(6, 'day')
})

let shortcuts = reactive([
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
])

let options = reactive({
  adv: []
})
</script>
<style lang="scss">
.search-box{
  border-bottom: 1px solid #ccc;
}
</style>
