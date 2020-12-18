const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  next()
  // 请求数据 req
  console.log('------header 请求头对象 可以设置------')
  console.log(ctx.header)
  console.log('------headers------')
  console.log(ctx.headers)
  console.log('------method 请求方法。 可以设置------')
  console.log(ctx.method)
  console.log('------url------')
  console.log(ctx.url)
  console.log('------originalUrl------')
  console.log(ctx.originalUrl)
  console.log('------origin------')
  console.log(ctx.origin)
  console.log('------href------')
  console.log(ctx.href)
  console.log('------path------')
  console.log(ctx.path)
  console.log('------query------')
  console.log(ctx.query)
  console.log('------querystring------')
  console.log(ctx.querystring)
  console.log('------host------')
  console.log(ctx.host)
  console.log('------hostname------')
  console.log(ctx.hostname)
  console.log('------fresh------')
  console.log(ctx.fresh)
  console.log('------stale------')
  console.log(ctx.stale)
  console.log('------socket------')
  // console.log(ctx.socket)
  console.log('------protocol------')
  console.log(ctx.protocol)
  console.log('------secure------')
  console.log(ctx.secure)
  console.log('------ip------')
  console.log(ctx.ip)
  console.log('------ips------')
  console.log(ctx.ips)
  console.log('------subdomains------')
  console.log(ctx.subdomains)
  console.log('------is------')
  console.log(ctx.is())
  console.log('------accepts------')
  console.log(ctx.accepts())
  console.log('------acceptsEncodings------')
  console.log(ctx.acceptsEncodings())
  console.log('------acceptsCharsets------')
  console.log(ctx.acceptsCharsets())
  console.log('------get------')



  ctx.body = 'hello word'




  // res 响应数据
  console.log(ctx.body)
  console.log(ctx.body)
  console.log(ctx.status)
  console.log(ctx.message)
  console.log(ctx.length)
  console.log(ctx.type)
  console.log(ctx.headerSent)
  // console.log(ctx.redirect('/a')) // 重定向
  // console.log(ctx.attachment)
  // console.log(ctx.set())
  // console.log(ctx.append())
  // console.log(ctx.remove())
  console.log(ctx.lastModified)
  console.log(ctx.etag)
})

app.listen(3000)

/** 检查不同文件类型问价请求
 ctx.is('html'); // => 'html'
 ctx.is('text/html'); // => 'text/html'
 ctx.is('text/*', 'text/html'); // => 'text/html'

 // 当 Content-Type 是 application/json 时
 ctx.is('json', 'urlencoded'); // => 'json'
 ctx.is('application/json'); // => 'application/json'
 ctx.is('html', 'application/*'); // => 'application/json'

 ctx.is('html'); // => false
 * **/