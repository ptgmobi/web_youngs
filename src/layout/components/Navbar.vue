<template>
  <div class="navbar rowBC">
    <div class="rowSC">
      <hamburger
        v-if="settings.showHamburger"
        :is-active="opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
      <breadcrumb class="breadcrumb-container" />
    </div>
    <!--nav title-->
    <div
      v-if="settings.showTitle"
      class="heardCenterTitle"
    >
      {{ settings.showTitle }}
    </div>
    <div
      v-if="settings.ShowDropDown"
      class="right-menu"
    >
      <div class="w100 flex">
        <div class="p10">
          <router-link to="/password">
            <span v-text="email" />
          </router-link>
        </div>
        <div class="p10">
          <el-button
            type="warning"
            plain
            round
            @click="loginOut"
          >
            Login Out
          </el-button>
        </div>
      </div>
      <!-- <el-dropdown class="dn" trigger="click" size="medium">
        <div class="avatar-wrapper">
          <img
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            class="user-avatar"
          />
          <CaretBottom style="width: 1em; height: 1em; margin-left: 4px" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>Home</el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/jzfai/vue3-admin-ts">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <a target="_blank" href="https://juejin.cn/post/7036302298435289095">
              <el-dropdown-item>Docs</el-dropdown-item>
            </a>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item divided @click="loginOut">login out</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { CaretBottom } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import Breadcrumb from './Breadcrumb'
import Hamburger from './Hamburger'
import { computed, getCurrentInstance } from 'vue'
// import { useStore } from 'vuex'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
const router = useRouter()
const route = useRoute()
// const store = useStore()
const appStore = useAppStore()
const userStore = useUserStore()
const settings = computed(() => {
  return appStore.settings
  // return store.state.app.settings
})
const email = computed(() => {
  return userStore.email
  // return store.state.user.email
})
const opened = computed(() => {
  return appStore.sidebar.opened
  // return store.state.app.sidebar.opened
})
const toggleSideBar = () => {
  // store.commit('app/M_toggleSideBar')
  appStore.M_toggleSideBar()
}
/*
 * 退出登录
 * */

const loginOut = () => {
  userStore.logout().then(() => {
  // store.dispatch('user/logout').then(() => {
    // ElMessage({ message: '退出登录成功', type: 'success' })
    // proxy.$router.push(`/login?redirect=${proxy.$route.fullPath}`)
    //此处reload清空路由和重置部分状态
    // location.reload()
    ElMessage({ message: '退出登录成功', type: 'success' })
    router.push(`/login?redirect=/`)
  })
}
</script>

<style lang="scss" scoped>
.navbar {
  height: $navBarHeight;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

//logo
.avatar-wrapper {
  margin-top: 5px;
  position: relative;
  cursor: pointer;

  .user-avatar {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  .el-icon-caret-bottom {
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 25px;
    font-size: 12px;
  }
}

//center-title
.heardCenterTitle {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 46%;
  font-weight: 600;
  font-size: 20px;
  transform: translate(-50%, -50%);
}

//drop-down
.right-menu {
  cursor: pointer;
  margin-right: 40px;
}
</style>
