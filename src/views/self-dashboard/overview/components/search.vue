<template>
  <div>
    <div class="white-bg control-box flex jc-between ai-start p0-0">
      <el-form :inline="true" :model="searchForm.data" class="flex jc-between ai-start w100">
        <div class="flex jc-start flex-wrap">
          <el-form-item label="广告主类型">
            <el-select v-model="searchForm.data.channel_type" class="search-con" clearable placeholder="搜索" @change="changeSelectChannelType">
              <el-option
                v-for="item in searchForm.options.channel_type"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="平台">
            <el-select v-model="searchForm.data.platform" class="search-con" clearable placeholder="搜索" filterable @change="changeSelectPlatform">
              <!-- <div class="flex jc-between p10 pt-0">
                <el-button type="primary" plain size="mini" @click="selectAllProduct()">全选</el-button>
                <el-button size="mini" type="danger" plain @click="unSelectedAllProduct()">清空</el-button>
              </div> -->
              <el-option
                v-for="(item, index) in searchForm.options.platform"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="国家">
            <el-select v-model="searchForm.data.country" class="search-con" clearable placeholder="搜索" filterable @change="changeSelectCountry">
              <el-option
                v-for="(item, index) in searchForm.options.country"
                :key="item"
                :label="item.toString()"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Channel">
            <el-select v-model="searchForm.data.channel" class="search-con" clearable placeholder="搜索" collapse-tags filterable @change="changeSelectChannel">
              <el-option
                v-for="(item, index) in searchForm.options.channel"
                :key="item"
                :label="item.toString()"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Pkg">
            <el-select v-model="searchForm.data.pkg" class="search-con" clearable placeholder="搜索" collapse-tags filterable @change="changeSelectPkg">
              <el-option
                v-for="(item, index) in searchForm.options.pkg"
                :key="item"
                :label="item.toString()"
                :value="item"
              />
            </el-select>
          </el-form-item>
        </div>
        <div>
          <div class="flex">
            <el-button type="primary" @click="handleSubmitSearch">查询</el-button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs, toRaw, onMounted } from 'vue'
import { getOverviewSearchForCountry, getOverviewSearchForChannel, getOverviewSearchForPkg } from '@/api/overview'
import _ from 'lodash'
const baseData: any = {
  channel_type: '',
  platform: '',
  channel: '',
  country: '',
  pkg: ''
}
const searchForm = reactive({
  options: {
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
      },
      {
        value: 6,
        label: 'Yohoads'
      }
    ],
    platform: [
      {
        value: 1,
        label: 'Android'
      },
      {
        value: 2,
        label: 'iOS'
      }
    ],
    country: [
      {
        value: '',
        label: ''
      }
    ],
    channel: [
      {
        label: '',
        value: ''
      }
    ],
    pkg: [
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
  const [country, channel, pkg] = res
  searchForm.options.country = country.data
  searchForm.options.channel = channel.data
  searchForm.options.pkg = pkg.data
}
// 广告主类型
const changeSelectChannelType = () => {
  // changeSelectPlatform()
}
// 平台
const changeSelectPlatform = () => {
  // changeSelectCountry()
}
// 国家
const changeSelectCountry = () => {
  // changeSelectChannel()
}
// channel
const changeSelectChannel = () => {
  // changeSelectPkg()
}
// pkg
const changeSelectPkg = () => {
  
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
