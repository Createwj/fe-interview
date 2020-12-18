app.context.db = db()

app.use(async ctx => {
  console.log(ctx)
})

// 为ctx 定义跟多的属性