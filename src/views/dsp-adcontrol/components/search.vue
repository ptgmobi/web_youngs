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
            v-for="item in options.advertiser"
            :key="item.adv_id"
            :label="item.name"
            :value="item.adv_id"
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
import { ApiGetAdvertiserList } from '@/api/dsp-advertiser'

const emit = defineEmits(['up'])
let searchForm = reactive({
  adv: void 0,
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
  advertiser: [{
    adv_id: '',
    name: ''
  }]
})

const getConfig = async () => {
  const {data: {data: result }} = await ApiGetAdvertiserList({
    page: 1,
    limit: 10000
  })
  options.advertiser = result
}

// watch(() => searchForm.adv, (newVal, oldVal) => {
//   emit('up', searchForm)
// }, {
//   immediate: true,
//   deep: true
// })

watchEffect(() => {
  let adv = searchForm.adv
  let date = toRaw(searchForm.date)
  emit('up', {
    adv,
    date
  })
})

// const changeSelectAdv = (data) => {
//   emit('up', data)
// }

const init = async () => {
  await getConfig()
}

onMounted(() => {
  init()
})
</script>
<style lang="scss">
.search-box{
  border-bottom: 1px solid #ccc;
}
</style>
