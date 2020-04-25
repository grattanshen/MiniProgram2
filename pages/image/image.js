// pages/image/image.js
Page({
  data: {
    imagepath : ''
  },
  handleChooseAlnum(){
    wx.chooseImage({
      complete: (res) => {
        const path = res.tempFilePaths[0];
        this.setData({ imagepath : path})
      },
    })
  }
})