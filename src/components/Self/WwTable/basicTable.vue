<template>
  <div class="table-box table-top">
    <el-table
      ref="dragTable"
      :data="tableList"
      row-key="id"
      border
      highlight-current-row
      style="width: 100%"
      :span-method="spanMethod"
    >
      <el-table-column
        v-for="item in headerTerm"
        :key="item.value"
        :prop="item.value"
        :label="item.label"
        :fixed="item.fixed"
        align="center"
      />
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableList: {
      type: Array,
      required: true
    },
    headerTerm: {
      type: Array,
      required: true
    },
    spanMethod: {
      type: Function,
      required: false,
      default: () => {}
    }
  }
}
</script>
<style lang="scss">
  .table-top {
    margin-top: 10px;
  }
</style>
