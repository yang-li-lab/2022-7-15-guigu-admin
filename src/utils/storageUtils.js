/**
 * 用户数据管理的功能模块
 */

export default {
  saveUser(user) {
    localStorage.setItem("_user", JSON.stringify(user))
  },

  getUser() {
    return JSON.parse(localStorage.getItem("_user") || '{}')
  },

  removeUser() {
    localStorage.removeItem('_user')
  }
}