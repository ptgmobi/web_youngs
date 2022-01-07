<template>
  <div>
    <div class='full'>
      <el-table
        :data="state.arr"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="source"
          label="Source"
          width="180">
          <template #default="scope">
            <el-checkbox 
            v-model="state.setObj[scope.row.source]"
            @change='changeAllSource(scope.row.source, state.setObj[scope.row.source])'
            >{{scope.row.source}}</el-checkbox>
          </template>
        </el-table-column>
        <el-table-column
          prop="label"
          label="Label">
        </el-table-column>
        <el-table-column
          prop="slot_id"
          label="Slot ID">
        </el-table-column>
        <el-table-column
          prop="device_count"
          label="Count">
        </el-table-column>
        <el-table-column
          prop="select"
          label="Select">
          <template #default="scope">
            <el-checkbox 
            v-model="scope.row.select_status"
            @change='changeOneSource(scope.row)'
            ></el-checkbox>
          </template>
        </el-table-column>
      </el-table>
      <div class='w100 flex mt-20'>
        <span>选中合计：</span>
        <span v-text='state.statisticsCount'></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
const props = defineProps({
  json: {
    require: true,
    default: () => {
      return {}
    },
    type: Object
  }
})
const state = reactive({
  search: {
    id: ''
  },
  set: new Set(),
  setObj: {},
  spanArr: [],
  arr: [],
  select: [],
  statisticsCount: 0
})
const handleJsonAll = () => {
      if (props.json.all.length !== 0) {
        state.set = new Set()
        let arr = JSON.parse(JSON.stringify(props.json.all))
        state.select = JSON.parse(JSON.stringify(props.json.select))
        // console.log(arr)
        // console.log(select)
        arr.map((ele) => {
          ele.select_status = false
          state.set.add(ele.source)
          state.select.map((o) => {
            if (ele.source === o.source && ele.label === o.label) {
              ele.select_status = true
            }
            return ele
          })
        })
        // 先按label排序
        arr.sort((a, b) => {
          if (a.label > b.label) {
            return 1
          }else if (a.label < b.label) {
            return -1
          } else {
            return 1
          }
        })
        // 再按source排序
        arr.sort((a, b) => {
          if (a.source > b.source) {
            return 1
          }else if (a.source < b.source) {
            return -1
          } else {
            return 1
          }
        })
        getSpanArr(arr, 'source')
        state.arr = arr
        handleSet()
        return arr
      }
      return JSON.parse(JSON.stringify(state.arr))
    }
const handleSet = () => {
      let arr = [...state.set]
      let newArr = arr.map((ele) => {
        ele = [ele, false]
        return ele
      })
      state.setObj = Object.fromEntries(newArr)
      judgeSource()
    }
const changeAllSource = (key, value) => {
      console.log('change all')
      // console.log(key, value)
      // 批量修改props.arr
      state.arr.map((ele) => {
        if (ele.source === key) {
          ele.select_status = value
        }
      })
      changeFun()
    }
const changeOneSource = (item) => {
      console.log('change one')
      // console.log(item.source)
      // 循环判断
      judgeSource()
      changeFun()

    }
    // 判断所有的source
const judgeSource = () => {
      // 获取全部的和选中的相对应的个数
      let setarr = Object.keys(state.setObj)
      setarr.forEach((ele) => {
        let arr = []
        state.arr.forEach((o) => {
          if (o.source === ele) {
            arr.push(o.select_status)
          }
        })
        state.setObj[ele] = true
        if (arr.includes(false)) {
          state.setObj[ele] = false
        }
      })
      statisticsCountfun()
    }
    // 计算选择的总数
const statisticsCountfun = () => {
      let count = state.arr.reduce((total, ele) => {
        if (ele.select_status) {
          return total + parseInt(ele.device_count)
        } else {
          return total
        }
      }, 0)
      state.statisticsCount = count
    }
const emit = defineEmits(['changeselect', 'up'])
const changeFun = () => {
      // 处理所有的all。取出select
      let arr = []
      let count = 0
      state.arr.forEach((ele) => {
        if (ele.select_status) {
          arr.push({
            source: ele.source,
            label: ele.label
          })
          count += parseInt(ele.device_count)
        }
      })
      let data = {
        select: arr,
        count: count
      }
      emit('changeselect', arr)
      // this.$emit('update:changeselect', arr)
    }
const getSpanArr = (data, key) => {
      state.spanArr = []
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          // 如果是第一条记录（即索引是0的时候），向数组中加入１
          state.spanArr.push(1)
          let pos = 0;
        } else {
          if (data[i][key] === data[i - 1][key]) {
            // 如果source相等就累加，并且push 0  这里是根据一样的source匹配
            state.spanArr[pos] += 1
            state.spanArr.push(0)
          } else {
            // 不相等push 1
            state.spanArr.push(1)
            pos = i;
          }
        }
      }
    }
const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
      // columnIndex === 0 找到第一列，实现合并随机出现的行数
      if (columnIndex === 0) {
        const _row = state.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    }
</script>
