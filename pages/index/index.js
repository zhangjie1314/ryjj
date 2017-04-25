//index.js
//获取应用实例
var app = getApp()
var order = ['red', 'yellow', 'blue', 'green', 'red']
var util = require('../../utils/util.js');
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    toView: 'red',
    scrollTop: 100,
    tabStr: 'ss',
    title: '',
    listItem: [{
      imgUrl: '../../assets/img/bg_01.jpg',
      jUrl: '../logs/logs',
      title: 'title1'
    }, {
      imgUrl: '../../assets/img/bg_02.jpg',
      jUrl: '../logs/logs',
      title: 'title2'
    }, {
      imgUrl: '../../assets/img/bg_03.jpg',
      jUrl: '../logs/logs',
      title: 'title3'
    }, {
      imgUrl: '../../assets/img/bg_02.jpg',
      jUrl: '../logs/logs',
      title: 'title4'
    }],
    loading: false
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        title: '荣耀锦集'
      })
    })
  },
  tabSwiper: function (e) {
    if(this.data.loading){
      return false;
    }
    this.setData({
      loading: true,
      tabStr: e.currentTarget.dataset.id,
    });
    wx.showLoading({
      title: '加载中'
    });
    var _this = this;
    setTimeout(function () {
      wx.hideLoading();
      _this.setData({
        loading: false,
        listItem: [{
          imgUrl: '../../assets/img/bg_03.jpg',
          jUrl: '../logs/logs',
          title: 'title1'
        }, {
          imgUrl: '../../assets/img/bg_02.jpg',
          jUrl: '../logs/logs',
          title: 'title2'
        }, {
          imgUrl: '../../assets/img/bg_01.jpg',
          jUrl: '../logs/logs',
          title: 'title3'
        }, {
          imgUrl: '../../assets/img/bg_03.jpg',
          jUrl: '../logs/logs',
          title: 'title4'
        }]
      });
    }, 2000);

    // util.getListData();
  }
})
