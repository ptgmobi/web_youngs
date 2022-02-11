<template>
  <div>
    <div class="white-bg control-box flex jc-between ai-start p0-0">
      <el-form
        :inline="true"
        :model="searchForm.data"
        class="flex jc-between ai-start w100"
      >
        <div class="flex jc-start flex-wrap ai-start">
          <el-form-item label="日期选择">
            <el-date-picker
              v-model="searchForm.data.date"
              class="search-con"
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
          <el-form-item label="分成方法">
            <el-select
              v-model="searchForm.data.adtype"
              class="search-con"
              clearable
              placeholder="搜索"
              @change="changeSelectFn"
            >
              <el-option
                v-for="item in searchForm.options.adtype"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="业务类型">
            <el-select
              v-model="searchForm.data.channel_type"
              class="search-con"
              clearable
              placeholder="搜索"
              filterable
              @change="changeSelectFn"
            >
              <!-- <div class="flex jc-between p10 pt-0">
                <el-button type="primary" plain size="mini" @click="selectAllProduct()">全选</el-button>
                <el-button size="mini" type="danger" plain @click="unSelectedAllProduct()">清空</el-button>
              </div> -->
              <el-option
                v-for="(item, index) in searchForm.options.channel_type"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="User Name">
            <el-select
              v-model="searchForm.data.user_name"
              class="search-con"
              clearable
              placeholder="搜索"
              filterable
              @change="changeSelectFn"
            >
              <el-option
                v-for="(item, index) in searchForm.options.user_name"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Slot">
            <el-select
              v-model="searchForm.data.slot"
              class="search-con"
              clearable
              placeholder="搜索"
              collapse-tags
              filterable
              @change="changeSelectFn"
            >
              <el-option
                v-for="(item, index) in searchForm.options.slot"
                :key="item"
                :label="item.toString()"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="国家">
            <el-select
              v-model="searchForm.data.country"
              class="search-con"
              clearable
              placeholder="搜索"
              collapse-tags
              filterable
              @change="changeSelectFn"
            >
              <el-option
                v-for="(item, index) in searchForm.options.country"
                :key="item"
                :label="item.toString()"
                :value="item"
              />
            </el-select>
          </el-form-item>
        </div>
        <div>
          <div class="flex">
            <el-button
              type="primary"
              @click="handleSubmitSearch"
            >
              查询
            </el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs, toRaw, onMounted } from 'vue'
import { getOverviewSearchForCountry, getOverviewSearchForChannel, getOverviewSearchForPkg } from '@/api/overview'
import { getSectionTime, getSectionAnyTime, choiceDefaultProduct } from '@/utils/format'
import _ from 'lodash'
const baseData: any = {
  adtype: '',
  channel_type: '',
  use_name: '',
  slot: '',
  country: '',
  date: []
}
const searchForm = reactive({
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
  options: {
    adtype: ['ssp', 'fenix'],
    channel_type: [
      {
        value: 1,
        label: '代理'
      },
      {
        value: 2,
        label: 'API'
      },
      {
        value: 3,
        label: '直客'
      }
    ],
    country: [
      {
        value: '',
        label: ''
      }
    ],
    user_name: [
      {
        label: '',
        value: ''
      }
    ],
    slot: [
      {
        value: '',
        label: ''
      }
    ]
  },
  data: baseData
})
const getConfig = async () => {
  const res = await Promise.all([await getOverviewSearchForCountry(), getOverviewSearchForChannel(), getOverviewSearchForPkg()])
  console.log(res)
}

const changeSelectFn = () => {

}

const emit = defineEmits(['emitParent'])
// 搜索
const handleSubmitSearch = () => {
  console.warn('set search data')
  emit('emitParent', _.cloneDeep(toRaw(searchForm.data)))
}
onMounted(() => {
  getConfig()
  handleSubmitSearch()
})
</script>
<style lang="scss">

</style>
