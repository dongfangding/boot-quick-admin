import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'sysUser/loginByPassword',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/sysUser/currentUser',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/boot-quick-admin/user/logout',
    method: 'post'
  })
}

export function generateCaptcha(data) {
  return request({
    url: '/sysUser/generateCaptcha',
    method: 'post',
    data
  })
}
