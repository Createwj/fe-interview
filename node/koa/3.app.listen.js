// const Koa = require('koa')
// const app = new Koa()
//
// app.listen(3000)

/**
 *  等价与 语法糖
 * **/
const http = require('http')
const https = require('https')
const Koa = require('koa')
const app = new Koa()

http.createServer(app.callback()).listen(3000)
https.createServer(app.callback()).listen(3001)