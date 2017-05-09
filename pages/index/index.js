//index.js
import Util from '../../utils/util'

Page({
  data: {
    hotElement: [],
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    toView: 'red',
    scrollTop: 100,
    tabStr: 1,
    title: '',
    heroList: [],
    listItem: [],
    loading: false,
    shareDesc: '为广大游戏爱好者提供高质量、高水平的王者荣耀实战教学视频。'
  },
  onShareAppMessage: function () {
    return {
      title: this.data.title,
      path: '/pages/index/index',
      desc: this.data.shareDesc
    }
  },
  onLoad: function () {
    var that = this
    // 获取英雄分类
    Util.netGET({
      url: '/hero/type-list',
      params: {},
      success: function (res) {
        if (res.code == 0) {
          that.setData({
            heroList: res.data,
            tabStr: res.data[0].id,
            title: '荣耀锦集'
          })
        }
      },
      fail: function (err) {
        console.log('error', res);
      }
    });
    // 获取热门视频
    Util.netGET({
      url: '/element?by=hot',
      params: {},
      success: function (res) {
        if (res.code == 0) {
          that.setData({
            hotElement: res.data.rows
          })
        }
      },
      fail: function (err) {
        console.log('error', res);
      }
    });
    // 获取分类视频第一个列表
    Util.netGET({
      url: '/element?by=type&type_id=1&per_page=6',
      params: {},
      success: function (res) {
        if (res.code == 0) {
          that.setData({
            listItem: res.data.rows
          })
        }
      },
      fail: function (err) {
        console.log('error', res);
      }
    });
    // 获取轮播
    Util.netGET({
      url: '/theme?by=enabled',
      params: {},
      success: function (res) {
        if (res.code == 0) {
          that.setData({
            imgUrls: res.data
          });
        }
      },
      fail: function (err) {
        console.log('error', res);
      }
    });
  },
  tabSwiper: function (e) {
    let _this = this;
    if (this.data.loading) {
      return false;
    }
    this.setData({
      loading: true,
      tabStr: e.currentTarget.dataset.id,
    });
    
    Util.netGET({
      url: `/element?by=type&type_id=${e.currentTarget.dataset.id}&per_page=6`,
      params: {},
      success: function (res) {
        if (res.code == 0) {
          _this.setData({
            loading: false,
            listItem: res.data.rows
          })
        }
      },
      fail: function (err) {
        console.log('error', res);
      }
    });
  },
  //存储数据
  localDataSave: function(e){
    let listData = e.currentTarget.dataset.list;
    let dumpUrl = e.currentTarget.dataset.url;

    console.log('存储数据', e);

    wx.setStorage({
      key: 'listData',
      data: listData,
      success: function(res){
        console.log('success', res);
        wx.navigateTo({
          url: dumpUrl,
          success: function(res){
            console.log('nav-success', res);
          },
          fail: function(res) {
            console.log('nav-fail', res);
          }
        })
      },
      fail: function(res) {
        console.log('fail', res);
      }
    })
  }
})
