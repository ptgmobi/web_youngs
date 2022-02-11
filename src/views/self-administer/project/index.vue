<template>
  <div class="app-container">
    <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick"
    >
      <el-tab-pane
        name="product"
        label="产品信息"
      >
        <product v-if="activeName === 'product'" />
      </el-tab-pane>
      <el-tab-pane
        name="project"
        label="项目组"
      >
        <project v-if="activeName === 'project'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'
import Project from './project'
import Product from './product'
export default {
  components: {
    Project,
    Product
  },
  data() {
    return {
      activeName: 'product'
    }
  },
  computed: {
    ...mapGetters(['element'])
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = tab.props.name
    }
  }
}
</script>
