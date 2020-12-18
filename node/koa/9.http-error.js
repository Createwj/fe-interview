const Koa = require('koa')
const createError = require('http-errors')
const app = new Koa()


app.use(async (ctx, next) => {
  if(1) {
    return next(createError(401, 'Please login to view this page.'))
  }
  await next()


  ctx.body = 'http-error'
})

app.listen(3000)
