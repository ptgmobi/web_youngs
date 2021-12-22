<template>
  <div class="app-container">
    <el-button v-if="judgePermissionElementFn('A-AR-ADD-V')" type="primary" @click="handleCreate">新建</el-button>
    <el-table :data="list" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="ID">
        <template #default="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Name">
        <template #default="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Operations">
        <template #default="scope">
          <el-button v-if="judgePermissionElementFn('A-AR-EDIT-V')" type="primary" size="small" @click="handleEdit(scope)">修改</el-button>
          <el-button v-if="judgePermissionElementFn('A-AR-DEL-V')" type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" :title="dialogType==='edit'?'Edit Role':'New Role'" width="90%">
      <el-form label-width="150px" label-position="left">
        <el-form-item label="Name">
          <el-input v-model="busData.item.name" placeholder="" :disabled="dialogType==='edit'" />
        </el-form-item>
        <el-form-item label="Permissions">
          <el-select v-model="busData.item.permissions" filterable multiple clearable class="w100" placeholder="支持多选">
            <el-option
              v-for="item in options.permissions"
              :key="item.id"
              :label="item.type"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitFn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { getPermissions } from '@/api/power'
import { getRoles, getRole, setCreateRole, setEditRole } from '@/api/role'
import { messageFun } from '@/utils/message'
import self from '@/mixins/self'
import _ from 'lodash'
export default {
  mixins: [ self ],
  components: {},
  data() {
    return {
      options: {
        permissions: []
      },
      date: '',
      list: [],
      data: {},
      dialogVisible: false,
      dialogType: '',
      busData: {
        item: {
          id: '',
          name: '',
          permissions: []
        },
        choiceData: {}
      }
    }
  },
  computed: {
    ...mapGetters(['element'])
  },
  created() {
    this.getConfig()
    this.getList()
  },
  methods: {
    // 获取配置
    async getConfig() {
      const { data } = await getPermissions()
      this.options.permissions = data.permission
    },
    // 获取列表
    async getList() {
      const { data } = await getRoles()
      this.data = data
      this.list = data
    },
    // 新增
    handleCreate() {
      this.dialogType = 'new'
      this.busData.item.type = ''
      this.busData.item.name = ''
      this.busData.item.permissions = []
      this.dialogVisible = true
      const date = new Date()
      this.date = date.getTime()
    },
    // 修改
    async handleEdit(scope) {
      this.dialogType = 'edit'
      this.busData.item.id = scope.row.id
      // 查询one
      const { data: choiceData } = await getRole(this.busData.item.id)
      this.busData.item.name = choiceData.role.name
      // this.busData.item.permissions.slice(0)
      // choiceData.role_permission.forEach(ele => {
      //   this.busData.item.permissions.push(ele)
      // })
      this.busData.item.permissions = choiceData.role_permission
      this.dialogVisible = true
      const date = new Date()
      this.date = date.getTime()
    },
    // 删除
    handleDelete(scope) {

    },
    // 选择tree触发
    roleChangeChoice(name, data) {
      this.busData.choiceData[name] = data
    },
    // 点击提交
    async submitFn() {
      if (this.dialogType === 'new') {
        const ajaxData = {
          name: this.busData.item.name,
          permission_id: this.busData.item.permissions
        }
        const res = await setCreateRole(ajaxData, 'post')
        if (res) {
          messageFun(res)
        }
        this.getList()
      }
      if (this.dialogType === 'edit') {
        const ajaxData = {
          role_id: this.busData.item.id,
          permission_id: this.busData.item.permissions
        }
        const res = await setEditRole(this.busData.item.id, ajaxData, 'patch')
        if (res) {
          messageFun(res)
        }
      }
      this.dialogVisible = false
    }
  }
}
</script>
