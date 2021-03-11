import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/boot-quick-admin/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/boot-quick-admin/transaction/list',
    method: 'get',
    params: query
  })
}
