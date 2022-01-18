<template>
  <div>
    <div class="full">
      <el-table
        :data="state.all"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="source" label="Source" width="180">
          <template #default="scope">
            <el-checkbox
              v-model="state.setObj[scope.row.source]"
              @change="changeAllSource(scope.row.source, state.setObj[scope.row.source])"
            >{{ scope.row.source }}</el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="label" label="Label"></el-table-column>
        <el-table-column prop="slot_id" label="Slot ID"></el-table-column>
        <el-table-column prop="device_count" label="Count">
          <template #default="scope">
            <span>{{ thousandSeparator(scope.row.device_count) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="select" label="Select">
          <template #default="scope">
            <el-checkbox v-model="scope.row.select_status" @change="changeOneSource(scope.row)"></el-checkbox>
          </template>
        </el-table-column>
      </el-table>
      <div class="w100 flex mt-20">
        <span>选中合计：</span>
        <span v-text="state.statisticsCount"></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, toRef, toRefs, toRaw, watch, onMounted, nextTick } from 'vue'
import { thousandSeparator } from '@/utils/format'
import _ from 'lodash'
const props = defineProps({
  all: {
    require: true,
    default: () => {
      return {}
    },
    type: Object
  },
  select: {
    require: true,
    default: () => {
      return {}
    },
    type: Object
  }
})
let arr: Array<any> = []
type objType = {
  all: any,
  select: any
}
const state = reactive({
  search: {
    id: ''
  },
  test: '',
  set: new Set(),
  setObj: {},
  spanArr: arr,
  all: arr,
  select: arr,
  statisticsCount: 0
})

const handleJsonAll = () => {
  if (props.all && props.all.length > 0) {
    state.all = _.cloneDeep(props.all)
    state.select = _.cloneDeep(props.select)
    state.set = new Set()
    state.all.map((ele) => {
      ele.select_status = false
      state.set.add(ele.source)
      state.select.map((o: any) => {
        if (ele.source === o.source && ele.label === o.label) {
          ele.select_status = true
        }
        return ele
      })
      return ele
    })
    // 先按label排序
    state.all.sort((a, b) => {
      if (a.label > b.label) {
        return 1
      } else if (a.label < b.label) {
        return -1
      } else {
        return 1
      }
    })
    // 再按source排序
    state.all.sort((a, b) => {
      if (a.source > b.source) {
        return 1
      } else if (a.source < b.source) {
        return -1
      } else {
        return 1
      }
    })
    getSpanArr(state.all, 'source')
    handleSet()
  }
}
const handleSet = () => {
  let arr = [...state.set]
  let newArr = arr.map((ele: any) => {
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
  state.all.map((ele: any) => {
    if (ele.source === key) {
      ele.select_status = value
    }
  })
  judgeSource()
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
    let arr: Array<any> = []
    state.all.forEach((o: any) => {
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
  let count = state.all.reduce((total: number, ele: any) => {
    if (ele.select_status) {
      return total + parseInt(ele.device_count)
    } else {
      return total
    }
  }, 0)
  state.statisticsCount = thousandSeparator(count)
}
const emit = defineEmits(['kk', 'up'])
const changeFun = () => {
  // 处理所有的all。取出select
  let arr: Array<any> = []
  let count = 0
  state.all.forEach((ele: any) => {
    if (ele.select_status) {
      arr.push({
        // ...ele,
        source: ele.source,
        label: ele.label
      })
      count += parseInt(ele.device_count)
    }
  })
  console.log(arr)
  emit('kk', arr)
  // this.$emit('update:changeselect', arr)
}
// 合并行
const getSpanArr = (data, key) => {
  state.spanArr = []
  let pos: any = 0;
  for (var i = 0; i < data.length; i++) {
    if (i === 0) {
      // 如果是第一条记录（即索引是0的时候），向数组中加入１
      state.spanArr.push(1)
    } else {
      if (data[i][key] === data[i - 1][key]) {
        // 如果source相等就累加，并且push 0  这里是根据一样的source匹配
        state.spanArr[pos] += 1
        state.spanArr.push(0)
      } else {
        // 不相等push 1
        state.spanArr.push(1)
        pos = i
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
watch(() => props.all, (oldValue, newValue) => {
  handleJsonAll()
}, {
  immediate: true,
  // deep: true
})

onMounted(() => {
  // handleJsonAll()
})
</script>
