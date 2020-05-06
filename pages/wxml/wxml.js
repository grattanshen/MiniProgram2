// pages/wxml/wxml.js
Page({
  data: {
    mes:'你好小程序',
    str1:"你好",
    str2:"小程序",
    age:22,
    nowTime: new Date().toLocaleString(),
    IsBox: true
  },
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },100)
  },
  handleBtn() {
      this.setData({
        IsBox: !this.data.IsBox
      })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})