/**
 *  发布订阅模式
 * **/

class EventEmitter {
  constructor() {
    // 事件对象 存放订阅的名字和事件
    this.events = {}
  }

  on(eventName, callback) {
    if(!this.events[eventName]){
      this.events[eventName] = [callback]
    }else{
      this.events[eventName].push(callback)
    }
  }

  emit(eventNames) {
    this.events[eventNames] && this.events[eventNames].forEach(cd => cd())
  }

  removeListener(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName] && this.events[eventName].filter(cb => cb !== callback)
    }
  }

  once(eventName, callback) {
    let fn = () => {
      callback();
      this.removeListener(eventName, fn)
    }
  }
}

// 使用发布订阅
let em = new EventEmitter()
let workday = 0;