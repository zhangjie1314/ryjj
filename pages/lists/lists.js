import Util from '../../utils/util'

Page({
    data: {
        tabStr: 'tk',
        loading: false,
        lists: [],
        loadingText: '',
        curPage: 1,
        heroId: 1,
        isAllVideo: false
    },
    onLoad: function (option) {
        let _this = this;
        if(option.type && option.type == "local"){
            wx.getStorage({
              key: 'listData',
              success: function(res){
                // success
                _this.setData({
                    lists: res.data,
                    isAllVideo: true
                });
              },
              fail: function(res) {
                // fail
                console.log('err', res);
              }
            })
        }else{
            // 获取第一页英雄视频列表
            Util.netGET({
                url: `/element?by=hero&hero_id=${option.id}`,
                params: {},
                success: function (res) {
                    if (res.code == 0) {
                        _this.setData({
                            lists: res.data.rows,
                            heroId: option.id,
                            curPage: res.data.current_page
                        });
                    }
                },
                fail: function (err) {
                    console.log('error', res);
                }
            });
        }
    },
    onPullDownRefresh: () => {
        console.log('刷新');
    },
    onReachBottom: function () {
        let _this = this;
        if (this.data.loading) {
            return false;
        }
        if(!_this.data.isAllVideo){
            this.setData({
                loading: true,
                loadingText: '拼命加载中···'
            });
            Util.netGET({
                url: `/element?by=hero&hero_id=${this.data.heroId}&page=${this.data.curPage + 1}`,
                params: {},
                success: function (res) {
                    if (res.code == 0) {
                        let lists = _this.data.lists.concat(res.data.rows);
                        _this.setData({
                            lists: lists,
                            loading: false,
                            curPage: res.data.current_page,
                            loadingText: '最后一页了'
                        });
                    }
                },
                fail: function (err) {
                    console.log('error', res);
                }
            });
        }
    }
});