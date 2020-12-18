const a = [2,3,4,5,6,7];

/**
 * array属性
 * **/

console.log('---for---')
for(let i=0;i<a.length;i++){
  console.log(a[i])
}

console.log('---of---')
for(let i of a){
  console.log(i)
}

console.log('---in---')
for(let i in a) {
  console.log(i)
  console.log(a[i])
}

const b = a.filter(item => item > 2) //对数组中的每一项运行给定函数，返回该函数返回true的项组成的数组

console.log('---filter---')
console.log(b)

console.log('-----map----') // 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
const c = a.map(item => item+1);
console.log(c)

console.log('---includes VS find---')
console.log(a.includes(1))
const isHas = a.find(item => item.toString().indexOf({abc:1}) > -1)
console.log(isHas)

console.log('----some VS eveny ----')
console.log(a.some(item => item >3))  // 对数组的每一项运行给定函数，有一项返回true，则返回true
console.log(a.every(item => item >0))  // 对数组的每一项运行给定函数，需每一项都返回false，才会返回false


console.log('-----reduce-----') // 累加  基础值累加
const result = a.reduce((prev,cur,index,arr)=>prev*cur);
const results = a.reduce((prev,cur,index,arr)=>prev+cur,100);

console.log(result);
console.log(results);


console.log('----reduce源码-----');
Array.prototype.myReduce = function(callback, initialVal){
  var prev = initialVal || this[0];
  console.log(this) // this 表示Array
  console.log(initialVal) // 初始值 少循环一次 少加这个数值
  for(let i = prev ? 0 : 1; i < this.length; i++){
    prev = callback(prev, this[i], i, this);
  }
  return prev
}
const resultss = a.myReduce((prev,cur,index,arr)=>prev+cur,100);
console.log(resultss)

/**
 * 构造函数
 * **/