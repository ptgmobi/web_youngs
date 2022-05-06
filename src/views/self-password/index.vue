<template>
  <div class="app-container">
    <Password
      :is-change="true"
      :is-dialog="false"
      @wwpass-confirm="submitFn"
    />
  </div>
</template>
<script lang="ts" setup>
import Password from '@/components/Self/ChangePass/WwChangePass'
import { changeMyPassword } from '@/api/user'
import store from '@/store'
import { messageFun } from '@/utils/message'
import { useUserStore } from '@/store/user'
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const submitFn = async (data: any) => {
  const ajaxData = {
    old_password: data.oldPass,
    password: data.pass,
    password_re: data.checkPass
  }
  const id = store.getters.id
  const res = await changeMyPassword(id, ajaxData)
  messageFun(res)
  logout()
}
const logout = async () => {
  // await store.dispatch('user/logout')
  await userStore.logout()
  // ! router.push(`/login?redirect=${route.fullPath}`)
  router.push(`/login?redirect=/`)
}
</script>
