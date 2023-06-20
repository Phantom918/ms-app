import axios from 'axios';

import { BASE_URL, TIMEOUT } from "./config";


console.info("BASE_URL: " + BASE_URL)

const service = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
});


// 文档中的统一设置请求头。
service.defaults.headers.post['Content-Type'] = 'application/json';

// http request 拦截器
// service.interceptors.request.use(config => {
//     // 发送网络请求时, 在界面的中间位置显示Loading的组件,使用ant-design插件，这里不再赘述

//     //var token = cookie.load('token')//获取本地存储的token
//     // 判断cookie有没有存储token，有的话加入到请求头里
//     //if (token) {
//     //   config.headers['token'] = token//在请求头中加入token
//     // }
//     // 如果还需要在请求头内添加其他内容可以自己添加 [] 内为自定义的字段名 = 后的内容为字段名对应的内容
//     //config.headers['api'] = api

//     //请求携带的信息
//     config.headers = {
//         'Content-Type': 'application/json',
//         'x-token': '需要使用的token',
//         ...config.headers,
//     };
//     return config;
// }, err => {
//     //...关闭加载loading的组件，显示消息提示弹窗
//     return err;
// });

// // http response 拦截器
// service.interceptors.response.use(res => {
//     // return res;
//     if (res.statusText === 'OK') {
//         return Promise.resolve(res.data)
//     } else {
//         return Promise.reject(res.data.msg)
//     }
// }, err => {
//     console.log(err);

//     if (err.response) {
//         // 如401我就让用户返回登录页
//         if (err.response.status === 401) {
//             this.props.history.push('/login');
//         }
//         return Promise.reject(err)
//     } else {
//         return Promise.reject('请求超时, 请刷新重试')
//     }

//     // if (err && err.response) {
//     //     switch (err.response.status) {
//     //         case 400:
//     //             console.log("请求错误");
//     //             break;
//     //         case 401:
//     //             // 如401我就让用户返回登录页面，清除本地token
//     //             // this.props.history.push('/login');
//     //             console.log("未登录...");
//     //             break;
//     //         case 403:
//     //             console.log("接口未授权...");
//     //             break;
//     //         case 500:
//     //             console.log("接口异常...");
//     //             break;
//     //         default:
//     //             console.log("其他错误信息");
//     //     }
//     //     // return err;
//     //     return Promise.reject(err);
//     // } else {
//     //     return Promise.reject('请求超时, 请刷新重试')
//     // }

// });

// /* 统一封装get请求 */
// export const get = (url, params, config = {}) => {
//     return new Promise((resolve, reject) => {
//         service({
//             method: 'get',
//             url,
//             params,
//             ...config
//         }).then(response => {
//             resolve(response)
//         }).catch(error => {
//             reject(error)
//         })
//     })
// }

// /* 统一封装post请求  */
// export const post = (url, data, config = {}) => {
//     return new Promise((resolve, reject) => {
//         service({
//             method: 'post',
//             url,
//             data,
//             ...config
//         }).then(response => {
//             resolve(response)
//         }).catch(error => {
//             reject(error)
//         })
//     })
// }

export default service;
