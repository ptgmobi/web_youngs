import { loginReq, logoutReq, getInfoReq } from '@/api/user'
import { setToken, getToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'
import { ObjTy } from '@/types/common'
import jwtDecode from 'jwt-decode'

//token: getToken(),

const getDefaultState = () => {
  return {
    //token: getToken(),
    username: '',
    avatar: '',
    email: '',
    id: ''
  }
}

const state = getDefaultState()

const mutations = {
  SET_NAME: (state: UserTy, username: string) => {
    state.username = username
  },
  SET_AVATAR: (state: UserTy, avatar: string) => {
    state.avatar = avatar
  },
  SET_EMAIL: (state: UserTy, email: string) => {
    state.email = email
  },
  SET_ID: (state: UserTy, id: string) => {
    state.id = id
  }
}

const actions = {
  // user login
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login({ commit }: ObjTy, data: ObjTy) {
    return new Promise((resolve, reject) => {
      loginReq(data)
        .then((res: ObjTy) => {
          if (res.code === 200) {
            //commit('SET_Token', res.data?.jwtToken)
            setToken(res.data?.token)
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
  getInfo({ commit, state }: ObjTy) {
    const token = getToken()
    const decodeToken: any = jwtDecode(token)
    const user = decodeToken.user
    const { email, id, name } = user
    commit('SET_EMAIL', email)
    commit('SET_ID', id)
    commit('SET_NAME', name)
    return new Promise((resolve, reject) => {
      console.log(state)
      getInfoReq(user.id)
        .then((response: ObjTy) => {
          const { data } = response
          if (!data) {
            return reject('Verification failed, please Login again.')
          }
          resolve(data)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  },
  // user logout
  logout() {
    return new Promise((resolve, reject) => {
      logoutReq()
        .then(() => {
          removeToken() // must remove  token  first
          // resetRouter()
          resolve(null)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  },
  // remove token
  resetToken() {
    return new Promise((resolve) => {
      removeToken() // must remove  token  first
      resolve(null)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
