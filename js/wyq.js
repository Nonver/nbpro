/*
使用方法示例 函数，参数
wyq.ajax(function(ret, err, dat) {
	layer.msg(dat.Rows.ds[0].Msg)
}, "AddUser", "get", {}, {});
*/
var wyq = {
	//配置文件
	config: {
		url: "http://8.136.184.238:8084/web/",
		// url:"http://192.168.3.5:8084/web/"
	},
	//请求函数封装ajax
	ajax: function(fun, cmd, pos, data, opt) {
		$.ajax({
			url: wyq.config.url + cmd,
			type: pos,
			data: data,
			success: function(ret, err) {
				var dat = ret.data;
				fun(dat, err);
			}
		});
	},
	//数据处理 缓存的存和取
	data: {
		set: function(keys, valuss) {
			window.localStorage.setItem(keys, valuss);
		},
		get: function(keys, moren) {
			var val = window.localStorage.getItem(keys);
			if (moren != "") {
				if (isNaN(val) || val == null || val == undefined) {
					return moren;
				}
			}
			return window.localStorage.getItem(keys);
		},
		// 函数封装之后需要return返回
		width: function() {
			return $(window).width() - 100 + 'px'
		},
		height: function() {
			return $(window).height() - 100 + 'px';
		}

	}


};
