Page({
    data: {
        tabStr: 'tk',
        loading: false,
        lists: [
            {
                imgUrl: '../../assets/img/bg_02.jpg',
                videoTitle: '鲁班',
                videoUrl: '../detail/detail',
                videoTime: '09:45',
                pageviews: '10K',
                commend: '100'
            }, {
                imgUrl: '../../assets/img/bg_01.jpg',
                videoTitle: '赵云',
                videoUrl: '../detail/detail',
                videoTime: '09:45',
                pageviews: '10K',
                commend: '100'
            }, {
                imgUrl: '../../assets/img/bg_03.jpg',
                videoTitle: '韩信',
                videoUrl: '../detail/detail',
                videoTime: '09:45',
                pageviews: '10K',
                commend: '100'
            }, {
                imgUrl: '../../assets/img/bg_02.jpg',
                videoTitle: '亚瑟',
                videoUrl: '../detail/detail',
                videoTime: '09:45',
                pageviews: '10K',
                commend: '100'
            }, {
                imgUrl: '../../assets/img/bg_01.jpg',
                videoTitle: '项羽',
                videoUrl: '../detail/detail',
                videoTime: '09:45',
                pageviews: '10K',
                commend: '100'
            }, {
                imgUrl: '../../assets/img/bg_02.jpg',
                videoTitle: '诸葛亮',
                videoUrl: '../detail/detail',
                videoTime: '09:45',
                pageviews: '10K',
                commend: '100'
            }, {
                imgUrl: '../../assets/img/bg_03.jpg',
                videoTitle: '甄姬',
                videoUrl: '../detail/detail',
                videoTime: '09:45',
                pageviews: '10K',
                commend: '100'
            }, {
                imgUrl: '../../assets/img/bg_02.jpg',
                videoTitle: '程咬金',
                videoUrl: '../detail/detail',
                videoTime: '09:45',
                pageviews: '10K',
                commend: '100'
            }, {
                imgUrl: '../../assets/img/bg_01.jpg',
                videoTitle: '曹操',
                videoUrl: '../detail/detail',
                videoTime: '09:45',
                pageviews: '10K',
                commend: '100'
            }, {
                imgUrl: '../../assets/img/bg_02.jpg',
                videoTitle: '芈月',
                videoUrl: '../detail/detail',
                videoTime: '09:45',
                pageviews: '10K',
                commend: '100'
            }
        ],
        loadingText: '最后一页了'
    },
    onLoad: () => {
        console.log(this);
    },
    onPullDownRefresh: () => {
        console.log('刷新');
    },
    onReachBottom: function () {
        let _this = this;
        let updataJson = [{
            imgUrl: '../../assets/img/bg_02.jpg',
            videoTitle: '鲁班',
            videoUrl: '../detail/detail',
            videoTime: '09:45',
            pageviews: '10K',
            commend: '100000'
        }, {
            imgUrl: '../../assets/img/bg_02.jpg',
            videoTitle: '鲁班',
            videoUrl: '../detail/detail',
            videoTime: '09:45',
            pageviews: '10K',
            commend: '100000'
        }, {
            imgUrl: '../../assets/img/bg_02.jpg',
            videoTitle: '鲁班',
            videoUrl: '../detail/detail',
            videoTime: '09:45',
            pageviews: '10K',
            commend: '100000'
        }, {
            imgUrl: '../../assets/img/bg_02.jpg',
            videoTitle: '鲁班',
            videoUrl: '../detail/detail',
            videoTime: '09:45',
            pageviews: '10K',
            commend: '100000'
        }];
        let lists = _this.data.lists.concat(updataJson);
        if (this.data.loading) {
            return false;
        }
        this.setData({
            loading: true,
            loadingText: '拼命加载中···'
        });
        wx.showLoading({
            title: '加载中'
        });

        setTimeout(function () {
            wx.hideLoading();
            _this.setData({
                lists: lists,
                loading: false,
                loadingText: '最后一页了'
            });
        }, 2000);
        console.log('下一页');
    }
});