const Koa = require('koa');
const app = new Koa()

console.log(app.env)
console.log(app.keys)
// logger
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`) // 设置响应头
})

// response
app.use(async (ctx, next) => {
  ctx.body = 'hello word'
})

app.listen(3000)