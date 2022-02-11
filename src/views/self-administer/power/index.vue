<template>
  <div class="app-container">
    <el-button
      v-if="judgePermissionElementFn('A-AP-ADD-V')"
      type="primary"
      @click="handleCreate"
    >
      新建
    </el-button>
    <el-table
      :data="list"
      style="width: 100%; margin-top: 30px"
      border
    >
      <el-table-column
        align="center"
        label="ID"
      >
        <template #default="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Type"
      >
        <template #default="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Operations"
      >
        <template #default="scope">
          <el-button
            v-if="judgePermissionElementFn('A-AP-EDIT-V')"
            type="primary"
            size="small"
            @click="handleEdit(scope)"
          >
            修改
          </el-button>
          <el-button
            v-if="judgePermissionElementFn('A-AP-DEL-V')"
            type="danger"
            size="small"
            @click="handleDelete(scope)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      v-model="dialogVisible"
      :title="dialogType === 'edit' ? 'Edit Role' : 'New Role'"
      width="90%"
    >
      <el-form
        label-width="150px"
        label-position="left"
      >
        <el-form-item label="Name">
          <el-input
            v-model="busData.item.type"
            placeholder="Role Name"
            :disabled="dialogType === 'edit'"
          />
        </el-form-item>
      </el-form>
      <div class="flex jc-between ai-start">
        <role-tree
          ref="roleroute"
          :item="busData.item"
          :data="data.menu"
          :date="date"
          :choice="busData.choiceData.menu"
          title="路由权限"
          name="menu"
          class="col-auto-8 m0-10"
          @changeChoiceData="roleChangeChoice"
        />
        <role-tree
          ref="rolebutton"
          :item="busData.item"
          :data="data.element"
          :date="date"
          :choice="busData.choiceData.element"
          title="按钮权限"
          name="element"
          class="col-auto-8 m0-10"
          @changeChoiceData="roleChangeChoice"
        />
        <role-tree
          ref="roleapi"
          :item="busData.item"
          :data="data.operation"
          :date="date"
          :choice="busData.choiceData.operation"
          title="API权限"
          name="operation"
          class="col-auto-8 m0-10"
          @changeChoiceData="roleChangeChoice"
        />
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="submitFn"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { getPermissions, getPermission, setCreatePermission, setEditPermission } from '@/api/power'
import RoleTree from './tree'
import { messageFun } from '@/utils/message'
import self from '@/mixins/self'
import _ from 'lodash'
const defaultData = {
  element: [],
  menu: [],
  operation: [],
  permission: []
}
export default {
  components: { RoleTree },
  mixins: [self],
  data() {
    return {
      date: '',
      list: [],
      data: {},
      dialogVisible: false,
      dialogType: '',
      busData: {
        item: {
          type: ''
        },
        choiceData: {
          menu: [],
          element: [],
          operation: []
        }
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      const { data } = await getPermissions()
      this.data = data
      this.list = data.permission
    },
    // 清除模态框缓存
    clearBusData() {
      this.busData.choiceData = _.cloneDeep(defaultData)
    },
    // 新增
    handleCreate() {
      this.dialogType = 'new'
      this.busData.item.type = ''
      // 清空
      this.clearBusData()
      this.dialogVisible = true
      const date = new Date()
      this.date = date.getTime()
    },
    // 修改
    async handleEdit(scope) {
      this.dialogType = 'edit'
      this.busData.item = scope.row
      // 查询one
      const { data: choiceData } = await getPermission(this.busData.item.id)
      this.busData.choiceData = choiceData
      this.dialogVisible = true
      const date = new Date()
      this.date = date.getTime()
    },
    // 删除
    handleDelete(scope) {},
    // 选择tree触发
    roleChangeChoice(name, data) {
      console.log(data)
      this.busData.choiceData[name] = data
    },
    // 点击提交
    async submitFn() {
      if (this.dialogType === 'new') {
        const ajaxData = {
          type: this.busData.item.type,
          menu_id: this.busData.choiceData.menu,
          element_id: this.busData.choiceData.element,
          operation_id: this.busData.choiceData.operation
        }
        const res = await setCreatePermission(ajaxData, 'post')
        if (res) {
          messageFun(res)
        }
        this.getList()
      }
      if (this.dialogType === 'edit') {
        const ajaxData = {
          permission_id: this.busData.item.id,
          menu_id: this.busData.choiceData.menu,
          element_id: this.busData.choiceData.element,
          operation_id: this.busData.choiceData.operation
        }
        const res = await setEditPermission(this.busData.item.id, ajaxData, 'patch')
        if (res) {
          messageFun(res)
        }
      }
      this.dialogVisible = false
    }
  }
}
</script>
