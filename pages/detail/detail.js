//logs.js
import Util from '../../utils/util'
Page({
  data: {
    recommendationData: [],
    videoUrl: ''
  },
  onLoad: function (option) {
    let _this = this;

    // 获取视频地址页面标题
    Util.netGET({
      url: `/element?by=detail&unique_id=${option.id}`,
      params: {},
      success: function (res) {
        if (res.code == 0) {
          _this.setData({
            videoUrl: res.data.url
          });
          wx.setNavigationBarTitle({
            title: res.data.title
          });
        }
      },
      fail: function (err) {
        console.log('error', res);
      }
    });

    // 获取推荐列表
    Util.netGET({
      url: `/element?by=recommend&hero_id=${option.hid}&exclude=${option.id}`,
      params: {},
      success: function (res) {
        if (res.code == 0) {
          _this.setData({
            recommendationData: res.data.rows
          });
        }
      },
      fail: function (err) {
        console.log('error', res);
      }
    });
  }
})
