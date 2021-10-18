<template>
  <div class="ww-chart-box">
    <!-- select -->
    <div class="select-box mb-20">
      <div class="flex jc-between">
        <div class="btn-box w100">
          <el-button-group class="btnBox flex jc-start flex-nowrap">
            <el-tooltip
              v-for="item in draggableList"
              :key="item.value"
              :content="item.tip"
              effect="dark"
              placement="bottom"
            >
              <el-button
                :type="
                  item.value === select.data.choiceBtn ? 'primary' : 'default'
                "
                @click="changeSelectBtn(item.value)"
              >{{ item.label }}</el-button>
            </el-tooltip>
          </el-button-group>
        </div>
        <div>
          <el-popover
            placement="right"
            trigger="click"
          >
            <el-button
              slot="reference"
              type="primary"
              icon="el-icon-setting"
              circle
            />
            <!-- 内容 -->
            <!-- 搜索 -->
            <div class="serach-box mb-10">
              <h3>自定义列</h3>
              <el-input v-model="search.input" placeholder="请输入需要搜索的指标" />
            </div>
            <div class="flex ai-start jc-between">
              <!-- left -->
              <div class="popover-box popover-left-box mr-10">
                <div class="title-box">
                  <h3>勾选需要显示的指标</h3>
                </div>
                <div v-if="!search.input" class="flex jc-start control-box">
                  <a class="choice-btn" @click="selectAll">全选</a>
                  /
                  <a class="choice-btn" @click="selectZero">清空</a>
                  /
                  <a class="choice-btn" @click="selectDefault">默认</a>
                </div>
                <div class="con-box">
                  <div v-for="group in handleGroupArr" :key="group.level">
                    <h3>{{ group.label }}</h3>
                    <el-checkbox-group v-model="select.data.checkList" class="flex flex-wrap jc-start" @change="handleChangeSelected">
                      <template v-for="(item, index) in handleSelectCheckListBtn">
                        <el-checkbox
                          v-if="!group.level || group.level === item.settings.level"
                          :key="index"
                          :label="item.value"
                          class="checkbox-one mb-10"
                        >{{ item.label }}</el-checkbox>
                      </template>
                    </el-checkbox-group>
                  </div>
                </div>
              </div>
              <!-- right -->
              <div class="popover-box popover-right-box">
                <div class="title-box">
                  <h3>已选{{ draggableListLength }}列</h3>
                </div>
                <div class="flex jc-start control-box">
                  <a class="choice-btn" @click="selectDefaultDraggableList">默认</a>
                </div>
                <div class="con-box draggable-box">
                  <draggable :list="draggableList" group="article" class="dragArea" @change="changeDraggableList">
                    <div v-for="element in draggableList" :key="element.value" class="list-complete-item">
                      <el-button class="draggable-one">
                        <div class="flex jc-between">
                          <span>≡</span>
                          <span>{{ element.label }}</span>
                          <span>
                            <i class="el-icon-close cp" @click="delToDraggableList(element)" />
                          </span>
                        </div>
                      </el-button>
                    </div>
                  </draggable>
                </div>
              </div>
            </div>
          </el-popover>
        </div>
      </div>
    </div>
    <!-- chart -->
    <ww-chart-data class="mt-40" :chart-data="chartData" />
  </div>
