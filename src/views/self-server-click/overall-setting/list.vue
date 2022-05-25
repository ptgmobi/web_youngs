<template>
  <!-- Android -->
  <el-table
  center
  :data="handleTableDataAndroid"
  style="width: 100%"
  border
  >
    <el-table-column
    label='Android服预配置'
    >
      <el-table-column
        label="国家">
        <template #default="scope">
          <span>{{scope.row.country}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="请求数">
        <template #default="scope">
          <span>{{scope.row.request}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="总设备数">
        <template #default="scope">
          <span>{{scope.row.all_device_num}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="每线程offer数">
        <template #default="scope">
          <!-- <span>{{scope.row.content.thread_offer_num}}</span> -->
          <el-input
            placeholder="请输入内容"
            v-model="scope.row.thread_offer_num"
            :disabled="!scope.row.showtype">
          </el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template #default="scope">
          <el-button
            class="cp"
            type="default"
            icon="Edit"
            circle
            v-if='!scope.row.showtype'
            @click='changeShowType(scope.row)'
          ></el-button>
          <el-button
            class="cp"
            type="primary"
            icon="Edit"
            circle
            v-if='scope.row.showtype'
            @click='submitFun(scope.row, "all")'
          ></el-button>
          <!-- <i class="el-icon-edit cp" 
          v-if='!scope.row.showtype'
          @click='changeShowType(scope.row)'></i>
          <i class="el-icon-edit-outline cp" 
          v-if='scope.row.showtype'
          @click='submitFun(scope.row, "all")'></i> -->
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column
      v-for='o in getTitleAndroid'
      :key='o'
      :label="o">
      <el-table-column
      label="设备数"
        >
        <template 
        #default="scope"
        >
          <template
            v-for='p in scope.row.all'
          >
            <span v-if='p.lib_type === o' >{{p.lib_device_num}}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column
      label="状态"
        >
        <template 
        #default="scope"
        >
          <template
            v-for='p in scope.row.all'
          >
            <div v-if='p.lib_type === o'>
              <el-switch
                :disabled="!p.showtype"
                v-model="p.lib_status"
                active-value="1"
                inactive-value="2"
                >
              </el-switch>
            </div>
            
          </template>
        </template>
      </el-table-column>
      <el-table-column
      label="线程数"
        >
        <template 
        #default="scope"
        >
          <template
            v-for='p in scope.row.all'
          >
            <div v-if='p.lib_type === o'>
              <el-input
                placeholder="请输入内容"
                v-model="p.lib_quantity_proportion"
                :disabled="!p.showtype">
              </el-input>
            </div>
            
          </template>
        </template>
      </el-table-column>
      <el-table-column
      label="操作"
        >
        <template 
        #default="scope"
        >
          <template
          v-for='p in scope.row.all'
          >
            <div v-if='p.lib_type === o'>
              <el-button
                class="cp"
                type="default"
                icon="Edit"
                circle
                v-if='!p.showtype'
                @click='changeShowType(p)'
              ></el-button>
              <el-button
                class="cp"
                type="primary"
                icon="Edit"
                circle
                v-if='p.showtype'
                @click='submitFun(p, "one")'
              ></el-button>
              <!-- <i class="el-icon-edit cp" 
              v-if='!p.showtype'
              @click='changeShowType(p)'></i>
              <i class="el-icon-edit-outline cp" 
              v-if='p.showtype'
              @click='submitFun(p, "one")'></i> -->
            </div>
          </template>
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
  <!-- iOS -->
  <el-table
  center
  :data="handleTableDataiOS"
  style="width: 100%"
  border
  >
    <el-table-column
    label='iOS服预配置'
    >
      <el-table-column
        label="国家">
        <template #default="scope">
          <span>{{scope.row.country}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="请求数">
        <template #default="scope">
          <span>{{scope.row.request}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="总设备数">
        <template #default="scope">
          <span>{{scope.row.all_device_num}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="每线程offer数">
        <template #default="scope">
          <!-- <span>{{scope.row.content.thread_offer_num}}</span> -->
          <el-input
            placeholder="请输入内容"
            v-model="scope.row.thread_offer_num"
            :disabled="!scope.row.showtype">
          </el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template #default="scope">
          <el-button
            class="cp"
            type="default"
            icon="Edit"
            circle
            v-if='!scope.row.showtype'
            @click='changeShowType(scope.row)'
          ></el-button>
          <el-button
            class="cp"
            type="primary"
            icon="Edit"
            circle
            v-if='scope.row.showtype'
            @click='submitFun(scope.row, "all")'
          ></el-button>
          <!-- <i class="el-icon-edit cp" 
          v-if='!scope.row.showtype'
          @click='changeShowType(scope.row)'></i>
          <i class="el-icon-edit-outline cp" 
          v-if='scope.row.showtype'
          @click='submitFun(scope.row, "all")'></i> -->
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column
      v-for='o in getTitleiOS'
      :key='o'
      :label="o">
      <el-table-column
      label="设备数"
        >
        <template 
        #default="scope"
        >
          <template
          v-for='p in scope.row.all'
          >
            <div v-if='p.lib_type === o'>
              <span >{{p.lib_device_num}}</span>
            </div>
          </template>
        </template>
      </el-table-column>
      <el-table-column
      label="状态"
        >
        <template 
        #default="scope"
        >
          <template
            v-for='p in scope.row.all'
          >
            <div v-if='p.lib_type === o'>
              <el-switch
                :disabled="!p.showtype"
                v-model="p.lib_status"
                active-value="1"
                inactive-value="2"
                >
              </el-switch>
            </div>
          </template>
        </template>
      </el-table-column>
      <el-table-column
      label="线程数"
        >
        <template 
        #default="scope"
        >
          <template
          v-for='p in scope.row.all'
          >
            <div v-if='p.lib_type === o'>
              <el-input
                placeholder="请输入内容"
                v-model="p.lib_quantity_proportion"
                :disabled="!p.showtype">
              </el-input>
            </div>
          </template>
        </template>
      </el-table-column>
      <el-table-column
      label="操作"
        >
        <template 
          #default="scope"
        >
          <template
            v-for='p in scope.row.all'
          >
            <div v-if='p.lib_type === o'>
              <el-button
                class="cp"
                type="default"
                icon="Edit"
                circle
                v-if='!p.showtype'
                @click='changeShowType(p)'
              ></el-button>
              <el-button
                class="cp"
                type="primary"
                icon="Edit"
                circle
                v-if='p.showtype'
                @click='submitFun(p, "one")'
              ></el-button>
              <!-- <i class="el-icon-edit cp" 
              v-if='!p.showtype'
              @click='changeShowType(p)'></i>
              <i class="el-icon-edit-outline cp" 
              v-if='p.showtype'
              @click='submitFun(p, "one")'></i> -->
            </div>
          </template>
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>

</template>
<script lang="ts" setup>
import { serverClickOverallSettingList } from '@/api/serverclick'
let tableData = reactive({
  androidArr: [],
  iOSArr: []
})

const handleTableData = (data, platform) => {
  let object = data
  let arr = []
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key]
      let obj = {
        country: key,
        platform: platform
      }
      obj = Object.assign({}, obj, element)
      arr.push(obj)
    }
  }
  return arr
  // let arr = []
  // data.map((ele) => {
  //   let country = arr.find((o) => {
  //     return o.content.country === ele.content.country
  //   })
  //   if (country) {
  //     arr = arr.map((o) => {
  //       if (o.content.country === ele.content.country) {
  //         o = Object.assign({}, ele, o)
  //       }
  //       return o
  //     })
  //   } else {
  //     arr.push(ele)
  //   }
  // })
  // arr.map((object) => {
  //   let reduce = 0
  //   for (const key in object) {
  //     if (object.hasOwnProperty(key)) {
  //       const element = object[key];
  //       if (key !== 'content') {
  //         reduce = reduce + parseInt(element.lib_device_num)
  //       }
  //     }
  //   }
  //   object.content.all_device_num = reduce
  //   return object
  // })
  // console.log(arr)
  // return arr
}

const getTitlefun = (arr) => {
  let set = new Set()
  if (Array.isArray(arr)) {
    arr.map((ele) => {
      ele.all.map((o) => {
        set.add(o?.lib_type)
      })
    })
    return Array.from(set).sort()
  }
  
}

const handleTableDataAndroid = computed(() => {
  return handleTableData(tableData.androidArr, '1')
})

const handleTableDataiOS = computed(() => {
  return handleTableData(tableData.iOSArr, '2')
})

const getTitleAndroid = computed(() => {
  return getTitlefun(handleTableDataAndroid.value)
})

const getTitleiOS = computed(() => {
  return getTitlefun(handleTableDataiOS.value)
})

const init = () => {
  getList()
}

const handleResult = (object) => {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      let element = object[key]
      for (const k in element) {
        if (element.hasOwnProperty(k)) {
          let ele = element[k]
          ele.showtype = false
          ele.all.map((o) => {
            o.showtype = false
          })
        }
      }
    }
  }
  return object
}

const handleAjaxData = (baseData) => {
  let obj = {}
  let AndroidTitle = new Set()
  let iOSTitle = new Set()
  let AndroidArr = []
  let iosArr = []
  if (baseData.length === 0) return false
  baseData.map((ele) => {
    let o = {}
    let lib_type = window.encodeURI(ele['lib_type'])
    o['content'] = ele
    o['content'].showtype = false
    o[`${lib_type}`] = ele
    // Android
    if (ele.platform == 1) {
      AndroidTitle.add(ele['lib_type'])
      AndroidArr.push(o)
    }
    // iOS
    if (ele.platform == 2) {
      iOSTitle.add(ele['lib_type'])
      iosArr.push(o)
    }
    return ele
  })
  obj = {
    handleAndroidTitle: Array.from(AndroidTitle),
    handleiOSTitle: Array.from(iOSTitle),
    handleAndroidArr: AndroidArr,
    handleiOSArr: iosArr
  }
  // console.log(obj)
  return obj
}

const changeShowType = (item) => {
  // console.log(item)
  item.showtype = !item.showtype
}

const submitFun = (item, type) => {
        // console.log(item, type)
        let ajaxData = {
          update_type: type
        }
        ajaxData = Object.assign({}, ajaxData, item)
        delete ajaxData.all
        // $.ajax({
        //   url: '/server-click/overall-setting',
        //   type: 'post',
        //   data: ajaxData,
        //   success (result) {
        //     // console.log(result)
        //     if (result.status === 1) {
        //       // ajax成功后才会执行
        //       item.showtype = !item.showtype
        //       that.$message({
        //         message: result.info,
        //         type: 'success'
        //       })
        //     } else {
        //       that.$message.error(result.info)
        //     }
        //   }
        // })
      }

const getList = async () => {
  const ajaxData = {}
  const res = await serverClickOverallSettingList(ajaxData)
  const { data: result } = res
  tableData.androidArr = handleResult(result)['1']
  tableData.iOSArr = handleResult(result)['2']
}

onMounted(() => {
  init()
})
</script>
<style lang="scss">
.trbox{
  width: 100;
}
.tbbox-border-right{
  border-right:1px solid #ebeef5;
}
.cell{
  padding: 3px !important;
}
.cell {
  text-align: center;
}
</style>
