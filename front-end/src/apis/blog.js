import request from '../utils/request'

export function handleBlog() {
    return {
         getBlogList: param => request({
            url: '/blog/list',
            method: 'get',
            params: param
         })
    }
}