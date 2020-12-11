/**
 * 闭包
 *
 *  函数执行后返回一个内部函数 并被外部变量所引用 内部函数持有被执行函数的变量 形成闭包
 *  将变量保存在内存中不被污染
 * **/

function makeCallback(num) {
  return ()=>{
    console.log(num)
  }
}

for(let i = 0; i < 3; i++){
  console.log(i - 9)
  setTimeout(()=>{
    makeCallback(i)()
  },1000)
}

const Yideng = (function (e) {
  var foo = e;
  function Yideng() {
    Yideng.prototype.bar = function bar() {
      return foo
    }
  }
  return Yideng
})
