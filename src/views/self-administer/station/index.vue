<template>
  <div class="app-container">
    <el-button v-if="judgePermissionElementFn('A-AS-ADD-V')" type="primary" @click="handleCreate">新建</el-button>
    <el-table :data="list" style="width: 100%; margin-top: 30px" border>
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
          <el-button
            v-if="judgePermissionElementFn('A-AS-EDIT-V')"
            type="primary"
            size="small"
            @click="handleEdit(scope)"
          >
            修改
          </el-button>
          <el-button
            v-if="judgePermissionElementFn('A-AS-DEL-V')"
            type="danger"
            size="small"
            @click="handleDelete(scope)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" :title="dialogType === 'edit' ? 'Edit Role' : 'New Role'" width="90%">
      <el-form label-width="150px" label-position="left">
        <el-form-item label="Name">
          <el-input v-model="busData.item.name" :disabled="dialogType === 'edit'" placeholder="" />
        </el-form-item>
        <el-form-item label="PID">
          <el-select
            v-model="busData.item.pid"
            :disabled="dialogType === 'edit'"
            filterable
            class="w100"
            placeholder="请选择"
          >
            <el-option v-for="item in options.pid" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="Role">
          <el-select v-model="busData.item.role" filterable multiple class="w100" placeholder="支持多选">
            <el-option v-for="item in options.role" :key="item.id" :label="item.name" :value="item.id" />
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
import { getRoles } from '@/api/role'
import { getStations, getStation, setCreateStation, setEditStation } from '@/api/station'
import { messageFun } from '@/utils/message'
import self from '@/mixins/self'
import _ from 'lodash'
export default {
  mixins: [self],
  components: {},
  data() {
    return {
      options: {
        role: [],
        pid: [],
        base_url: ''
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
          pid: '',
          role: [],
          base_url: ''
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
      const { data } = await getRoles()
      this.options.role = data
    },
    // 获取列表
    async getList() {
      const { data } = await getStations()
      this.data = data
      this.list = data
      this.options.pid = data
    },
    // 新增
    handleCreate() {
      this.dialogType = 'new'
      this.busData.item.type = ''
      this.dialogVisible = true
      const date = new Date()
      this.date = date.getTime()
    },
    // 修改
    async handleEdit(scope) {
      this.dialogType = 'edit'
      this.busData.item.id = scope.row.id
      // 查询one
      const { data: choiceData } = await getStation(this.busData.item.id)
      console.log(choiceData.position)
      this.busData.item.id = choiceData.position.id
      this.busData.item.name = choiceData.position.name
      if (choiceData.position.pid) {
        this.busData.item.pid = choiceData.position.pid.toString()
      }
      this.busData.item.role = choiceData.position_role
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
      const defaultData = {
        item: {
          id: '',
          name: '',
          pid: '',
          role: []
        },
        choiceData: {}
      }
      this.busData = defaultData
    },
    // 点击提交
    async submitFn() {
      if (this.dialogType === 'new') {
        const ajaxData = {
          name: this.busData.item.name,
          pid: this.busData.item.pid,
          role_id: this.busData.item.role
        }
        const res = await setCreateStation(ajaxData, 'post')
        if (res) {
          messageFun(res)
        }
        this.getList()
      }
      if (this.dialogType === 'edit') {
        const ajaxData = {
          id: this.busData.item.id,
          name: this.busData.item.name,
          role_id: this.busData.item.role
        }
        const res = await setEditStation(this.busData.item.id, ajaxData, 'patch')
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
