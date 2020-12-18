const Koa = require('koa')
const app = new Koa()

app.on('error', (err,ctx) => {
  log.error('serve error', err, ctx)
})