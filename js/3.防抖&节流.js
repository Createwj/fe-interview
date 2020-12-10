/**
 * 防抖
 *    1。事件被触发n秒后执行回调
 * **/
$(function () {
  function reduceExpenditure(fn, wait) {
    var timer = null;
    var startTime = Date.now();
    return function () {
      var curTime = Date.now();
      var remaining = wait - (curTime - startTime);
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      if (remaining <= 0) {
        fn.apply(context, args);
        startTime = Date.now();
      } else {
        timer = setTimeout(fn, remaining);
      }
    };
  }
  var debounce = (() => {
    let timer = null;
    return (fn, duration) => function(...args){
      if(timer != null) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, duration);
    }
  })();

  function add() {
    console.log('add')
  }
  function dcc() {
    console.log('dcc')
  }



  $('.btn').click(function () {
    reduceExpenditure(add,2000)()
    debounce(dcc,2000)()
  })
})