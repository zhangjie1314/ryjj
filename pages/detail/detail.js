//logs.js
Page({
  data: {
    recommendationData: [{
      videoImg: '../../assets/img/bg_01.jpg',
      videoTitle: '某视频频某某某视频某某某视频某某某视频某某某视频某视频频某某某视频某某某视频某某某视频某某某视频',
      videoPlayNumber: 10000
    }, {
      videoImg: '../../assets/img/bg_01.jpg',
      videoTitle: '某视频频某某某视频某某某视频某某某视频某某某视频某视频频某某某视频某某某视频某某某视频某某某视频',
      videoPlayNumber: 10009
    }, {
      videoImg: '../../assets/img/bg_01.jpg',
      videoTitle: '某视频频某某某视频某某某视频某某某视频某某某视频某视频频某某某视频某某某视频某某某视频某某某视频',
      videoPlayNumber: 10078
    }, {
      videoImg: '../../assets/img/bg_01.jpg',
      videoTitle: '某视频频某某某视频某某某视频某某某视频某某某视频某视频频某某某视频某某某视频某某某视频某某某视频',
      videoPlayNumber: 10090
    }, {
      videoImg: '../../assets/img/bg_01.jpg',
      videoTitle: '某视频频某某某视频某某某视频某某某视频某某某视频某视频频某某某视频某某某视频某某某视频某某某视频',
      videoPlayNumber: 10040
    }, {
      videoImg: '../../assets/img/bg_01.jpg',
      videoTitle: '某视频频某某某视频某某某视频某某某视频某某某视频某视频频某某某视频某某某视频某某某视频某某某视频',
      videoPlayNumber: 10540
    }]
  },
  onLoad: function (option) {
    console.log('loading in', option);
    wx.setNavigationBarTitle({
      title: '当前页面'
    });
  }
})
