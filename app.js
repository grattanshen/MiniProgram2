App({
  /**   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）   */
  onLaunch: function () {
    console.log("onLaunch -- 小程序初始化");
    wx.getUserInfo({
      complete: (res) => {console.log(res)},
    })
    setTimeout(function() {
      console.log("定时器被触发了");
    }, 3000);
  },
  /**   * 当小程序启动，或从后台进入前台显示，会触发 onShow   */
  onShow: function (options) {
    console.log("onShow -- 小程序显示");
    console.log(options);
  },
  /**   * 当小程序从前台进入后台，会触发 onHide   */
  onHide: function () {
    console.log("onHide -- 小程序隐藏");
  },
  /**   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息   */
  onError: function (msg) {
  }
})
