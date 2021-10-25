<template>
  <div class="app-container">
    <!-- dialog -->
    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'Edit User':'New User'" width="80%">
      <el-form ref="ruleForm" :model="busData.data" :rules="busData.rules" label-width="150px" label-position="left">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="busData.data.email" placeholder="邮箱" :disabled="dialogType==='edit'" />
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="busData.data.username" placeholder="用户名必须大于6位" />
        </el-form-item>
        <template v-if="dialogType === 'new'">
          <el-form-item label="密码" prop="password" autocomplete="off">
            <el-input v-model="busData.data.password" type="password" placeholder="" />
          </el-form-item>
          <el-form-item label="再次输入密码" prop="password_re" autocomplete="off">
            <el-input v-model="busData.data.password_re" type="password" placeholder="" />
          </el-form-item>
        </template>
        <el-form-item label="描述" prop="comment">
          <el-input v-model="busData.data.comment" placeholder="描述" />
        </el-form-item>
        <el-form-item label="岗位权限" prop="position_id">
          <el-select v-model="busData.data.position_id" filterable multiple class="w100" placeholder="岗位权限" :disabled="!judgePermissionElementFn('A-AU-USER-FORM-POSITION-C')" @change="selectChangeFn('position')">
            <el-option
              v-for="item in busData.options.position"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="角色权限" prop="role_id">
          <el-select v-model="busData.data.role_id" filterable multiple class="w100" placeholder="角色权限" :disabled="!judgePermissionElementFn('A-AU-USER-FORM-ROLE-C')" @change="selectChangeFn('role')">
            <el-option
              v-for="item in busData.options.role"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="所属项目组" prop="project_id">
          <el-select v-model="busData.data.project_id" filterable multiple class="w100" placeholder="所属项目组" :disabled="!judgePermissionElementFn('A-AU-USER-FORM-PROJECT-C')" @change="selectChangeFn('project'), choiceProject()">
            <el-option
              v-for="item in busData.options.project"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="可查看产品" prop="product_id">
          <el-select v-model="busData.data.product_id" filterable multiple class="w100" placeholder="默认全部" :disabled="!judgePermissionElementFn('A-AU-USER-FORM-PRODUCT-C')" @change="selectChangeFn('product')">
            <el-button style="float:left;margin-left:20px;z-index:1" type="primary" plain @click="selectAll()">全选</el-button>
            <el-button style="float:right;margin-right:20px;z-index:1" type="danger" plain @click="unSelectedAll()">清空</el-button>
            <el-option
              v-for="item in busData.options.product"
              :key="item.id"
              :label="item.name"
              :value="item.id"
              style="clear:both"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="confirmFun('ruleForm')">确定</el-button>
      </div>
    </el-dialog>
    <!-- dialog -->
    <!-- dialog -->
    <el-dialog :visible.sync="dialogVisiblePass" title="修改密码" width="80%">
      <ww-change-pass
        v-if="dialogVisiblePass"
        :is_change="false"
        :is-dialog="true"
        @wwpass-cancel="cancelPass"
        @wwpass-confirm="confirmPass"
      />
    </el-dialog>
    <!-- dialog -->
    <div class="w100 control-box flex jc-end">
      <div class="flex flex-end">
        <!-- <el-input placeholder="请输入内容" v-model="control.search" class="input-with-select">
          <el-button type="primary" slot="append">搜索</el-button>
        </el-input> -->
        <el-input v-model="control.search" class="mr-10" placeholder="请输入用户名" />
        <el-button type="primary" @click="handleSearch">搜索</el-button>
        <el-button v-if="judgePermissionElementFn('A-AU-USER-ADD-V')" type="primary" @click="handleCreate">添加用户</el-button>
      </div>
    </div>
    <el-table :data="list" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="邮箱">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户名">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="所属项目组">
        <template slot-scope="scope">
          {{ getUserProject(scope.row.project_id) }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户权限">
        <template slot-scope="scope">
          {{ getUserPosition(scope.row.position_id) }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="可查看产品">
        <template slot-scope="scope">
          {{ scope.row.product_id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建日期">
        <template slot-scope="scope">
          {{ scope.row.create_date }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="最后访问日期">
        <template slot-scope="scope">
          {{ scope.row.update_date }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户状态">
        <template slot-scope="scope">
          <el-switch
            v-if="judgePermissionElementFn('A-AU-USER-STATUS-V')"
            v-model="scope.row.status"
            active-value="1"
            inactive-value="2"
            @change="changeStatus($event, scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="250">
        <div slot-scope="scope" class="flex">
          <el-button v-if="judgePermissionElementFn('A-AU-USER-EDIT-V')" type="primary" size="small" @click="handleEdit(scope)">修改</el-button>
          <el-button v-if="judgePermissionElementFn('A-AU-USER-PASS-V')" type="primary" size="small" @click="handleEditPass(scope)">修改密码</el-button>
          <el-button v-if="judgePermissionElementFn('A-AU-USER-DEL-V')" type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        </div>
      </el-table-column>
    </el-table>
    <!-- pagination -->
    <div class="w100 flex">
      <pagination
        v-show="pagination.total"
        :total="pagination.total"
        :page-sizes="pagination.pageSizes"
        :page.sync="pagination.listQuery.page"
        :limit.sync="pagination.listQuery.limit"
        @pagination="init"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { getUsers, getUser, setCreateUser, setEditUser, changeStatusUser, changeUserPassword } from '@/api/user'
import { getRoles } from '@/api/role'
import { getStations } from '@/api/station'
import { getProjects, getProject } from '@/api/project'
import { getProducts } from '@/api/product'
import WwChangePass from '@/components/Self/ChangePass/WwChangePass'
import { messageFun } from '@/utils/message'
import { judgePermissionElementFn } from '@/utils/permissionElement'
import { validEmail } from '@/utils/validate'
const defaultData = {
  // 邮箱
  email: '',
  // 用户名
  username: '',
  // 密码
  password: '',
  // 二次验证密码
  password_re: '',
  // 描述
  comment: '',
  // 岗位
  position_id: [],
  position_ischange: false,
  // 角色
  role_id: [],
  role_ischange: false,
  // 项目
  project_id: [],
  project_ischange: false,
  // 产品
  product_id: [],
  product_ischange: false
}
export default {
  components: { Pagination, WwChangePass },
  directives: { waves },
  filters: {
    handlePositions(arr: any) {
      // ! this = undefined
      // return this.busData.options.project.filter(ele => {
      //   return arr.includes(ele)
      // })
    }
  },
  data() {
    // 验证邮箱
    const validateUserEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        if (validEmail(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的邮箱格式'))
        }
      }
    }
    // 验证密码
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        // const reg = /^[0-9a-zA-Z_]{8, 16}$/
        if (this.busData.data.password_re !== '') {
          this.$refs.ruleForm.validateField('password_re')
        }
        callback()
      }
    }
    // 验证再次输入密码
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.busData.data.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // 修改密码模态框
      dialogVisiblePass: false,
      // 模态框
      dialogVisible: false,
      dialogType: 'new',
      busData: {
        options: {
          position: [],
          role: [],
          project: [],
          product: [],
          productArr: []
        },
        oldData: {},
        data: this._.cloneDeep(defaultData),
        rules: {
          email: [
            { required: true, message: '必填', trigger: ['change', 'blur'] },
            { validator: validateUserEmail }
          ],
          username: [
            { required: true, message: '必填', trigger: ['change', 'blur'] },
            { min: 6, max: 50, message: '长度在 6 到 50 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '必填', trigger: ['change', 'blur'] },
            { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' },
            { validator: validatePass }
          ],
          password_re: [
            { required: true, message: '必填', trigger: ['change', 'blur'] },
            { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' },
            { validator: validatePass2 }
          ],
          comment: [
            { required: false, message: '必填', trigger: ['change', 'blur'] }
          ],
          role_id: [
            { required: false, message: '必填', trigger: ['change', 'blur'] }
          ],
          position_id: [
            { required: true, message: '必填', trigger: ['change', 'blur'] }
          ],
          project_id: [
            { required: true, message: '必填', trigger: ['change', 'blur'] }
          ],
          product_id: [
            { required: true, message: '必填', trigger: ['change', 'blur'] }
          ]
        }
      },
      // 操作框
      control: {
        search: ''
      },
      // 列表
      list: [],
      // 分页
      pagination: {
        pageSizes: ['10', '20', '40', '100'],
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
    ...mapGetters([
      'rolesMap',
      'element'
    ])
  },
  watch: {
    'busData.data.project': {
      // 根据项目选项，查询对应的产品，并合并去重
      handler(newval, oldval) {
        console.log(newval)
      },
      immediate: false
    }
  },
  created() {
    this.getConfig()
    this.init()
  },
  methods: {
    judgePermissionElementFn,
    // 显示所属项目组
    handleProjectFn(arr) {
      const newarr = this.busData.options.project.filter(ele => {
        return arr.includes(ele.id)
      })
      return newarr
    },
    // 改变用户权限
    changeUserStatus(e, item) {
      console.log(e, item)
    },
    // 获取配置信息
    async getConfig() {
      // 项目
      const { data: project } = await getProjects()
      this.busData.options.project = project
      // 产品
      const ajaxData = {
        name: '',
        page: 1,
        limit: 999,
        project_id: '',
        order: 'desc'
      }
      const { data } = await getProducts(ajaxData)
      this.busData.options.productArr = data.list
      // 岗位
      const { data: position } = await getStations()
      this.busData.options.position = position
      // 角色
      const { data: role } = await getRoles()
      this.busData.options.role = role
    },
    // 初始化函数
    init() {
      this.getList()
    },
    // 根据项目id获取对应的项目
    getUserProject(arr) {
      return this.busData.options.project.filter(ele => {
        return arr.includes(ele.id)
      }).map(ele => {
        return ele.name
      }).join(',')
    },
    // 根据项目id获取对应的产品
    getUserProduct(arr) {
      return this.busData.options.productArr.filter(ele => {
        return arr.includes(ele.id)
      }).map(ele => {
        return ele.name
      }).join(',')
    },
    // 根据项目id获取对应的岗位
    getUserPosition(arr) {
      return this.busData.options.position.filter(ele => {
        return arr.includes(ele.id)
      }).map(ele => {
        return ele.name
      }).join(',')
    },
    // 获取列表
    async getList() {
      const ajaxData = {
        username: this.control.search,
        page: this.pagination.listQuery.page,
        limit: this.pagination.listQuery.limit
      }
      const { data } = await getUsers(ajaxData)
      this.list = data.data
      // this.pagination.listQuery.page = data.paging.page
      // this.pagination.listQuery.limit = data.paging.limit
      this.pagination.total = data.paging.count
    },
    // 搜索用户
    handleSearch() {
      this.pagination.listQuery.page = 1
      this.getList()
    },
    // 添加用户
    handleCreate() {
      this.dialogType = 'new'
      this.dialogVisible = true
      this.clearBusData()
    },
    // 修改
    async handleEdit(scope) {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.clearBusData()
      this.busData.data.id = scope.row.id
      // 查询one
      const { data: choiceData } = await getUser(this.busData.data.id)
      this.busData.oldData = this._.cloneDeep(choiceData)
      this.busData.data = Object.assign({}, this.busData.data, this._.cloneDeep(choiceData))
      this.choiceProject()
    },
    // 提交模态框
    confirmFun(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
          this.handleSubmitFn()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async handleSubmitFn() {
      if (this.dialogType === 'new') {
        const ajaxData = this._.cloneDeep(this.busData.data)
        const res = await setCreateUser(ajaxData, 'post').catch(err => {
          console.log(err)
          // this.$message.error('错了哦，这是一条错误消息')
          const { data: { data: errdata }} = err
          for (const key in errdata) {
            if (Object.hasOwnProperty.call(errdata, key)) {
              const element = errdata[key]
              this.$message.error(element)
            }
          }
        })
        if (res) {
          messageFun(res)
          this.getList()
          this.clearBusData()
          this.dialogVisible = false
        }
      }
      if (this.dialogType === 'edit') {
        const ajaxData = this._.cloneDeep(this.busData.data)
        const res = await setEditUser(this.busData.data.id, ajaxData, 'patch')
        if (res) {
          messageFun(res)
          this.clearBusData()
          this.dialogVisible = false
        }
      }
    },
    // 删除
    handleDelete(scope) {
      this.$confirm('确定删除?', '警告', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(async() => {
          this.list.splice(scope.$index, 1)
          this.$message({
            type: 'success',
            message: 'Delete succed!'
          })
        })
        .catch(err => { console.error(err) })
    },
    // 清除模态框缓存
    clearBusData() {
      this.busData.data = this._.cloneDeep(defaultData)
      this.busData.oldData = {}
      this.$nextTick(() => {
        this.$refs['ruleForm'].clearValidate()
      })
    },
    // 修改状态
    async changeStatus(e, item) {
      const ajaxData = {
        id: item.id,
        status: item.status
      }
      await changeStatusUser(item.id, ajaxData)
    },
    // 修改密码
    handleEditPass(scope) {
      this.dialogVisiblePass = true
      this.busData.data.id = scope.row.id
    },
    cancelPass(data) {
      this.dialogVisiblePass = false
    },
    async confirmPass(data) {
      const ajaxData = {
        password: data.pass,
        password_re: data.checkPass
      }
      const res = await changeUserPassword(this.busData.data.id, ajaxData)
      messageFun(res)
      this.dialogVisiblePass = false
    },
    // 监听select是否发生改变
    selectChangeFn(name) {
      this.busData.data[`${name}_ischange`] = true
    },
    async choiceProject() {
      const arr = [...this.busData.data.project_id]
      const product = []
      if (arr.length !== 0) {
        await Promise.all(arr.map(async(ele) => {
          const { data } = await getProject(ele)
          if (data.product.length !== 0) {
            data.product.forEach(o => {
              product.push(o)
            })
          }
          return ele
        }))
        const newproduct = Array.from(new Set(product))
        // 取出产品列表里需要的对象
        this.busData.options.product = this.handleProductsFn(newproduct)
      }
    },
    // 根据数组获取到需要的产品数组
    handleProductsFn(arr) {
      const newArr = []
      this.busData.options.productArr.map(ele => {
        if (arr.includes(ele.id)) {
          newArr.push(ele)
        }
      })
      return newArr
    },
    // 清空所有所选产品
    unSelectedAll() {
      this.busData.data.product_id = []
      this.busData.data.product_ischange = true
    },
    // 全选产品列表
    selectAll() {
      const productId = []
      this.busData.options.product.map((item) => {
        productId.push(item.id)
      })
      this.busData.data.product_id = productId
      this.busData.data.product_ischange = true
    }
  }
}
</script>
