<template>
  <div>
    <el-table
      :data="handleTable"
      :span-method="objectSpanMethod"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      border
      @sort-change="sortChange"
    >
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="100"
        align="center"
        :sortable="title === 'pipeline' ? 'custom' : true"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        v-for="item in tHeader"
        :key="`${item.value}-${Math.random()}`"
        :prop="item.value"
        :fixed="fixed.includes(item.value)"
        align="center"
        width="150"
      >
        <template #header>
          <span>{{ item.label }}</span>
          <el-tooltip effect="dark" :content="item.tip" placement="top">
            <i class="el-icon-info" />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- pagination -->
    <!-- <pagination
      v-show="pagination.total"
      class="center"
      :total="pagination.total"
      :page.sync="pagination.listQuery.page"
      :limit.sync="pagination.listQuery.limit"
    /> -->
  </div>
</template>
<script>
// import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
  // components: {
  //   Pagination
  // },
  inheritAttrs: true,
  props: {
    tableData: {
      type: Array,
      required: true
    },
    tHeader: {
      type: Array,
      required: true
    },
    fixed: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    sortChanges: {
      type: Function,
      required: false,
      default() {
        return {}
      }
    },
    rowTotal: {
      type: Array,
      required: false,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      table: [],
      pagination: {
        total: 1,
        listQuery: {
          page: 1,
          limit: 20,
          importance: undefined,
          title: undefined,
          type: undefined,
          sort: '+id'
        }
      },
      // 合并行
      rowMap: new Map(),
      arr: []
    }
  },
  computed: {
    handleTable() {
      // 此处计算合并行公式
      return this.judgeFn(this.table)
    }
  },
  watch: {
    tableData: {
      immediate: true,
      handler(newval) {
        this.table = newval
      }
    },
    $attrs: {
      immediate: true,
      handler(newval) {
        // console.log(newval)
      }
    }
  },
  mounted() {
    const newSet = new Set()
    this.tHeader.map((ele) => {
      newSet.add(ele.value)
    })
    this.table = this._.cloneDeep(this.tableData)
  },
  methods: {
    // 计算需要合并的
    judgeFn(data) {
      if (data.length !== 0) {
        this.rowMap = new Map([])
        data.map((ele) => {
          let num = this.rowMap.get(ele.date) ? this.rowMap.get(ele.date) : 0
          num = num + 1
          this.rowMap.set(ele.date, num)
        })
        // console.log(this.rowMap)
        this.arr = data.map((ele, index) => {
          if (this.rowMap.has(ele.date)) {
            const num = this.rowMap.get(ele.date)
            ele.dateNum = num
            this.rowMap.delete(ele.date)
          } else {
            ele.dateNum = '-1'
          }
          return ele.dateNum
        })
        return data
      } else {
        return data
      }
    },
    // 合并日期列
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // rowIndex：行    columnIndex：列
      // 只对第一列的数据进行合并列
      if (this.title === 'pipeline') {
        if (!row.app_id) {
          if (columnIndex === 0) {
            return [1, 2]
          } else if (columnIndex === 1) {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        }
      }
      if (columnIndex === 0 && this.title !== 'pipeline') {
        if (this.arr[rowIndex] !== '-1') {
          return {
            rowspan: this.arr[rowIndex],
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    sortChange(column, prop, order) {
      this.sortChanges(column, prop, order)
    },
    // 高亮
    tableRowClassName({ row, rowIndex }) {
      if (this.title === 'pipeline') {
        if (!row.app_id) {
          return 'highlight-row'
        } else {
          return ''
        }
      }
    }
    // renderHeader(h, { column, $index }, tip) {
    //   return h(
    //     'div', [
    //       h('span', column.label),
    //       h('el-tooltip', {
    //         props: {
    //           effect: 'dark',
    //           content: tip,
    //           placement: 'top'
    //         }
    //       },
    //       [
    //         h('i', {
    //           class: 'el-icon-info'
    //         })
    //       ], {
    //         content: tip
    //       })
    //     ]
    //   )
    // }
  }
}
</script>
<style lang="scss">
.el-table .highlight-row {
  background: #d7d7d7;
}
</style>
