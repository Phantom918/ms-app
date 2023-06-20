// axios 的跨域配置
// 在 src 文件夹下创建一个 setupProxy.js 文件，注意：位置、名字都不能变，否则会报错。

// 老版本这样配置
// const proxy = require('http-proxy-middleware')
// 新版本这样配置
const { createProxyMiddleware: proxy } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        // api1: 需要转发的请求(所有带有/api1前缀的请求都会转发给9001)
        proxy('/api1', {
            //配置转发目标地址(返回数据的真实后端服务器地址)
            target: 'http://localhost:9001',
            // 控制服务器接收到的请求头中host字段的值
            // true: 后端服务器收到的请求头中的host为 localhost:9001
            // false: 后端服务器收到的请求头中的host为 localhost:3000,  默认值就是false, 一般设置为true
            changeOrigin: true,
            //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
            pathRewrite: { '^/api1': '' }
        }),
        proxy('/api2', {
            target: 'http://httpbin.org/get',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )
}
