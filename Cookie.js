
var manageCookie = {
	//设置cookie 
	setCookie: function(name,value,date) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + date);
		document.cookie = name + '=' + value + ';expires=' + oDate;
		//return this返回manageCookie对象，以进行链式调用
		return this;
	},
	//移除cookie 将expires时间设置为负数即可移除
	removeCookie: function(name) {
		return this.setCookie(name,'',-1);
	},
	//获取cookie
	getCookie: function(name,callback) {
		var allCookieStr = document.cookie,
			allCookieArr = allCookieStr.split('; '),
			allCookieArrLen = allCookieArr.length;
		for(var i = 0; i < allCookieArrLen; i++) {
			var itemArr = allCookieArr[i].split('=');
			if(itemArr[0] === name) {
				value = itemArr[1];
				break;
			}
		}
		callback(value);
		return this;
	}
}

//管理cookie 
manageCookie
	.setCookie('name','kfc',4)
	.removeCookie('age')
	.getCookie('name',callback);

function callback(data) {
	console.log(data);
}