</template>
<script>
import { WwStackedLineChartFn, handleChartArr } from '@/utils/echarts'
import { setLocalStorage, getLocalStorage } from '@/utils/cache'
import WwChartData from '@/components/Self/WwChart/WwChartData'
import draggable from 'vuedraggable'
export default {
  name: 'WwStackedLineChart',
  components: {
    WwChartData,
    draggable
  },
  props: {
    locationName: {
      type: String,
      require: true,
      default() {
        return ''
      }
    },
    selectOptions: {
      type: Array,
      require: true,
      default() {
        return []
      }
    },
    baseChartData: {
      type: Object,
      require: true,
      default() {
        return []
      }
    },
    xAxisName: {
      type: String,
      require: true,
      default() {
        return 'date'
      }
    },
    formatTooltipFn: {
      type: Function,
      require: false,
      default(params) {
        return params.value
      }
    },
    // 多选框分组
    groupArr: {
      type: Array,
      require: false,
      default() {
        return []
      }
    },
    // 默认展示的指标
    defaultStart: {
      type: String,
      require: false,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      search: {
        input: ''
      },
      select: {
        data: {
          // 选中的指标数组
          checkList: [],
          // 当前选择的指标
          choiceBtn: ''
        }
      },
      // 排序数组
      draggableList: [],
      // 上一次的存储的数组
      beforeSelectList: []
    }
  },
  computed: {
    // 处理为需要展示的btn
    handleSelectCheckListBtn() {
      return this.selectOptions.filter(ele => {
        return ele.label.toLocaleLowerCase().includes(this.search.input.trim().toLocaleLowerCase()) || !this.search.input
      })
    },
    // chart
    chartData() {
      // 根据选择的name，选择对应的数据
      const data = handleChartArr(this.select.data.choiceBtn, this.baseChartData, this.xAxisName, 'monitor')
      return WwStackedLineChartFn(data, this.formatTooltipFn)
    },
    // 处理选框组
    handleGroupArr() {
      if (this.groupArr.length !== 0) {
        return this.groupArr
      } else {
        return [{
          level: undefined,
          label: ''
        }]
      }
    },
    // 拖拽数组的长度
    draggableListLength() {
      return this.draggableList.length
    }
  },
  watch: {
    'selectOptions': {
      immediate: false,
      handler(newval) {
        this.setDefaultCheckList()
        this.setDefaultDraggableArr(this.select.data.checkList)
      }
    },
    'draggableList': {
      immediate: false,
      handler(newval) {
        this.$emit('draggableArr', newval)
      }
    }
  },
  mounted() {
    this.setDefaultCheckList()
    this.select.data.choiceBtn = this.defaultStart
    this.setchoiceBtn()
    // 处理默认的拖拽数组
    this.setDefaultDraggableArr(this.select.data.checkList)
  },
  methods: {
    // 设置默认选中项
    setDefaultCheckList() {
      // 判断cookie中是否有
      this.select.data.checkList = getLocalStorage(this.locationName) ? JSON.parse(getLocalStorage(this.locationName)) : this.filterDefaultShow()
    },
    // 如果当前所在指标被移除，则选择列表中的第一个
    setchoiceBtn() {
      const defaultStart = this.select.data.choiceBtn
      const start = this.select.data.checkList.find(ele => {
        return ele === defaultStart
      })
      this.select.data.choiceBtn = start || this.select.data.checkList[0]
    },
    // 全选
    selectAll() {
      this.select.data.checkList.splice(0)
      this.select.data.checkList = this.selectOptions.map(ele => {
        return ele.value
      })
      this.handleChangeSelected(this.select.data.checkList)
    },
    // 清空，只保留当前选择的
    selectZero() {
      this.select.data.checkList.splice(0)
      const arr = []
      this.selectOptions.filter(ele => {
        if (ele.value === this.select.data.choiceBtn) {
          arr.push(ele.value)
        }
      })
      this.select.data.checkList = arr
      this.handleChangeSelected(this.select.data.checkList)
    },
    // 选择默认指标
    selectDefault() {
      this.select.data.checkList.splice(0)
      this.select.data.checkList = this.filterDefaultShow()
      this.handleChangeSelected(this.select.data.checkList)
    },
    // 默认展示指标数组
    filterDefaultShow() {
      const checkArr = []
      this.selectOptions.map(ele => {
        if (ele.show) {
          checkArr.push(ele.value)
        }
      })
      return checkArr
    },
    // 选择当前展示的指标
    changeSelectBtn(data) {
      this.select.data.choiceBtn = data
      this.$emit('currentBtnValue', data)
    },
    // 选择
    handleChangeSelected(val) {
      this.setDraggableArr(val)
      this.setchoiceBtn()
      this.setLocalStorageFn()
    },
    // 默认设置拖拽数组
    setDefaultDraggableArr(data) {
      const newArr = []
      data.map(o => {
        // 只取selectOptions中有的
        const one = this.selectOptions.find(ele => {
          return ele.value === o
        })
        if (one) {
          newArr.push(this._.cloneDeep(one))
        }
      })
      this.draggableList = [...newArr]
      this.beforeSelectList = this.draggableList.map(ele => {
        return ele.value
      })
    },
    // 计算并赋给拖拽数组
    setDraggableArr(data) {
      // 判断修改差异
      const diffData = this.differenceSetFn(data, this.beforeSelectList)
      // 根据差异对拖拽数组进行修改
      this.setDraggableList(diffData)
      // 当前的选择数组变为下一次的基础对照数组
      this.beforeSelectList = this._.cloneDeep(data)
    },
    // 根据差异对拖拽数组进行修改
    setDraggableList(data) {
      if (data.add) {
        // +
        const addArr = this.selectOptions.filter(ele => {
          return data.arr.includes(ele.value)
        })
        this.draggableList = [...this.draggableList, ...addArr]
      } else {
        // -
        this.draggableList = this.draggableList.filter(ele => {
          return !data.arr.includes(ele.value)
        })
      }
      this.setLocalStorageFn()
    },
    // 拖拽行为
    changeDraggableList(val) {
      this.setLocalStorageFn()
      // location.reload()
    },
    // 保存拖拽数组的value组成的数组到缓存
    setLocalStorageFn() {
      const draggableValueList = this.draggableList.map(ele => {
        return ele.value
      })
      setLocalStorage(this.locationName, JSON.stringify(draggableValueList))
    },
    // 设置为默认拖拽数组
    selectDefaultDraggableList() {
      this.draggableList.splice(0)
      this.selectOptions.map(ele => {
        if (this.select.data.checkList.includes(ele.value)) {
          this.draggableList.push(ele)
        }
      })
      this.setchoiceBtn()
      this.setLocalStorageFn()
    },
    // 在拖拽数组中删除
    delToDraggableList(item) {
      // 删除左侧选框区
      this.select.data.checkList = this.select.data.checkList.filter(ele => {
        return ele !== item.value
      })
      this.handleChangeSelected(this.select.data.checkList)
    },
    // 求差集函数
    differenceSetFn(arr1, arr2) {
      let minArr = []
      let maxArr = []
      let flag = true
      if (arr1.length > arr2.length) {
        minArr = [...arr2]
        maxArr = [...arr1]
        // +
        flag = true
      } else {
        minArr = [...arr1]
        maxArr = [...arr2]
        // -
        flag = false
      }
      const minSet = new Set(minArr)
      const maxSet = new Set(maxArr)
      const subset = []
      for (const item of maxSet) {
        if (!minSet.has(item)) {
          subset.push(item)
        }
      }
      const res = {
        add: flag,
        arr: subset
      }
      return res
    }
  }
}
</script>
<style scoped lang='scss'>
$border-color: #eee;
$padding: 5px;
.btn-box{
  margin-right: 10px;
  overflow-x: auto;
}
.choice-btn{
  color: #409EFF
}
.popover-box{
  border-left: 1px solid $border-color;
  border-right: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
}
.title-box{
  background: #eee;
  padding: $padding;
  h3{
    margin: 5px 0;
  }
}
.control-box{
  font-size: 12px;
  padding: $padding;
}
.con-box{
  height: 500px;
  padding: $padding;
  border: 1px solid #fff;
}
.popover-left-box{
  width: 720px;
}
.checkbox-one{
  width: 25%;
  margin-right: 0;
}
.draggable-box{
  width: 200px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0 5px;
}
.draggable-one{
  width: 100%;
  margin: 5px 0;
}
</style>
