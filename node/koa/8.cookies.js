const Koa = require('koa')
const Cookies = require('cookies')
const app = new Koa()

const keys = ['keyboard cat']  // 设置签名

app.use(async (ctx, next) => {
  // Create a cookies object
  const cookies = new Cookies(ctx.req, ctx.res, { keys: keys })

  // Get a cookie
  const lastVisit = cookies.get('LastVisit', { signed: true }) // 最后一次访问时间
  console.log(lastVisit)
  await next()
  // Set the cookie to a value
  cookies.set('LastVisit', new Date().toISOString(), { signed: true })
})

app.use(async (ctx, next) => {
  await next()

  /**
   * 抛出一个错误
   * **/
  ctx.throw(400, 'name required');


  /**
   * 等价与
   * **/
  const err = new Error('name required');
  err.status = 400;
  err.expose = true;
  throw err;


  ctx.body = 'cookies test'
})

app.listen(3000)
