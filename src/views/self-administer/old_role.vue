<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAdd">New Role</el-button>
    <el-table :data="list" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="Role ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Group Name">
        <template slot-scope="scope">
          {{ scope.row.groupname }}
        </template>
      </el-table-column>
      <!-- <el-table-column align="center" label="Role Status">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            active-value="1"
            inactive-value="2"
            @change="changeRoleStatus(scope.row)"
          />
        </template>
      </el-table-column> -->
      <el-table-column align="center" label="Operations">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">Role</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'Edit Role':'New Role'" width="80%">
      <el-form :model="dialogData.data" label-width="150px" label-position="left">
        <el-form-item label="Name">
          <el-input v-model="dialogData.data.name" placeholder="Role Name" :disabled="dialogType==='edit'" />
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">Cancel</el-button>
        <el-button type="primary" @click="confirmFun">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import path from 'path'
import { getRoles, addRole, deleteRole, updateRoleStatus, getApiRoles, getApiRole, addApiRole, deleteApiRole } from '@/api/role'
import ChoiceRole from '@/components/Self/ChoiceRole'
import { mapGetters } from 'vuex'
import { baseAsyncRoutes } from '@/router'

const defaultData = {
  id: '',
  name: '',
  filterApiText: ''
}

export default {
  components: { ChoiceRole },
  data() {
    return {
      list: [],
      dialogVisible: false,
      dialogType: 'new',
      dialogData: {
        data: this._.cloneDeep(defaultData),
        treeData: {
          choiceApiDataAdd: [],
          choiceApiDataDel: [],
          choiceApiDataOld: [],
          choiceApiData: [],
          apiData: [],
          choicePageData: [],
          pageData: [],
          // 处理为树状结构之后的数据
          handleData: []
        }
      },
      checkStrictly: false,
      defaultProps: {
        children: 'children',
        label: 'treeLabel'
      }
    }
  },
  computed: {
    handleChoiceApiDataID() {
      return this.dialogData.treeData.choiceApiData.map(ele => {
        return ele.id
      })
    },
    handleChoiceApiDataPermissionID() {
      return this.dialogData.treeData.choiceApiData.map(ele => {
        return ele
      })
    }
  },
  watch: {
    'dialogData.data.filterApiText'(val) {
      this.$refs.apitree.filter(val)
    }
  },
  created() {
    this.getList()
    this.getAllApiTree()
  },
  methods: {
    // tree改变其中一个触发
    changeOneFn(data, node) {
      console.log(data)
    },
    // tree搜索过滤
    filterApiNode(value, data) {
      if (!value) return true
      return data[this.defaultProps.label].includes(value)
    },
    // TODO ??
    checkApiTree(data, state, childrenState) {
      // console.log(state)
      // console.log(childrenState)
      // 已选中的一维数组
      const arr = this.handleChoiceApiDataPermissionID
      const chioceArr = this.dialogData.treeData.choiceApiData
      const obj = chioceArr.find((ele) => {
        return ele.permission_id === data.id
      })
      var myid = obj?.id
      if (state) {
        // 如果变为选中
        if (!this.dialogData.treeData.choiceApiDataAdd.includes(data.id)) {
          // 在addarr中不存在的要添加
          if (!arr.includes(data.id)) {
            // 在已选中的中不存在的才添加
            this.dialogData.treeData.choiceApiDataAdd.push(data.id)
          }
        }
        if (this.dialogData.treeData.choiceApiDataAdd.includes(myid)) {
          // 在delarr中存在的要删除
          this.dialogData.treeData.choiceApiDataDel = this.dialogData.treeData.choiceApiDataDel.filter(o => {
            return o !== myid
          })
        }
      } else {
        // 如果变为不选中
        if (!this.dialogData.treeData.choiceApiDataDel.includes(myid)) {
          // 在delarr中不存在的要添加
          if (obj) {
            // 在已选中存在的才添加
            this.dialogData.treeData.choiceApiDataDel.push(myid)
          }
        }
        if (this.dialogData.treeData.choiceApiDataAdd.includes(data.id)) {
          // 在addarr中存在要删除
          this.dialogData.treeData.choiceApiDataAdd = this.dialogData.treeData.choiceApiDataAdd.filter(o => {
            return o !== data.id
          })
        }
      }
    },
    // TODO ??
    renderContent(h, { node, data, store }) {
      return (
        <span class='custom-tree-node'>
          <span>{node.label}</span>
          <span>
            <el-button size='mini' type='text' on-click={ () => this.append(data) }>Append</el-button>
            <el-button size='mini' type='text' on-click={ () => this.remove(node, data) }>Delete</el-button>
          </span>
        </span>)
    },
    // 获取tree树
    async getAllApiTree() {
      console.log(baseAsyncRoutes)
      this.dialogData.treeData.apiData = baseAsyncRoutes
    },
    // 改变列表开关
    async changeRoleStatus(item) {
      const res = await updateRoleStatus(item)
      this.$notify({
        title: 'Success',
        message: res.info,
        type: 'success'
      })
    },
    async getList() {
      const { data } = await getRoles()
      this.list = data
    },
    // TODO 获取路由
    async getRoutes() {
      const res = await getRoutes()
      return this.generateRoutes(res.data)
      // this.serviceRoutes = res.data
      // this.routes = this.generateRoutes(res.data)
      // return this.routes
    },
    // Reshape the routes structure so that it looks the same as the sidebar
    generateRoutes(routes, basePath = '/') {
      const res = []
      for (let { route } of routes) {
        // skip some route
        if (route.hidden) { continue }

        const onlyOneShowingChild = this.onlyOneShowingChild(route.children, route)

        if (route.children && onlyOneShowingChild && !route.alwaysShow) {
          route = onlyOneShowingChild
        }

        const data = {
          path: path.resolve(basePath, route.path),
          title: route.title,
          name: route.name
        }

        // recursive child routes
        if (route.children) {
          data.children = this.generateRoutes(route.children, data.path)
        }
        res.push(data)
      }
      return res
    },
    generateArr(routes) {
      let data = []
      routes.forEach(route => {
        data.push(route)
        if (route.children) {
          const temp = this.generateArr(route.children)
          if (temp.length > 0) {
            data = [...data, ...temp]
          }
        }
      })
      return data
    },
    // 删除
    handleDelete(scope) {
      this.$confirm('Confirm to remove the role?', 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(async() => {
          await deleteRole(scope.row.id)
          this.list.splice(scope.$index, 1)
          this.$message({
            type: 'success',
            message: 'Delete succed!'
          })
        })
        .catch(err => { console.error(err) })
    },
    generateTree(routes, basePath = '/', checkedKeys) {
      const res = []

      for (const route of routes) {
        const routePath = path.resolve(basePath, route.path)

        // recursive child routes
        if (route.children) {
          route.children = this.generateTree(route.children, routePath, checkedKeys)
        }

        if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
          res.push(route)
        }
      }
      return res
    },
    // reference: src/view/layout/components/Sidebar/SidebarItem.vue
    onlyOneShowingChild(children = [], parent) {
      let onlyOneChild = null
      const showingChildren = children.filter(item => !item.hidden)

      // When there is only one child route, the child route is displayed by default
      if (showingChildren.length === 1) {
        onlyOneChild = showingChildren[0]
        onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
        return onlyOneChild
      }

      // Show parent if there are no child route to display
      if (showingChildren.length === 0) {
        onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return onlyOneChild
      }

      return false
    },
    // 清除模态框数据缓存
    clearDialogDataCache() {
      console.log('clearDialogDataCache')
      this.dialogData.data = this._.cloneDeep(defaultData)
      this.$refs.apitree.setCheckedKeys([])
    },
    // 新增
    handleAdd() {
      if (this.$refs.tree) {
        this.$refs.tree.setCheckedNodes([])
      }
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    // 修改
    handleEdit(scope) {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.checkStrictly = true
      this.$nextTick(async() => {
        this.clearDialogDataCache()
        // 此处根据当前组名称查询对应的权限
        const { data: apiRoleData } = await getApiRole({
          role_id: scope.row.id
        })
        console.log(apiRoleData)
        this.dialogData.data = this._.cloneDeep(scope.row)
        this.dialogData.treeData.choiceApiData = apiRoleData
        // this.dialogData.treeData.choiceApiDataOld = this._.cloneDeep(apiData)
        // console.log(this.role.routes)
        // let routes = this.generateRoutes(res)
        // this.dialogData.treeData.pageData = this._.cloneDeep(routes)
        // routes = this.generateArr(routes)
        // this.$refs.tree.setCheckedNodes(routes)
        // set checked state of a node not affects its father and child nodes
        this.checkStrictly = false
      })
    },
    confirmFun() {
      // 获取相关需要的值
      const choiceApiData = this.$refs.apitree.getCheckedNodes(false, true)
      console.log(choiceApiData)
      const arr = []
      choiceApiData.forEach(ele => {
        arr.push(ele.treeName)
      })
      console.log(arr)
      return false
      const isEdit = this.dialogType === 'edit'
      // const checkedKeys = this.$refs.tree.getCheckedKeys()
      // console.log(checkedKeys)
      // this.role.routes = this.generateTree(deepClone(this.serviceRoutes), '/', checkedKeys)
      // console.log(this.role.routes)
      if (isEdit) {
        const choiceApiData = this.$refs.apitree.getCheckedKeys()
        // const result = await updateRole(this.dialogData.data)
        Promise.all([
          addApiRole({
            role_id: this.dialogData.data.id,
            role_pms: this.getChoiceApiDataAdd(choiceApiData).join()
          }),
          deleteApiRole({
            role_id: this.dialogData.data.id,
            ids: this.getChoiceApiDataDel(choiceApiData).join()
          })
        ]).then(data => {
          this.$notify({
            title: 'Success',
            message: data.info,
            type: 'success'
          })
        }).catch(error => {
          console.log(error)
        }).finally(data => {
          this.dialogVisible = false
        })
      } else {
        Promise.all([addRole(this.dialogData.data), this.getList()]).then(data => {
          this.$notify({
            title: 'Success',
            message: data.info,
            type: 'success'
          })
        }).catch(error => {
          console.log(error)
        }).finally(data => {
          this.dialogVisible = false
        })
      }
    },
    getChoiceApiDataAdd(arr) {
      const oldArr = [...arr]
      const newArr = []
      oldArr.forEach(ele => {
        if (ele && !this.handleChoiceApiDataPermissionID.includes(ele)) {
          newArr.push(ele)
        }
      })
      return newArr
    },
    getChoiceApiDataDel(arr) {
      const oldArr = [...arr]
      const newArr = []
      this.dialogData.treeData.choiceApiData.map(ele => {
        if (ele && !oldArr.includes(ele.permission_id)) {
          newArr.push(ele.id)
        }
      })
      return newArr
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
