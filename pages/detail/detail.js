//logs.js
import Util from '../../utils/util'
Page({
  data: {
    playNum: 0,
    raiseNum: 0,
    vid:'',
    hid:'',
    recommendationData: [],
    videoUrl: '',
    poster: '',
    isAddPlayNum: false,
    isRaiseNum: false,
    title: ''
  },
  onShareAppMessage: function () {
    console.log('pages/detail/detail?hid=' + this.data.hid + '&id=' + this.data.vid);
    return {
      title: this.data.title,
      path: 'pages/detail/detail?hid=' + this.data.hid + '&id=' + this.data.vid,
      desc: '为广大游戏爱好者提供高质量、高水平的王者荣耀实战教学视频。'
    }
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
            playNum: res.data.play_num,
            raiseNum: res.data.raise_num,
            videoUrl: res.data.url,
            poster: res.data.poster,
            vid: option.id,
            hid: option.hid,
            title: res.data.title
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
  },
  addPlayNum: function(){
    const _this = this;
    if(!this.data.isAddPlayNum){
      Util.netPOST({
        url: `/element/operate?by=add_play_num&unique_id=${this.data.vid}`,
        params: {},
        success: function (res) {
          console.log(res);
          if (res.code == 0) {
            _this.setData({
              isAddPlayNum: true
            });
          }
        },
        fail: function (err) {
          console.log('error', res);
        }
      });
    }
  },
  raiseNumFun: function(){
    const _this = this;

    if(!this.data.isRaiseNum){
      Util.netPOST({
        url: `/element/operate?by=add_raise_num&unique_id=${this.data.vid}`,
        params: {},
        success: function (res) {
          console.log(res);
          if (res.code == 0) {
            _this.setData({
              isRaiseNum: true,
              raiseNum: _this.data.raiseNum + 1
            });
          }
        },
        fail: function (err) {
          console.log('error', res);
        }
      });
    }else{
      wx.showToast({
        title: '您以点过赞咯！'
      });
    }
  }
})
