<template>
  <div class="search-box">
    <div class=" mb-10">
      <el-date-picker
        v-model="search.date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
    </div>
    <div class=" mb-10">
      <el-checkbox-group v-model="search.checkList">
        <el-checkbox label="Date"></el-checkbox>
        <el-checkbox label="Hour"></el-checkbox>
        <el-checkbox label="Country"></el-checkbox>
        <el-checkbox label="Platform"></el-checkbox>
        <el-checkbox label="Pkg"></el-checkbox>
        <el-checkbox label="Offer"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="flex jc-between">
      <div class="flex jc-start mb-10">
        <el-select v-model="search.filter.Country" filterable placeholder="Country" class="mr-10">
          <el-option
            v-for="item in options.Country"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="search.filter.Country" filterable placeholder="Platform" class="mr-10">
          <el-option
            v-for="item in options.Country"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="search.filter.Country" filterable placeholder="Pkg" class="mr-10">
          <el-option
            v-for="item in options.Country"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="search.filter.Country" filterable placeholder="Offer" class="mr-10">
          <el-option
            v-for="item in options.Country"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" @click="searchFun">Run</el-button>
    </div>
  </div>
  <!-- all -->
  <el-table :data="tableData.all" border style="width: 100%" class="mb-10">
    <el-table-column prop="impression" label="Impression" />
    <el-table-column prop="click" label="Click" />
    <el-table-column prop="revenue" label="Revenue($)" />
    <el-table-column prop="conversion" label="Conversion" />
  </el-table>
  <div class="mb-10">
    <el-button icon="el-icon-download" type="primary">Export</el-button>
  </div>
  <!-- one -->
  <el-table :data="tableData.one" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="hour" label="Hour" width="100" />
    <el-table-column prop="country" label="Country" width="100" />
    <el-table-column prop="platform" label="Platform" width="100" />
    <el-table-column prop="pkg" label="Pkg" width="100" />
    <el-table-column prop="offer" label="Offer" width="100" />
    <el-table-column prop="impression" label="Impression" width="100" />
    <el-table-column prop="click" label="Click" width="100" />
    <el-table-column prop="cvr" label="Cvr" width="100" />
    <el-table-column prop="conversion" label="Conversion" width="100" />
    <el-table-column prop="revenue" label="Revenue" width="100" />
  </el-table>
</template>
<script setup lang="ts">
import { getCurrentInstance, reactive } from 'vue'
let { proxy }: any = getCurrentInstance()
const end = new Date()
const start = new Date()
start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
// options
let options = {
  Country: [
    {
      value: '选项1',
      label: '黄金糕',
    },
    {
      value: '选项2',
      label: '双皮奶',
    },
    {
      value: '选项3',
      label: '蚵仔煎',
    },
    {
      value: '选项4',
      label: '龙须面',
    },
    {
      value: '选项5',
      label: '北京烤鸭',
    }
  ]
}
let search = reactive({
  date: [start, end],
  checkList: ['Country'],
  filter: {
    Country: '',
    Platform: '',
    Pkg: '',
    Offer: ''
  }

})
// search
let searchFun = () => {
  console.log(123)
}
// table
let tableData = {
  all: [
    {
      impression: 0,
      click: 1200,
      revenue: '1.259%',
      conversion: 15,
    }
  ],
  one: [
    {
      date: '20211018',
      hour: '23',
      country: 'IN',
      platform: 'Android',
      pkg: 'in.mohalla.sha',
      offer: '6011101',
      impression: 0,
      click: 1200,
      cvr: '1.259%',
      conversion: 15,
      revenue: 0.15
    }
  ]
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    //margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
