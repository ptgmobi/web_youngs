<template>
  <div class="app-container">
    <!-- dialog -->
    <el-dialog
      v-model="dialogVisible"
      :title="dialogType === 'edit' ? '编辑产品' : '创建产品'"
      width="80%"
    >
      <el-form
        ref="ruleForm"
        :model="busData.data"
        :rules="busData.rules"
        label-width="150px"
        label-position="left"
      >
        <el-form-item
          label="产品名称"
          prop="name"
        >
          <el-input
            v-model="busData.data.name"
            placeholder="请输入产品名称"
            :disabled="dialogType === 'edit'"
          />
        </el-form-item>
        <el-form-item
          label="项目组"
          prop="project"
        >
          <el-select
            v-model="busData.data.project"
            class="w100"
            placeholder="请选择所属项目组"
          >
            <el-option
              v-for="item in busData.options.project"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="APP_ID" prop="appid">
          <el-input v-model="busData.data.appid" placeholder="请输入app_id" />
        </el-form-item>
        <el-form-item label="数数项目ID" prop="projectId">
          <el-input v-model="busData.data.projectId" placeholder="请输入数数项目ID" :disabled="dialogType==='edit'" />
        </el-form-item>
        <el-form-item label="热云APPKEY" prop="appkey">
          <el-input v-model="busData.data.appkey" placeholder="请输入热云APPKEY" :disabled="dialogType==='edit'" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="busData.data.status" class="w100">
            <el-option
              v-for="item in busData.options.status"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="产品配置" prop="conf">
          <el-transfer
            filterable
            :filter-method="busData.setting.filterMethod"
            filter-placeholder="请输入搜索"
            v-model="busData.data.conf"
            :data="busData.data.data"
            :titles="['Source', 'Target']"
          >
          </el-transfer>
        </el-form-item> -->
      </el-form>
      <div style="text-align: right">
        <el-button
          type="danger"
          @click="cancelFn"
        >
          取消
        </el-button>
        <el-button
          type="primary"
          @click="submitFn"
        >
          确认
        </el-button>
      </div>
    </el-dialog>
    <!-- dialog -->
    <div class="w100 control-box flex jc-end">
      <div class="flex flex-end">
        <!-- <el-input placeholder="请输入内容" v-model="control.search" class="input-with-select">
          <el-button type="primary" slot="append">搜索</el-button>
        </el-input> -->
        <el-input
          v-model="control.search"
          class="sw-200 mr-10"
          placeholder="请输入产品名称或APPID"
        />
        <el-button
          type="primary"
          @click="handleSearch"
        >
          搜索
        </el-button>
        <el-button
          v-if="judgePermissionElementFn('A-AP-PRODUCT-ADD-V')"
          type="primary"
          @click="handleCreate"
        >
          创建产品
        </el-button>
      </div>
    </div>
    <el-table
      :data="list"
      style="width: 100%; margin-top: 30px"
      border
      @filter-change="filterChange"
      @sort-change="sortChange"
    >
      <el-table-column
        align="center"
        label="ID"
        prop="id"
        sortable="custom"
      />
      <el-table-column
        align="center"
        label="项目组"
        :filters="filters.projectFilter"
      >
        <template #default="scope">
          {{ showCurrentProject(scope.row.project_id) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="产品名称"
      >
        <template #default="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="创建时间"
      >
        <template #default="scope">
          {{ scope.row.create_time }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="更新时间"
      >
        <template #default="scope">
          {{ scope.row.update_time }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="产品状态"
      >
        <template #default="scope">
          <!-- <el-popconfirm
            :title="statusMessage"
            @onConfirm="confirmStatus(scope.row)"
            @onCancel="cancelStatus(scope.row)"
          > -->
          <el-switch
            slot="reference"
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="2"
            @change="changeStatus($event, scope.row)"
          />
          <!-- </el-popconfirm> -->
          <!-- <el-popover
            v-model="productPopVisible"
            placement="top"
            width="200"
          >
            <p>确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button type="text" @click="cancelStatus(scope.row)">取消</el-button>
              <el-button type="text" @click="confirmStatus(scope.row)">确定</el-button>
            </div>
            <el-switch
              slot="reference"
              v-model="scope.row.status"
              active-value="1"
              inactive-value="2"
              @change="switchStatus($event, scope.row)"
            />
          </el-popover> -->
        </template>
      </el-table-column>
      <!-- <el-table-column v-if="judgePermissionElementFn('A-AP-PRODUCT-EDIT-V')" align="center" label="操作">
        <template #default="scope">
          <div class="flex">
            <el-button type="primary" size="small" @click="handleEdit(scope)">编辑</el-button>
            <el-button v-if="judgePermissionElementFn('A-AP-PRODUCT-DEL-V')" type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
          </div>
        </template>
      </el-table-column> -->
    </el-table>
    <!-- pagination -->
    <div class="w100 flex">
      <pagination
        v-show="pagination.total"
        v-model:page="pagination.listQuery.page"
        v-model:limit="pagination.listQuery.limit"
        :total="pagination.total"
        :page-sizes="pagination.pageSizes"
        @pagination="init"
      />
    </div>
  </div>
</template>
<script lang="ts">
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { getProducts, setCreateProduct, setEditProduct, changeStatusProduct } from '@/api/product'
import { getProjects } from '@/api/project'
import { messageFun } from '@/utils/message'
import self from '@/mixins/self'
import _ from 'lodash'
const defaultData = {
  id: '',
  name: '',
  project: '',
  appid: '',
  projectId: '',
  appkey: '',
  status: '1'
}
export default {
  components: { Pagination },
  directives: { waves },
  mixins: [self],
  data() {
    return {
      date: '',
      statusMessage: '产品状态关闭后,产品数据将不在报表中显示',
      tableOrder: 'desc',
      // 配置
      passwordType: 'password',
      // 模态框
      dialogVisible: false,
      dialogType: 'new',
      productStatus: '',
      busData: {
        setting: {
          filterMethod(query, item) {
            return item.label.indexOf(query) > -1
          }
        },
        options: {
          project: [],
          status: [
            { id: '1', name: '启动' },
            { id: '2', name: '禁止' }
          ]
        },
        data: {
          id: '',
          name: '',
          project: '',
          appid: '',
          projectId: '',
          appkey: '',
          status: '1'
        },
        projectName: '',
        rules: {
          name: [
            { required: true, message: '必填', trigger: ['change', 'blur'] },
            { min: 1, max: 50, message: '字符长度为1-50', trigger: ['change', 'blur'] }
          ],
          project: [{ required: true, message: '必填', trigger: ['change', 'blur'] }],
          status: [{ required: true, message: '必填', trigger: ['change', 'blur'] }],
          appid: [{ required: false, message: '必填', trigger: ['change', 'blur'] }],
          projectId: [{ required: false, message: '必填', trigger: ['change', 'blur'] }],
          appkey: [{ required: false, message: '非必填', trigger: ['change', 'blur'] }]
        }
      },
      // 操作框
      control: {
        search: ''
      },
      filters: {
        projectFilter: [],
        currentProjectFilter: ''
      },
      // 列表
      list: [],
      // 分页
      pagination: {
        pageSizes: ['10'],
        total: 1,
        listQuery: {
          page: 1,
          limit: 10,
          importance: undefined,
          title: undefined,
          type: undefined,
          sort: '+id'
        }
      }
    }
  },
  created() {
    this.getConfig()
    this.init()
  },
  methods: {
    init() {
      this.getList()
    },
    // 获取配置
    async getConfig() {
      const { data } = await getProjects()
      this.busData.options.project = data
      data?.map((item) => {
        this.filters.projectFilter.push({ text: item.name, value: item.id })
      })
    },
    // 获取列表
    async getList() {
      const ajaxData = {
        name: this.control.search,
        page: this.pagination.listQuery.page,
        limit: this.pagination.listQuery.limit,
        project_id: this.filters.currentProjectFilter,
        order: this.tableOrder
      }
      const dd = await getProducts(ajaxData)
      const { data } = await getProducts(ajaxData)
      console.log(dd)
      this.list = data
    },
    // 搜索
    handleSearch() {
      this.getList()
    },
    // 新增
    handleCreate() {
      this.dialogType = 'new'
      this.clearBusData()
      this.dialogVisible = true
      const date = new Date()
      this.date = date.getTime()
    },
    // 修改
    async handleEdit(scope) {
      this.dialogType = 'edit'
      this.busData.data.id = scope.row.id
      this.busData.data.name = scope.row.name
      this.busData.data.appid = scope.row.app_id
      this.busData.data.project = scope.row.project_id
      this.busData.data.projectId = scope.row.ss_project_id
      this.busData.data.appkey = scope.row.ry_appkey
      this.dialogVisible = true
      const date = new Date()
      this.date = date.getTime()
    },
    // 删除
    handleDelete(scope) {},
    // 选择tree触发
    roleChangeChoice(name, data) {
      this.busData.choiceData[name] = data
    },
    // 清除模态框缓存
    clearBusData() {
      this.busData.data = _.cloneDeep(defaultData)
    },
    // 修改状态
    async changeStatus(e, item) {
      const ajaxData = {
        id: item.id,
        status: item.status
      }
      const res = await changeStatusProduct(item.id, ajaxData)
      messageFun(res)
    },
    // 点击提交
    async submitFn() {
      if (this.dialogType === 'new') {
        const ajaxData = {
          name: this.busData.data.name,
          project_id: this.busData.data.project,
          app_id: this.busData.data.appid,
          ss_project_id: this.busData.data.projectId,
          ry_appkey: this.busData.data.appkey,
          status: Number(this.busData.data.status)
        }
        const res = await setCreateProduct(ajaxData, 'post')
        if (res) {
          messageFun(res)
        }
        this.getList()
      }
      if (this.dialogType === 'edit') {
        const ajaxData = {
          id: this.busData.data.id,
          name: this.busData.data.name,
          project_id: this.busData.data.project,
          app_id: this.busData.data.appid,
          ss_project_id: this.busData.data.projectId,
          ry_appkey: this.busData.data.appkey,
          status: Number(this.busData.data.status)
        }
        const res = await setEditProduct(this.busData.data.id, ajaxData, 'patch')
        if (res) {
          messageFun(res)
        }
        this.getList()
      }
      this.clearBusData()
      this.dialogVisible = false
      this.$refs['ruleForm'].resetFields()
    },
    showCurrentProject(projectId) {
      const arr = this.busData.options.project?.filter((item) => {
        return item.id === projectId
      })
      return arr[0]?.name
    },
    cancelFn() {
      this.dialogVisible = false
      this.$refs['ruleForm'].resetFields()
    },
    filterChange(filters) {
      const value = Object.values(filters)[0]
      this.filters.currentProjectFilter = value.length === this.filters.projectFilter.length ? '' : value
      this.getList()
    },
    switchStatus(e, item) {
      if (e === 1) {
        this.statusMessage = '产品状态开启后，产品数据开始在平台上展示'
      } else {
        this.statusMessage = '产品状态关闭后,产品数据将不在报表中显示'
      }
    },
    cancelStatus(item) {
      this.getList()
    },
    async confirmStatus(item) {
      await changeStatusProduct(item.id, { id: item.id, status: item.status })
      this.getList()
    },
    sortChange(column, prop, order) {
      if (column.order === 'ascending') {
        this.tableOrder = 'asc'
      } else if (column.order === 'descending') {
        this.tableOrder = 'desc'
      }
      this.getList()
    }
  }
}
</script>
