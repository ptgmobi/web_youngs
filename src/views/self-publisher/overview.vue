<template>
  <div>
    <div class="search-box">
      <div class="mb-10">
        <el-checkbox-group v-model="search.checkList">
          <el-checkbox v-for="item in clumon.choice" :key="item.value" :label="item.value">{{item.label}}</el-checkbox>
        </el-checkbox-group>{{search.checkList}}
      </div>
      <div class="flex jc-between ai-start">
        <div class="flex jc-start mb-10">
          <el-date-picker
            class="mr-10"
            v-model="search.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
          <el-select v-model="search.filter.Country" filterable placeholder="Country" class="mr-10">
            <el-option
              v-for="item in options.Country"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="search.filter.Country" filterable placeholder="Platform" class="mr-10">
            <el-option
              v-for="item in options.Country"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="search.filter.Country" filterable placeholder="Pkg" class="mr-10">
            <el-option
              v-for="item in options.Country"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="search.filter.Country" filterable placeholder="Offer" class="mr-10">
            <el-option
              v-for="item in options.Country"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <el-button type="primary" @click="searchFun">Run</el-button>
      </div>
    </div>
    <!-- all -->
    <!-- <el-table :data="tableData.all" border style="width: 100%" class="mb-10">
      <el-table-column prop="impression" label="Impression" />
      <el-table-column prop="click" label="Click" />
      <el-table-column prop="revenue" label="Revenue($)" />
      <el-table-column prop="conversion" label="Conversion" />
    </el-table> -->
    <div class="mb-10">
      <ww-export-excel
        :button-name="exportExcel.buttonName"
        :list="tableData.arr"
        :t-header="exportExcel.tHeader"
        :filter-val="exportExcel.filterVal"
        :filename="exportExcel.fileName"
      ></ww-export-excel>
    </div>
    <!-- arr -->
    <el-table :data="tableData.arr" border style="width: 100%">
      <el-table-column v-for="item in handleClumon" :key="item.value" :prop="item.value" :label="item.label" >
        <template #default="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row[item.value] }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="w100 flex">
        <pagination
          v-show="pagination.total"
          :total="pagination.total"
          :page-sizes="pagination.pageSizes"
          v-model:page="pagination.listQuery.page"
          v-model:limit="pagination.listQuery.limit"
          @pagination="init"
        />
      </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import WwExportExcel from '@/components/Self/Excel/Export/index.vue'
import { getOverviewList } from '@/api/overview'
export default {
  components: {
    Pagination,
    WwExportExcel
  },
  data() {
    const end = new Date()
    const start = new Date()
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
    return {
      clumon: {
        base:[
          {
            label: 'Impression',
            value: 'impression'
          },
          {
            label: 'Click',
            value: 'click'
          },
          {
            label: 'CVR',
            value: 'cvr'
          },
          {
            label: 'Conversion',
            value: 'conversion'
          },
          {
            label: 'Revenue($)',
            value: 'revenue'
          }
        ],
        choice: [
          {
            label: 'Date',
            value: 'date'
          },
          {
            label: 'Hour',
            value: 'hour'
          },
          {
            label: 'Country',
            value: 'country'
          },
          {
            label: 'Platform',
            value: 'platform'
          },
          {
            label: 'PKG',
            value: 'pkg'
          },
          {
            label: 'Offer',
            value: 'offer'
          }
        ]
      },
      search: {
        date: [start, end],
        checkList: [],
        filter: {
          Country: '',
          Platform: '',
          Pkg: '',
          Offer: ''
        }
      },
      options: {
        Country: [
          {
            value: 'value',
            label: 'label'
          }
        ]
      },
      tableData: {
        all: [],
        arr: []
      },
      exportExcel: {
        buttonName: '导出',
        tHeader: ['日期'],
        filterVal: ['date'],
        fileName: 'text'
      },
      pagination: {
        pageSizes: ['10', '20', '40', '100'],
        total: 1,
        listQuery: {
          page: 1,
          limit: 20,
          importance: undefined,
          title: undefined,
          type: undefined,
          sort: '+id'
        }
      }
    }
  },
  created() {
    this.init()
  },
  computed: {
    handleClumon() {
      const arr = this.search.checkList
      const chioceArr = []
      this.clumon.choice.map(ele => {
        if (arr.includes(ele.value)) {
          chioceArr.push(ele)
        }
      })
      return [...chioceArr, ...this.clumon.base]
    }
  },
  methods: {
    async init() {
      const ajaxData = {
        page: this.pagination.listQuery.page,
        page_size: this.pagination.listQuery.limit
      }
      const res = await getOverviewList(ajaxData)
      const { data } = res
      this.tableData.arr = data.data
      this.pagination.total = parseInt(data.count)
      // this.pagination.listQuery.page = parseInt(data.page)
      // this.pagination.listQuery.limit = parseInt(data.page_size)
    },
    searchFun() {}
  }
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
