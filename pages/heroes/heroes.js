Page({
    data: {
        tabStr: 'ss',
        loading: false,
        heroes: [
            {
                photo: '../../assets/img/bg_02.jpg',
                heroName: '鲁班',
                url: '../lists/lists'
            }, {
                photo: '../../assets/img/bg_01.jpg',
                heroName: '赵云',
                url: '../lists/lists'
            }, {
                photo: '../../assets/img/bg_03.jpg',
                heroName: '韩信',
                url: '../lists/lists'
            }, {
                photo: '../../assets/img/bg_02.jpg',
                heroName: '亚瑟',
                url: '../lists/lists'
            }, {
                photo: '../../assets/img/bg_01.jpg',
                heroName: '项羽',
                url: '../lists/lists'
            }, {
                photo: '../../assets/img/bg_02.jpg',
                heroName: '诸葛亮',
                url: '../lists/lists'
            }, {
                photo: '../../assets/img/bg_03.jpg',
                heroName: '甄姬',
                url: '../lists/lists'
            }, {
                photo: '../../assets/img/bg_02.jpg',
                heroName: '程咬金',
                url: '../lists/lists'
            }, {
                photo: '../../assets/img/bg_01.jpg',
                heroName: '曹操',
                url: '../lists/lists'
            }, {
                photo: '../../assets/img/bg_02.jpg',
                heroName: '芈月',
                url: '../lists/lists'
            }
        ]
    },
    onLoad: () => {
        console.log(this);
    },
    tabSwiper: function (e) {
        if (this.data.loading) {
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
                heroes: [
                    {
                        photo: '../../assets/img/bg_02.jpg',
                        heroName: '鲁班',
                        url: '../lists/lists'
                    }, {
                        photo: '../../assets/img/bg_01.jpg',
                        heroName: '赵云',
                        url: '../lists/lists'
                    }, {
                        photo: '../../assets/img/bg_03.jpg',
                        heroName: '韩信',
                        url: '../lists/lists'
                    }, {
                        photo: '../../assets/img/bg_02.jpg',
                        heroName: '亚瑟',
                        url: '../lists/lists'
                    }, {
                        photo: '../../assets/img/bg_01.jpg',
                        heroName: '项羽',
                        url: '../lists/lists'
                    }, {
                        photo: '../../assets/img/bg_02.jpg',
                        heroName: '诸葛亮',
                        url: '../lists/lists'
                    }, {
                        photo: '../../assets/img/bg_03.jpg',
                        heroName: '甄姬',
                        url: '../lists/lists'
                    }, {
                        photo: '../../assets/img/bg_02.jpg',
                        heroName: '程咬金',
                        url: '../lists/lists'
                    }, {
                        photo: '../../assets/img/bg_01.jpg',
                        heroName: '曹操',
                        url: '../lists/lists'
                    }
                ]
            });
        }, 2000);

        // util.getListData();
    }
});