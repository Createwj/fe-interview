/**
 * Promise
 *
 * pending 进行中 fulfilled 成功 rejected 失败
 *
 *
 * **/


function myPromise(constructor) {
  const self = this
  self.status = 'pending'
  self.value = undefined
  self.reason = undefined
  function resolve(value) {
    console.log(self.status)
    if(self.status === 'pending'){
      self.value = value
      self.status = 'resolve'
    }
  }
  function reject(reason) {
    console.log(self.status)
    if(self.status === 'pending'){
      self.reason = reason
      self.status = 'rejected'
    }
  }
  try{
    constructor(resolve, reject)
  }catch (e) {
    reject(e)
  }
}

myPromise.prototype.then = function (onFullfilled, onRejected = () => {}) {
  let self = this
  switch (self.status) {
    case "resolve": onFullfilled(self.value);break;
    case "rejected": onRejected(self.reason);break;
    default:
  }
}

var p = new myPromise(function (resolve,reject) {
  resolve(1)
})
p.then(function (x) {
  console.log(x)
})