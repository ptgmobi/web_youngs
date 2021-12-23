<template>
  <el-form label-width="150px" label-position="top">
    <el-form-item :label="title">
      <div class="">
        <el-input v-model="filterApiText" class="w100" placeholder="输入关键字进行过滤" />
        <el-tree
          :ref="handleRef"
          :data="handleTree"
          :props="defaultProps"
          show-checkbox
          node-key="id"
          class="permission-tree"
          :default-checked-keys="choiceArr"
          :filter-node-method="filterApiNode"
          :default-expand-all="true"
          @check="changeOneFn"
        />
      </div>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { handleIdTree } from '@/utils/format'
import path from 'path'
import _ from 'lodash'
export default {
  props: {
    title: {
      default: 'title',
      type: String
    },
    data: {
      default() {
        return []
      },
      type: Array
    },
    item: {
      default() {
        return {}
      },
      type: Object
    },
    choice: {
      default() {
        return []
      },
      type: Array
    },
    name: {
      default: 'name',
      type: String
    },
    date: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      filterApiText: '',
      list: [],
      choiceArr: [],
      checkStrictly: false,
      // tree配置
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    handleTree() {
      // return this.list
      return handleIdTree(this.list)
    },
    handleRef() {
      return `tree${this.name}`
    }
  },
  watch: {
    date() {
      this.init()
    },
    choice: {
      immediate: true,
      handler(newval, oldval) {
        this.$nextTick(() => {
          // console.log(this.name, newval)
          // 先置空
          this.$refs[this.handleRef].setCheckedKeys([])
          newval.forEach((o) => {
            const node = this.$refs[this.handleRef].getNode(o)
            // 只给子节点设置
            if (node && node.isLeaf) {
              this.$refs[this.handleRef].setChecked(node, true)
            }
          })
          // this.choiceArr = newval
        })
      }
    },
    // 搜索tree
    filterApiText(val) {
      if (this.$refs[this.handleRef]) {
        this.$refs[this.handleRef].filter(val)
      }
    }
  },
  created() {
    this.list = _.cloneDeep(this.data)
  },
  methods: {
    async init() {
      this.filterApiText = ''
    },
    // tree改变其中一个触发
    changeOneFn(data, node) {
      // const arr = [...this.$refs[this.handleRef].getCheckedKeys()]
      const arr = [...this.$refs[this.handleRef].getCheckedKeys(), ...this.$refs[this.handleRef].getHalfCheckedKeys()]
      this.$emit('changeChoiceData', this.name, arr)
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
          this.dialogData.treeData.choiceApiDataDel = this.dialogData.treeData.choiceApiDataDel.filter((o) => {
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
          this.dialogData.treeData.choiceApiDataAdd = this.dialogData.treeData.choiceApiDataAdd.filter((o) => {
            return o !== data.id
          })
        }
      }
    },
    // Reshape the routes structure so that it looks the same as the sidebar
    generateRoutes(routes, basePath = '/') {
      const res = []
      for (let { route } of routes) {
        // skip some route
        if (route.hidden) {
          continue
        }

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
      routes.forEach((route) => {
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
      const showingChildren = children.filter((item) => !item.hidden)

      // When there is only one child route, the child route is displayed by default
      if (showingChildren.length === 1) {
        onlyOneChild = showingChildren[0]
        onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
        return onlyOneChild
      }

      // Show parent if there are no child route to display
      if (showingChildren.length === 0) {
        onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return onlyOneChild
      }

      return false
    }
  }
}
</script>
