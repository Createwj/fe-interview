const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log(ctx.req)
  console.log('----node - req------')
  console.log(ctx.res)
  console.log('----node - res------')

  console.log(ctx.request)
  console.log('----req------')
  console.log(ctx.response)
  console.log('----res------')
  ctx.state.userName = '新城'
  await next()
  ctx.body = 'hello word'
})
app.use(async (ctx, next) => {
  console.log(ctx.state.userName)
  await next()
})

app.listen(3000)

/**
 * ctx.state 推荐的命名空间，用于通过中间件传递信息和你的前端视图。
 * **/