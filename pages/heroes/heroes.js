import Util from '../../utils/util'

Page({
    data: {
        tabStr: 1,
        loading: false,
        heroList: [],
        heroes: []
    },
    onShareAppMessage: function () {
      return {
        title: '荣耀锦集',
        path: '/pages/heroes/heroes',
        desc: '为广大游戏爱好者提供高质量、高水平的王者荣耀实战教学视频。'
      }
    },
    onLoad: function () {
        var _this = this;
        // 获取英雄分类
        Util.netGET({
            url: '/hero/type-list',
            params: {},
            success: function (res) {
                if (res.code == 0) {
                    _this.setData({
                        heroList: res.data,
                        tabStr: res.data[0].id
                    })
                }
            },
            fail: function (err) {
                console.log('error', res);
            }
        });

        // 获取第一页数据
        Util.netGET({
            url: '/hero?by=type_id&type_id=1&per_page=100',
            params: {},
            success: function (res) {
                if (res.code == 0) {
                    // success
                    _this.setData({
                        heroes: res.data.rows
                    });
                }
            },
            fail: function (err) {
                console.log('error', res);
            }
        });
    },
    tabSwiper: function (e) {
        if (this.data.loading) {
            return false;
        }
        this.setData({
            loading: true,
            tabStr: e.currentTarget.dataset.id,
        });
        // wx.showLoading({
        //     title: '加载中'
        // });
        var _this = this;
        // 获取英雄列表
        Util.netGET({
            url: `/hero?by=type_id&type_id=${e.currentTarget.dataset.id}&per_page=100`,
            params: {},
            success: function (res) {
                if (res.code == 0) {
                    // success
                    wx.hideLoading();
                    _this.setData({
                        loading: false,
                        heroes: res.data.rows
                    });
                }
            },
            fail: function (err) {
                console.log('error', res);
            }
        });
    }
});