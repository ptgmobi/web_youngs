<template>
  <div>
    <div class="control-box w100 mb-10">
      <div class="mb-10">
        <router-link to="/fenix/offer/create">
          <el-button type="primary">Offer Create</el-button>
        </router-link>
      </div>
      <el-form :inline="true" v-model="state.searchData" class="flex jc-between w100 ai-end">
        <div class="flex jc-start flex-wrap w100">
          <el-form-item label="">
            <el-select v-model="state.searchData.adv_status" clearable class="search-con" placeholder="Adv Status">
              <el-option
                v-for="item in state.options.status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="state.searchData.status" clearable class="search-con" placeholder="Status">
              <el-option
                v-for="item in state.options.status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="">
            <el-select v-model="state.searchData.cvr_status" clearable class="search-con" placeholder="Cvr Status">
              <el-option
                v-for="item in state.options.status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item> -->
          <el-form-item label="">
            <el-select v-model="state.searchData.platform" clearable class="search-con" placeholder="Platform">
              <el-option
                v-for="item in state.options.platform"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select
              v-model="state.searchData.attribute_provider"
              clearable
              class="search-con"
              placeholder="Attribute Provider"
            >
              <el-option
                v-for="item in state.options.attribute_provider"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="state.searchData.pub_name" clearable class="search-con" placeholder="Pub Name">
              <el-option
                v-for="item in state.options.pub"
                :key="item.id"
                :label="item.pub_name"
                :value="item.pub_name"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Offer ID" v-model="state.searchData.offer_id" class="search-con" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Adv Offer" v-model="state.searchData.adv_offer" class="search-con" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Pachage Name" v-model="state.searchData.pkg" class="search-con" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Offer Title" v-model="state.searchData.title" class="search-con" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Channel" v-model="state.searchData.channel" class="search-con" />
          </el-form-item>
          <el-form-item label="">
            <el-input placeholder="Country" v-model="state.searchData.country" class="search-con" />
          </el-form-item>
          <el-form-item label="">
            <el-select v-model="state.searchData.channel_type" clearable class="search-con" placeholder="Channel Type">
              <el-option
                v-for="item in state.options.channel_type"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>
        <div class="flex">
          <el-form-item class="mr-0" style="margin-right: 0px">
            <div class="flex">
              <el-button type="primary" @click="searchFn">查询</el-button>
              <!-- <el-button type="primary" @click="handleExportSearch">导出</el-button> -->
            </div>
          </el-form-item>
        </div>
      </el-form>
      <!-- <el-input placeholder="请输入内容" v-model="searchData.data" class='search-input'>
        <el-button slot="append" icon="Search" @click='searchFun'></el-button>
      </el-input> -->
    </div>
    <!-- table -->
    <div class="body-box mt-10">
      <el-table :data="state.tableData" class="w100" height="60vh" border>
        <el-table-column fixed prop="offer_id" label="Offer ID" align="center" width="60" />
        <el-table-column fixed prop="adv_offer" label="Adv Offer" align="center" width="87" />
        <el-table-column fixed prop="channel" label="Channel" align="center" width="42" />
        <el-table-column prop="revenue" label="Revenue" align="center" width="45" />

        <el-table-column prop="pkg" label="Package Name" align="center" width="100" />
        <el-table-column prop="title" label="Offer Title" align="center" width="90" />
        <el-table-column prop="pid" label="Pid" align="center" width="77" />

        <el-table-column prop="country" label="Country" align="center" width="40" />

        <el-table-column label="Adv Status" align="center" width="47">
          <template #default="scope">
            <div>
              <span>{{ scope.row.adv_status === 1 ? '开' : '关' }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="offer_id" label="Click*w" align="center" width="55" >
          <template #default="scope">
            <div>
              <span>{{ state.options.cvr[scope.row.offer_id]?.click_w }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="offer_id" label="Installs" align="center" width="50" >
          <template #default="scope">
            <div>
              <span>{{ state.options.cvr[scope.row.offer_id]?.installs }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="offer_id" label="Cvr*w" align="center" width="48" >
          <template #default="scope">
            <div>
              <span>{{ state.options.cvr[scope.row.offer_id]?.cvr_w }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Target Cvr*w" align="center" width="150">
          <template #default="scope">
            <div class="flex">
              <el-input v-model="scope.row.target_cvr" placeholder="Please input" class="input-with-select mr-5" />
              <el-button
                class="mr-5 scale-button"
                type="default"
                icon="Edit"
                circle
                @click="changeTargetCvr(scope)"
              ></el-button>
              <el-switch
                class="scale-button"
                v-model="scope.row.cvr_status"
                :active-value="1"
                :inactive-value="2"
                @change="changeTargetCvrStatusFn(scope)"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Traffic Data" align="left" width="200">
          <template #default="scope">
            <div v-if="scope.row.traffic">
              <div v-for="o in JSON.parse(scope.row.traffic)" :key="o">
                <div>
                  <span>{{ o.pub_status === 1 ? '开' : '关' }}</span>
                  .
                  <span>{{ o.pub }}</span>
                  .
                  <span>{{ o.payout }}</span>
                  .
                  <span>{{ o.cap_daily }}</span>
                  <span>{{ handleGetDailyCapCount(scope.row, o) }}</span>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Operation" align="center" width="130">
          <template #default="scope">
            <router-link :to="getEditUrl(scope)">
              <el-button class="cp mr-5" type="primary" icon="Edit" circle></el-button>
            </router-link>
            <el-switch
              v-model="scope.row.status"
              :active-value="1"
              :inactive-value="2"
              class="mr-5"
              @change="changeStatusFn(scope)"
            />
            <el-popconfirm title="删除后无法再生成该Offer ID，请谨慎操作！" @confirm="deleteFn(scope)">
              <template #reference>
                <el-button type="danger" icon="Delete" circle></el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
        <el-table-column label="Platform" align="center" width="55">
          <template #default="scope">
            <div>
              <span>{{ scope.row.platform === 1 ? 'Android' : 'iOS' }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="attribute_provider" label="Attribute Provider" align="center" width="80" />
        <el-table-column label="Record" align="center" width="52">
          <template #default="{ row }">
            <el-button class="scale-button" icon="View" @click="showRecord(row)" circle></el-button>
          </template>
        </el-table-column>
        <el-table-column label="Comment" align="center" width="150">
          <template #default="scope">
            <div class="flex">
              <el-input v-model="scope.row.description" placeholder="Please input" class="input-with-select mr-5" />
              <el-button class="scale-button" type="default" icon="Edit" circle></el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="w100 flex">
      <Pagination
        v-show="state.pagination.total"
        :total="state.pagination.total"
        :page-sizes="state.pagination.pageSizes"
        v-model:page="state.pagination.listQuery.page"
        v-model:limit="state.pagination.listQuery.limit"
        @pagination="init"
      />
    </div>
    <!-- record -->
    <el-dialog title="日志" width="80%" v-model="dialogRecordVisible" destroy-on-close>
      <Record v-model="dialogRecordVisible" :busData="busData"></Record>
    </el-dialog>
    
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance, ref, reactive, toRefs, toRef, onBeforeMount, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import {
  ApiGetOfferList,
  ApiOfferForChangeStatus,
  ApiOfferForDelete,
  ApiGetAllManageSlot,
  ApiChangeTargetCvrStatus,
  ApiChangeTargetCvr,
  ApiGetOfferDailyCapCount,
  ApiGetOfferOtherInfo
} from '@/api/fenix'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import Record from './record.vue'
import { messageFun } from '@/utils/message'
import { handleAjaxDataObjectFn } from '@/utils/new-format'
import { ElMessageBox } from 'element-plus'
import _ from 'lodash'
let { proxy }: any = getCurrentInstance()
const router = useRouter()
let isJump: any = ref(true)
interface tableDataType {
  id: number
  email: string
  user_name: string
  app_name: string
  slot_id: string
  slot_name: string
  pub_name: string
  postback_url: string
  comment: string
  api_url: string
  status: number
}
let dialogRecordVisible = ref(false)
let dialogTableVisible = ref(false)
const tableDataDefault: Array<tableDataType> = []
interface sarchDataType {
  adv_status: number | undefined
  status: number | undefined
  cvr_status: number | undefined
  platform: number | undefined
  attribute_provider: string
  pub_name: string
  offer_id: string
  adv_offer: string
  pkg: string
  title: string
  channel: string
  country: string
  channel_type: number | undefined
}
const sarchDataDefault: sarchDataType = {
  adv_status: undefined,
  status: undefined,
  cvr_status: undefined,
  platform: undefined,
  attribute_provider: '',
  pub_name: '',
  offer_id: '',
  adv_offer: '',
  pkg: '',
  title: '',
  channel: '',
  country: '',
  channel_type: undefined
}
const dailyCapCountDefault: any = {}
const dailyCvrDefault: any = {}
const state = reactive({
  searchData: sarchDataDefault,
  tableData: tableDataDefault,
  options: {
    status: [
      {
        value: 1,
        label: '开'
      },
      {
        value: 2,
        label: '关'
      }
    ],
    platform: [
      {
        value: 1,
        label: 'Android'
      },
      {
        value: 2,
        label: 'iOS'
      }
    ],
    attribute_provider: [
      {
        value: 'AppsFlyer',
        label: 'AppsFlyer'
      },
      {
        value: 'Branch',
        label: 'Branch'
      },
      {
        value: 'Adjust',
        label: 'Adjust'
      },
      {
        value: 'Singular',
        label: 'Singular'
      },
      {
        value: 'AppMetrica',
        label: 'AppMetrica'
      }
    ],
    pub: [
      {
        id: '',
        pub_name: ''
      }
    ],
    channel_type: [
      {
        value: '1',
        label: 'BUZZ'
      },
      {
        value: '2',
        label: 'SDK'
      }
    ],
    dailyCapCount: dailyCapCountDefault,
    cvr: dailyCvrDefault
  },
  pagination: {
    pageSizes: ['20', '50', '100', '500', '1000'],
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
})
const defaultbusData: any = {}
let busData = reactive(defaultbusData)
const { value: tableData } = toRef(state, 'tableData')
const emitParent = (row: tableDataType) => {
  tableData.push(row)
  dialogTableVisible.value = false
}
const getEditUrl = ({ row }: any) => {
  const id = row.id
  return `/fenix/offer/edit/${id}`
}
const changeStatusFn = async ({ row }: any) => {
  console.log(row)
  const ajaxData = {
    id: row.id,
    status: row.status
  }
  const res = await ApiOfferForChangeStatus(ajaxData)
  if (!messageFun(res)) {
    row.status = row.status === 1 ? 2 : 1
  }
}
const changeTargetCvrStatusFn = async ({ row }: any) => {
  let ajaxData = {
    id: row.id,
    cvr_status: row.cvr_status
  }
  ajaxData = handleAjaxDataObjectFn(ajaxData)
  const res = await ApiChangeTargetCvrStatus(ajaxData)
  if (!messageFun(res)) {
    row.cvr_status = row.cvr_status === 1 ? 2 : 1
  }
}
const changeTargetCvr = async ({ row }: any) => {
  let ajaxData = {
    id: row.id,
    target_cvr: row.target_cvr
  }
  ajaxData = handleAjaxDataObjectFn(ajaxData)
  const res = await ApiChangeTargetCvr(ajaxData)
  messageFun(res)
}
const getSlot = async () => {
  const { data: slotList } = await ApiGetAllManageSlot()
  state.options.pub = slotList
}
const getOfferOtherInfo = async () => {
  const { data: object } = await ApiGetOfferOtherInfo()
  const obj = {}
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = object[key]
      const arr = element.split('_')
      const o = {
        click_w: arr[0],
        installs: arr[1],
        cvr_w: arr[2],
      }
      obj[key] = o
    }
  }
  state.options.cvr = obj
}
const getDailyCapCount = async () => {
  const { data } = await ApiGetOfferDailyCapCount()
  state.options.dailyCapCount = data
}
const getConfig = async () => {
  return Promise.all([getSlot(), getDailyCapCount(), getOfferOtherInfo()])
}
const init = async () => {
  let ajaxData: any = {
    page: state.pagination.listQuery.page,
    limit: state.pagination.listQuery.limit
  }
  const object: any = {
    ...state.searchData
  }
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element: any = object[key]
      if (element) {
        ajaxData[key] = element
      }
    }
  }
  const res = await ApiGetOfferList(ajaxData)
  state.tableData = res.data.data
  state.pagination.total = res.data.paging.count
}
const searchFn = () => {
  init()
}
const deleteFn = async (scope: any) => {
  const { row } = scope
  const res = await ApiOfferForDelete(row.id)
  if (messageFun(res)) {
    state.tableData.splice(scope.$index, 1)
  }
}
const handleGetDailyCapCount = (offer: any, slot: any) => {
  // egp_1245040_IN_95108831
  let key: string = ''
  key = `${offer.offer_id}_${slot.slotid}`
  const value = state.options.dailyCapCount[key]
  if (value) {
    return `: ${value}`
  }
  return ''
}
// onBeforeRouteLeave((to, from, next) => {
//   let r = window.confirm('确认退出当前页面?')
//   if (r) {
//     next()
//   } else {
//     next(false)
//   }
//   // ! ElMessageBox没有效果
//   ElMessageBox.confirm(
//     '确认退出当前页面?',
//     '警告',
//     {
//       confirmButtonText: '确认',
//       cancelButtonText: '取消',
//       type: 'warning',
//     }
//   )
//     .then(() => {
//       next()
//     })
//     .catch(() => {
//       next(false)
//     })
// })
const backChange = () => {
  // window.history.pushState({}, '', window.location.href)
  // window.history.forward()
}
onBeforeMount(() => {})
onMounted(() => {
  getConfig()
  init()
  window.onpopstate = () => {
    console.log('onpopstate')
    backChange()
  }
})
onUnmounted(() => {})
const showRecord = (row) => {
  busData.offer = row
  dialogRecordVisible.value = true
}
</script>
