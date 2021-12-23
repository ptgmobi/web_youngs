<template>
  <div class="app-container">
    <!-- dialog -->
    <el-dialog v-model="dialogVisible" :title="dialogType === 'edit' ? '修改项目组' : '创建项目组'" width="80%">
      <el-form ref="ruleForm" :model="busData.data" :rules="busData.rules" label-width="150px" label-position="left">
        <el-form-item label="项目名称" prop="name">
          <el-input v-model="busData.data.name" placeholder="" :disabled="dialogType === 'edit'" />
        </el-form-item>
        <el-form-item label="产品" prop="project">
          <el-select v-model="busData.data.product" filterable multiple class="w100" placeholder="产品">
            <el-option
              v-for="item in busData.options.product"
              :key="item.id"
              :label="item.name"
              :value="item.id"
              :disabled="item.status === '2'"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div style="text-align: right">
        <el-button type="danger" @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitFn">确定</el-button>
      </div>
    </el-dialog>
    <!-- dialog -->
    <div class="w100 control-box flex jc-end">
      <div class="flex flex-end">
        <!-- <el-input placeholder="请输入内容" v-model="control.search" class="input-with-select">
          <el-button type="primary" slot="append">搜索</el-button>
        </el-input> -->
        <el-input v-model="control.search" class="mr-10" placeholder="请输入内容" />
        <el-button type="primary" @click="handleSearch">搜索</el-button>
        <el-button v-if="judgePermissionElementFn('A-AP-PROJECT-ADD-V')" type="primary" @click="handleCreate">
          创建项目组
        </el-button>
      </div>
    </div>
    <el-table :data="list" style="width: 100%; margin-top: 30px" border>
      <el-table-column align="center" label="项目组ID">
        <template #default="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="项目名称">
        <template #default="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="产品数">
        <template #default="scope">
          {{ scope.row.product_count }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建时间">
        <template #default="scope">
          {{ scope.row.create_time }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="更新时间">
        <template #default="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template #default="scope">
          <div class="flex">
            <el-button
              v-if="judgePermissionElementFn('A-AP-PROJECT-EDIT-V')"
              type="primary"
              size="small"
              @click="handleEdit(scope)"
            >
              编辑
            </el-button>
            <el-button
              v-if="judgePermissionElementFn('A-AP-PROJECT-DEL-V')"
              type="danger"
              size="small"
              @click="handleDelete(scope)"
            >
              删除
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- pagination -->
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
<script lang="ts">
import { mapGetters } from 'vuex'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { getProjects, getProject, setCreateProject, setEditProject } from '@/api/project'
import { getProducts } from '@/api/product'
import { messageFun } from '@/utils/message'
import self from '@/mixins/self'
import _ from 'lodash'
const defaultData = {
  id: '',
  name: '',
  product: []
}
export default {
  mixins: [self],
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      date: '',
      // 配置项
      passwordType: 'password',
      // 模态框
      dialogVisible: false,
      dialogType: 'new',
      busData: {
        setting: {
          filterMethod(query, item) {
            console.log(item)
            return item.label.indexOf(query) > -1
          }
        },
        options: {
          product: []
        },
        data: {
          id: '',
          name: '',
          product: []
        },
        rules: {}
      },
      // 操作框
      control: {
        search: ''
      },
      // 列表
      list: [],
      // 分页
      pagination: {
        pageSizes: ['10', '20', '40'],
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
  computed: {
    ...mapGetters(['element'])
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
      const ajaxData = {
        name: '',
        page: 1,
        limit: 999,
        project_id: '',
        order: 'desc'
      }
      const { data } = await getProducts(ajaxData)
      this.busData.options.product = data
    },
    // 获取列表
    async getList() {
      const res = await getProjects()
      console.log(res)
      const { data } = res
      this.list = data
    },
    // 搜索
    handleSearch() {},
    // 新增
    handleCreate() {
      this.dialogType = 'new'
      this.dialogVisible = true
      const date = new Date()
      this.date = date.getTime()
    },
    // 修改
    async handleEdit(scope) {
      this.dialogType = 'edit'
      this.busData.data.id = scope.row.id
      // 查询one
      const { data: choiceData } = await getProject(this.busData.data.id)
      this.busData.data.id = choiceData.project.id
      this.busData.data.name = choiceData.project.name
      this.busData.data.product = choiceData.product_id
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
    // 点击提交
    async submitFn() {
      if (this.dialogType === 'new') {
        const ajaxData = {
          name: this.busData.data.name,
          product_id: this.busData.data.product
        }
        const res = await setCreateProject(ajaxData, 'post')
        if (res) {
          messageFun(res)
        }
        this.getList()
      }
      if (this.dialogType === 'edit') {
        const ajaxData = {
          id: this.busData.data.id,
          name: this.busData.data.name,
          product_id: this.busData.data.product
        }
        const res = await setEditProject(this.busData.data.id, ajaxData, 'patch')
        if (res) {
          messageFun(res)
        }
      }
      this.clearBusData()
      this.dialogVisible = false
    }
  }
}
</script>
