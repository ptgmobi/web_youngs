<template>
  <div>
    <div class="white-bg control-box flex jc-between ai-start p0-0">
      <el-form :inline="true" :model="searchForm.data" class="flex jc-between w100">
        <div class="flex jc-start flex-wrap">
          <el-form-item label="广告主类型">
            <el-select v-model="searchForm.data.type" class="search-con" multiple placeholder="搜索" @change="changeSelectType">
              <el-option
                v-for="item in searchForm.options.type"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="平台">
            <el-select v-model="searchForm.data.platform" class="search-con" placeholder="搜索" multiple filterable @change="changeSelectPlatform">
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
            <el-select v-model="searchForm.data.country" class="search-con" placeholder="搜索" multiple filterable @change="changeSelectCountry">
              <el-option
                v-for="(item, index) in searchForm.options.country"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Channel">
            <el-select v-model="searchForm.data.channel" class="search-con" placeholder="搜索" collapse-tags multiple filterable @change="changeSelectChannel">
              <el-option
                v-for="(item, index) in searchForm.options.channel"
                :key="index"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Pkg">
            <el-select v-model="searchForm.data.pkg" class="search-con" placeholder="搜索" collapse-tags multiple filterable @change="changeSelectPkg">
              <el-option
                v-for="(item, index) in searchForm.options.pkg"
                :key="index"
                :label="item.label"
                :value="item.value"
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
import _ from 'lodash'
const baseData: any = {
  type: [],
  platform: [],
  channel: [],
  country: [],
  pkg: []
}
const searchForm = reactive({
  options: {
    type: [
      {
        value: 1,
        label: '直客'
      },
      {
        value: 2,
        label: 'API'
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
const changeSelectType = () => {
  
}
const changeSelectPlatform = () => {
  
}
const changeSelectCountry = () => {
  
}
const changeSelectChannel = () => {

}
const changeSelectPkg = () => {
  
}
const emit = defineEmits(['emitParent'])
// 搜索
const handleSubmitSearch = () => {
  emit('emitParent', _.cloneDeep(toRaw(searchForm.data)))
}
onMounted(() => {
  handleSubmitSearch()
})
</script>
<style lang="scss">
.search-con{
  width: 120px;
}

</style>
