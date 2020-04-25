// pages/input/input.js
Page({
  data: {

  },
  handleInput(event) {
    console.log('用户输入内容', event.detail.value)    
  },
  handleFocus() {
    console.log('获取焦点')
  },
  handleBlur() {
    console.log('失去焦点')
  }
})