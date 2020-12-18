const Koa = require('koa')
const app = new Koa()

app.use('someMiddle').use('someMiddle').use('someMiddle').listen(3000)

/**
 * 等价
 * **/

app.use('someMiddle')
app.use('someMiddle')
app.use('someMiddle')
app.listen(3000)