<template>
  <div class="app-container">
    <password :is-change="true" :is-dialog="false" @wwpass-confirm="submitFn" />
  </div>
</template>
<script lang="ts">
import Password from '@/components/Self/ChangePass/WwChangePass'
import { changeMyPassword } from '@/api/user'
import { messageFun } from '@/utils/message'
export default {
  components: {
    Password
  },
  methods: {
    async submitFn(data: any) {
      const ajaxData = {
        old_password: data.oldPass,
        password: data.pass,
        password_re: data.checkPass
      }
      const id = this.$store.getters.id
      const res = await changeMyPassword(id, ajaxData)
      messageFun(res)
      this.logout()
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
