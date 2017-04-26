//index.js
import Util from '../../utils/util'

Page({
  data: {
    hotElement: [],
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
    tabStr: 1,
    title: '',
    heroList: [],
    listItem: [],
    loading: false
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
      url: '/element?by=type&type_id=1',
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
      url: `/element?by=type&type_id=${e.currentTarget.dataset.id}`,
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
  }
})
