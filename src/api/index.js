import request from "./reqest";

export const reqLogin = (data) => request({url: '/login', method: 'post', data});