function curry(fn) {
  const c = (...arg) => fn.length === arg.length ? fn(...arg) : (..._arg) => c(...arg, ..._arg)
  return c
}


function volunm(a,b){
  return a* b
}

const zk = curry(volunm);

const dz = zk(0.9)

console.log("商品打九折")
console.log(dz(100))

const tj = (a,b,c) => a*b*c

const tjs = curry(tj)(100)
console.log('计算仓库货物以及 高度一致')
console.log(tjs(2,3))
console.log(tjs(2)(3))

/**
 * 多次调用一个函数 使用相同的参数
 * **/