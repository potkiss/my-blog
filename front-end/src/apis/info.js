import request from '../utils/request'

export function getMyInfo() {
    return {
        fourNum: param => request({
            url: '/pubinfo',
            method: 'get',
            params: param
        })
    }
}