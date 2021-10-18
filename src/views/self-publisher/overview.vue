<template>
  <div class="search-box">
    <div class=" mb-10">
      <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
    </div>
    <div class=" mb-10">
      <el-checkbox-group v-model="checkList">
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
        <el-select v-model="filter.Country" filterable placeholder="Country" class="mr-10">
          <el-option
            v-for="item in options.Country"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="filter.Country" filterable placeholder="Platform" class="mr-10">
          <el-option
            v-for="item in options.Country"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="filter.Country" filterable placeholder="Pkg" class="mr-10">
          <el-option
            v-for="item in options.Country"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="filter.Country" filterable placeholder="Offer" class="mr-10">
          <el-option
            v-for="item in options.Country"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" @click="search">Run</el-button>
    </div>
  </div>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="100" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>
<script setup lang="ts">
// date
const end = new Date()
const start = new Date()
start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
let date = [start, end]
// checkout
let checkList = ['Country']
// filter
let filter = {
  Country: '',
  Platform: '',
  Pkg: '',
  Offer: ''
}
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
    },
  ]
}
// search
let search = () => {
  console.log(123)
}
// table
let tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
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
