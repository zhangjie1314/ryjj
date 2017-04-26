let API_BASE_URL = 'https://api.wzry.jiangxianli.com/api'
let requsetHandler = {
  url: '',
  params: {},
  success: function (res) { },
  fail: function (err) { }
}

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function request (method, requsetHandler){
  var params = requsetHandler.params;

  wx.request({
    url: API_BASE_URL + requsetHandler.url,
    data: {},
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function(res){
      // success
      if(res.statusCode == 200){
        requsetHandler.success(res.data);
      }else{
        wx.showToast({title: '请求服务器错误：' + res.status});
      }
    },
    fail: function(res) {
      // fail
      requsetHandler.fail(res);
    },
    complete: function(res) {
      // complete
    }
  })
}

function get(requsetHandler) {
  request('GET', requsetHandler);
}

function post(requsetHandler) {
  request('POST', requsetHandler);
}

export default {
  netGET: get,
  netPOST: post
}