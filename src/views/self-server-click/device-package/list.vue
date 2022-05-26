<template>
<div>
  <div class="bw-offer-box bwblack">
    <div class="bw-con">
      <div class="flex mythead fb trbox">
        <div class="col-auto-8 tdbox">Platform</div>
        <div class="col-auto-8 tdbox">设备库</div>
        <div class="col-auto-8 tdbox">管理Slot</div>
      </div>
      <template v-for="(item, index) in state.tableData">
        <div class="flex trbox mytbody">
          <div class="col-auto-8 tdbox">
            <span v-if='item.platform === 1'>Android</span>
            <span v-if='item.platform === 2'>iOS</span>
          </div>
          <div class='col-auto-8 tdbox'>
            <span v-text='item.lib_type'></span>
          </div>
          <div class='col-auto-8 tdbox flex cp'
          @click="changecontype(item)"
          >
            <span>View Slot</span>
            <div class="ml-10 glyphicon glyphicon-triangle-bottom active"
            v-bind:class="{'glyphicon-triangle-top': item.contype}"
            ></div>
          </div>
        </div>
        <transition name="slide-fade" v-if='item.contype'>
          <el-table
            :data="item.slotlist"
            border
            ref='wwTable'
            >
            <!-- <el-table-column type="expand"></el-table-column> -->
            <el-table-column
              label="二级分类">
              <template slot-scope="scope">
                <span>{{ scope.row.two_sort }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="PKG"
              width="200"
              >
              <template slot-scope="scope">
                <div class='flex'>
                  <el-input size='mini' v-model="scope.row.pkg_name" placeholder="请输入内容"></el-input>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              width="300"
              label="Slot ID">
              <template slot-scope="scope">
                <div class='flex jcsb'>
                  <el-input style='width: 100px;' size='mini' v-model="scope.row.searchSlot" placeholder="请输入内容"></el-input>
                  <i class="cp icon el-icon-search" @click='searchSlot(scope.row)'></i>
                  <span style='width: 66px;'>{{scope.row.slot_id}}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="Slot Name">
              <template slot-scope="scope">
                <span>{{scope.row.slot_name}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="App Name">
              <template slot-scope="scope">
                <span>{{scope.row.app_name}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button class='ml-10' size='mini' type="primary"
                @click='submitSlot(scope.row)'
                >提交</el-button>
              </template>
            </el-table-column>
          </el-table>
        </transition>
      </template>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <span>Slot ID:</span>
        <!-- ff474d3b -->
        <span v-text="busSlot.data.id"></span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancleSearch(busSlot)">取 消</el-button>
          <el-button type="primary" @click="useSearch(busSlot)">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</div>
</template>
<script lang="ts" setup>
import { serverClickOverallSettingGetConfig } from '@/api/serverclick'
let state = reactive({
  tableData: []
})
let dialogVisible = ref(false)
let busSlot = reactive({
  data: {
    id: ''
  }
})

const getList = async () => {
  const res = await serverClickOverallSettingGetConfig()
  const { data: result } = res
  state.tableData = handleAjaxBaseData(handleResult(result))
}

const handleResult = (data): Array<any> => {
  data.map(element => {
    element.showtype = false
    if (element.all.length !== 0) {
      element.all.map((o) => {
        for (const key in element) {
          if (element.hasOwnProperty(key)) {
            const ele = element[key]
            if (typeof ele !== 'object' && key !== 'slot_id') {
              o[key] = ele
            }
          }
        }
        o.showtype = false
      })
    }
    return element
  })
  return data
  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     let element = object[key]
  //     element.showtype = false
  //     if (element.all.length !== 0) {
  //       element.all.map((o) => {
  //         for (const key in element) {
  //           if (element.hasOwnProperty(key)) {
  //             const ele = element[key]
  //             if (typeof ele !== 'object' && key !== 'slot_id') {
  //               o[key] = ele
  //             }
  //           }
  //         }
  //         o.showtype = false
  //         arr.push(o)
  //       })
  //     }
  //   }
  // }
  // return arr
}

const handlelibtype = (basearr) => {
  let resultarr = []
  basearr.forEach((ele) => {
    let lib_type = resultarr.find((o) => {
      return o.lib_type === ele.lib_type
    })
    if (lib_type) {
      resultarr.map((o) => {
        if (o.lib_type === ele.lib_type) {
          o.slotlist.push(ele)
        }
      })
    } else {
      resultarr.push({
        lib_type: ele.lib_type,
        platform: ele.platform,
        slotlist: [ele],
        contype: true,
        searchSlot: ''
      })
    }
  })
  console.log(resultarr)
  return resultarr
}

const handleAjaxBaseData = (baseData) => {
  let arr = []
  let androidArr = []
  let iosArr = []
  baseData.map((ele) => {
    // Android
    if (ele.platform === 1) {
      androidArr.push(ele)
    }
    // iOS
    if (ele.platform === 2) {
      iosArr.push(ele)
    }
  })
  arr = [...handlelibtype(androidArr), ...handlelibtype(iosArr)]
  console.log(arr)
  return arr
}

const changecontype = (item) => {
  item.contype = !item.contype
}

const searchSlot = (slot) => {
  console.log(slot)
  if (slot.searchSlot) {
    // $.ajax({
    //   url: '/server-click/get-slot-id',
    //   type: 'get',
    //   data: {
    //     id: slot.searchSlot
    //   },
    //   success (result) {
    //     console.log(result)
    //     if (result.status === 1) {
    //       // that.$message({
    //       //   message: result.info,
    //       //   type: 'success'
    //       // })
    //       that.dialogVisible = true
    //       that.busSlot = slot
    //       that.busSlot.data = result.data

    //     } else {
    //       that.$message.error(result.info)
    //     }
    //   }
    // })
  }
}

const cancleSearch = (slot) => {
  dialogVisible.value = false
  busSlot.data.id = ''
}
const useSearch = (slot) => {
  // console.log(slot)
  dialogVisible.value = false
  slot.slot_id = slot.data.id
  busSlot.data.id = ''
}

const submitSlot = (slot) => {
  console.log(slot)
}

const init = () => {
  getList()
}

onMounted(() => {
  init()
})
</script>
<style lang="scss" scoped>
.mythead{
    border-top:1px solid #ebeef5;
    font-size: 16px;
  }
  .trbox{
    width: 100%;
    border-bottom:1px solid #ebeef5;
    border-right:1px solid #ebeef5;
    border-left:1px solid #ebeef5;
  }
  .tdbox:last-child{
    border-right: 0;
  }
  .tdbox{
    text-align: center;
    box-size: border-box;
    padding: 10px;
  }
  .tdbox-border-right{
    border-right:1px solid #ebeef5;
  }
  .active{
    color: #007ef8;
  }
  /* 动画 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
