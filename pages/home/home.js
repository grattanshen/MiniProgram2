// pages/home/home.js
Page({
  data:{
    name : 'Hello World',
    age : 18,
    students : [
      {id:'001', name:'张三', age:23},
      {id:'002', name:'李四', age:25},
      {id:'005', name:'王五', age:28}
    ],
    counter : 0
  },
  handleBtnClick(){
    // console.log('点击.');
    // this.data.counter++;
    // console.log(this.data.counter);
    this.setData({
      counter : this.data.counter + 1
    })
  }
})