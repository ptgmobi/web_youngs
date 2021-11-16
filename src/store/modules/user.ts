import { loginReq, logoutReq, getInfoReq } from '@/api/login'
import { setToken, getToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'
import { ObjTy } from '@/types/common'
import { UserTy } from '@/types/store'
import jwtDecode from 'jwt-decode'

//token: getToken(),

type defaultState = {
  token: string,
  username: string,
  avatar: string,
  email: string,
  id: string,
  element: Array<string>
}

const getDefaultState = () => {
  return {
    token: getToken(),
    username: '',
    avatar: '',
    email: '',
    id: '',
    element: []
  }
}

const UserState = getDefaultState() as defaultState

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
  },
  SET_TOKEN: (state: UserTy, token: string) => {
    state.token = token
    setToken(token)
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
            const token = res.data?.token
            console.log(token)
            commit('SET_TOKEN', token)
            resolve(null)
          } else {
            reject(res)
          }
        })
        .catch((error: any) => {
          reject(error)
        })
      // const res = {"success":true,"code":200,"message":"登录成功","data":{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImZvbyI6ImJhciJ9.eyJpc3MiOiJodHRwOlwvXC9kYXRhZXllLmFkc2dyZWF0LmNuIiwiaWF0IjoxNjM0NzIyOTU5LCJhdWQiOiJodHRwOlwvXC9sb2NhbGhvc3Q6NTAwMyIsImp0aSI6IkJZQUk4NG5uQ0siLCJuYmYiOjE2MzQ3MjI5NjAsImV4cCI6MTYzNDk4MjE1OSwidXNlciI6eyJpZCI6MTE0OSwiZW1haWwiOiJ0ZXN0QHFxLmNvbSIsIm5hbWUiOiJhYmNkZWRmIn19.QFH_QpchPlizjzGrbSIJg78t5JD0bTY62AoH2VhWgmE"}}
      // if (res.code === 200) {
      //   const token = res.data?.token
      //   commit('SET_TOKEN', token)
      //   resolve(null)
      // }
    })
  },
  // get user info
  async getInfo({ commit, state }: ObjTy) {
    const token = getToken()
    const decodeToken: any = jwtDecode(token)
    console.log(decodeToken)
    const { User: {
      Email: email, Id: id, Username: name
    }} = decodeToken
    commit('SET_EMAIL', email)
    commit('SET_ID', id)
    commit('SET_NAME', name)
    return new Promise((resolve, reject) => {
    getInfoReq(id)
      .then((response: ObjTy) => {
        const { data } = response
        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        commit('SET_NAME', 'username')
        resolve(data)
      })
      .catch((error: any) => {
        console.log(error)
        reject(error)
      })
    })
    // return {
    //   roles: ['admin']
    // }
  },
  // user logout
  logout({ commit, state }: ObjTy) {
    console.log('logout')
    // return new Promise((resolve, reject) => {
    //   logoutReq()
    //     .then(() => {
    //       removeToken() // must remove  token  first
    //       // resetRouter()
    //       resolve(null)
    //     })
    //     .catch((error: any) => {
    //       reject(error)
    //     })
    // })
    removeToken()
  },
  // remove token
  resetToken() {
    console.log('resetToken')
    return new Promise((resolve) => {
      removeToken() // must remove  token  first
      resolve(null)
    })
  }
}

export default {
  namespaced: true,
  state: UserState,
  mutations,
  actions
}
