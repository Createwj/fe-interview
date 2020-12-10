/**
 * 场景：a.b.c.d.e.f 容易报错 不存在的属性
 *
 *  a && a.b && a.b.c && a.b.c.d  繁琐
 *
 *  get(a, a.b.c.d) // 处理方案
 * **/


// 考虑数组的情况  a[3].b
function get(source, path, defaultValue = undefined) {
  const paths = path.replace(/\[(\d+)\]/g, "$1").split(".")
  let result = source;
  for(const p of paths) {
    result = Object(result)[p];
    if(result == undefined){
      return defaultValue
    }
  }
  return result
}

console.log(get({a:{b:1}}, 'a.b.c', {}))