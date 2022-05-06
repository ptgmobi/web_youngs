import { loginReq, logoutReq, getInfoReq } from '@/api/login'
import { setToken, getToken, removeToken } from '@/utils/auth'
import { ObjTy } from '~/common'
import router, { constantRoutes, asyncRoutes } from '@/router'
import { defineStore } from 'pinia'
import { usePermissionStore } from '@/store/permission'
import { useTagsViewStore } from '@/store/tagsView'
import jwtDecode from 'jwt-decode'

const resetRouter = () => {
  const asyncRouterNameArr: Array<any> = asyncRoutes.map((mItem) => mItem.name)
  asyncRouterNameArr.forEach((name) => {
    if (router.hasRoute(name)) {
      router.removeRoute(name)
    }
  })
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      username: '',
      avatar: '',
      roles: [] as Array<any>,
      email: '',
      id: '',
      element: [] as Array<any>,
      token: ''
    }
  },

  actions: {
    M_username(username: string) {
      this.$patch((state) => {
        state.username = username
      })
    },
    M_roles(roles: Array<string>) {
      this.$patch((state) => {
        state.roles = roles
      })
    },
    M_avatar(avatar: string) {
      this.$patch((state) => {
        state.avatar = avatar
      })
    },
    M_email(email: string) {
      this.$patch((state) => {
        state.email = email
      })
    },
    M_id(id: string) {
      this.$patch((state) => {
        state.id = id
      })
    },
    M_token(token: string) {
      this.$patch((state) => {
        state.token = token
        setToken(token)
      })
    },
    M_element(element: Array<string>) {
      this.$patch((state) => {
        state.element = element
      })
    },


    login(data: ObjTy) {
      return new Promise((resolve, reject) => {
        loginReq(data)
          .then((res: ObjTy) => {
            if (res.code === 200) {
              //commit('SET_Token', res.data?.jwtToken)
              // setToken(res.data?.jwtToken)
              const token = res.data?.token
              this.M_token(token)
              resolve(null)
            } else {
              reject(res)
            }
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    },
    // get user info
    getInfo() {
      const token = getToken()
      const decodeToken: any = jwtDecode(token)
      const {
        User: { Email: email, Id: id, Username: name }
      } = decodeToken
      this.M_email(email)
      this.M_id(id)
      this.M_username(name)
      return new Promise((resolve, reject) => {
        getInfoReq(id)
          .then((response: ObjTy) => {
            const { data } = response
            if (!data) {
              return reject('Verification failed, please Login again.')
            }
            const { element } = data
            this.M_element(element)
            resolve(data)
          })
          .catch((error: any) => {
            console.log(error)
            reject(error)
          })
      })
      // return new Promise((resolve, reject) => {
      //   getInfoReq()
      //     .then((response: ObjTy) => {
      //       const { data } = response
      //       if (!data) {
      //         return reject('Verification failed, please Login again.')
      //       }
      //       //此处模拟数据
      //       const rolesArr: any = localStorage.getItem('roles')
      //       if (rolesArr) {
      //         data.roles = JSON.parse(rolesArr)
      //       } else {
      //         data.roles = ['admin']
      //         localStorage.setItem('roles', JSON.stringify(data.roles))
      //       }
      //       const { roles, username } = data
      //       this.M_username(username)
      //       this.M_roles(roles)
      //       resolve(data)
      //     })
      //     .catch((error: any) => {
      //       reject(error)
      //     })
      // })
    },
    // user logout
    logout() {
      return new Promise((resolve, reject) => {
        // logoutReq()
        //   .then(() => {
        //     this.resetState()
        //     resolve(null)
        //   })
        //   .catch((error: any) => {
        //     reject(error)
        //   })
        this.M_token('')
        this.resetState()
        resolve(null)
      })
    },
    // remove token
    resetToken() {
      console.log('resetToken')
      return new Promise((resolve) => {
        removeToken() // must remove  token  first
        resolve(null)
      })
    },
    resetState() {
      return new Promise((resolve) => {
        this.M_username('')
        this.M_roles([])
        this.M_element([])
        removeToken() // must remove  token  first
        resetRouter() // reset the router
        const permissionStore = usePermissionStore()
        permissionStore.M_isGetUserInfo(false)
        const tagsViewStore = useTagsViewStore()
        tagsViewStore.delAllViews()
        resolve(null)
      })
    }
  },
  getters: {
    getId(state) {
      return state.id
    }
  }
})
