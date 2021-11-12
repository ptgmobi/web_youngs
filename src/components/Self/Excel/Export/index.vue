<template>
  <!-- <el-form :inline="true" :model="searchForm.data" class="flex jc-end"> -->
  <!-- <div class="flex jc-start"> -->
  <!-- <el-form-item label="导出文件名">
        <el-input v-model="searchForm.data.filename" placeholder="文件名" />
      </el-form-item> -->
  <!-- <el-form-item label="自动宽度">
        <el-radio-group v-model="searchForm.data.autoWidth">
          <el-radio :label="true" border>
            True
          </el-radio>
          <el-radio :label="false" border>
            False
          </el-radio>
        </el-radio-group>
      </el-form-item> -->
  <!-- <el-form-item label="导出文件类型">
        <el-select v-model="searchForm.data.bookType" placeholder="文件类型">
          <el-option
            v-for="item in searchForm.options.bookType"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item> -->
  <!-- </div> -->

  <!-- <el-form-item class="mr-0">
      <el-button @click="handleDownload">导出</el-button>
    </el-form-item>
  </el-form> -->
  <el-button icon="Download" type="primary" @click="handleDownload">{{ buttonName }}</el-button>
</template>
<script>
// import { parseTime } from '@/utils'
export default {
  name: 'WwExportExcel',
  props: {
    list: {
      type: Array,
      requrie: true,
      default() {
        return []
      }
    },
    tHeader: {
      type: Array,
      requrie: true,
      default() {
        return []
      }
    },
    filterVal: {
      type: Array,
      requrie: true,
      default() {
        return []
      }
    },
    filename: {
      type: String,
      requrie: true,
      default: ''
    },
    buttonName: {
      type: String,
      requrie: false,
      default: 'Export'
    },
    bookType: {
      type: String,
      requrie: false,
      default: 'xlsx'
    }
  },
  data() {
    return {
      searchForm: {
        options: {
          bookType: [
            'xlsx',
            'csv'
            // 'txt'
          ],
          autoWidth: [true, false]
        },
        data: {
          filename: '',
          autoWidth: true,
          bookType: 'xlsx'
        },
        rules: {}
      },
      downloadLoading: false
    }
  },
  created() {
    this.searchForm.data.bookType = this.bookType
  },
  methods: {
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then((excel) => {
        const list = this.list
        const data = this.formatJson(this.filterVal, list)
        excel.export_json_to_excel({
          header: this.tHeader,
          data,
          // filename: this.searchForm.data.filename,
          filename: this.filename,
          autoWidth: this.searchForm.data.autoWidth,
          bookType: this.searchForm.data.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          // if (j === 'date') {
          //   return parseTime(v[j])
          // } else {
          return v[j]
          // }
        })
      )
    }
  }
}
</script>
