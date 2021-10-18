<template>
  <div>
    <el-select
      v-model="choiceRole"
      class="role-select"
      placeholder="请选择role"
      :disabled="disabled"
      @change="changeRole"
    >
      <el-option
        v-for="item in rolesList"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      />
    </el-select>
  </div>
</template>
<script>
import { getRoles, getCreateRoles } from '@/api/role'
export default {
  name: 'ChoiceRole',
  props: {
    type: {
      type: String,
      default: '',
      requrie: true
    },
    role: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      choiceRole: '',
      rolesList: []
    }
  },
  watch: {
    role: {
      handler(newValue, oldValue) {
        this.choiceRole = newValue
      },
      immediate: true
    }
  },
  mounted() {
    this.getRoles()
  },
  methods: {
    async getRoles() {
      if (this.type === '0') {
        const res = await getRoles({
          type: this.type
        })
        const { data } = res
        this.rolesList = data
      }
      if (this.type === '1') {
        const res = await getCreateRoles({
          type: this.type
        })
        const { data } = res
        this.rolesList = data
      }
    },
    changeRole() {
      this.$emit('update:role', this.choiceRole)
    }
  }
}
</script>
<style scoped>
  .role-select{
    width: 100%;
  }
</style>>
