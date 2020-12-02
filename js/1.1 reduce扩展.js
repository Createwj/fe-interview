const a = [1,2,3,4,5];
// 数组
const b = a.reduce((pre,cur,index,arr) => {
  return pre + cur; // 循环四次
})
console.log(b)

// 数组对象累加
const object = [{name:'tom0', num: 2},{name:'tom1', num: 3},{name:'tom2', num: 4},{name:'tom3', num: 5}]
const c = object.reduce((pre,cur,index,obj) => pre + cur.num,[])
console.log(c)

// 二维数组 转1
const twoarr = [[1,2],[3,4],[5,6]]
const d = twoarr.reduce((pre,cur,index) => pre.concat(cur))
console.log(d);

// 数组中最多个数
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
const e = names.reduce((allName, name) => {
  name in allName ? allName[name]++ : allName[name] = 1;
  return allName
},[])
console.log(e)