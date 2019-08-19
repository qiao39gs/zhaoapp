function postData(url, data, callback, waitingDialog) {
	mui.ajax(url,{
		data:'data='+JSON.stringify(data),
		dataType:'json',
		type:'post',
		contentType:"application/x-www-form-urlencoded; charset=utf-8",
		timeout:60000,
		success:callback,
		error:function(xhr,type,errorThrown){
			waitingDialog.close();
			mui.alert("网络连接失败，请重新尝试一下", "错误", "OK", null);
		}
	});
}
mui.init({
	beforeback: function(){
		var list = plus.webview.currentWebview().opener();
		mui.fire(list, 'refresh');
		return true;
	}
});
mui.plusReady(
	function() {
		document.getElementById("loginBtn").addEventListener('tap', function(){
			var wd = plus.nativeUI.showWaiting();
			var data = {
				"userName": document.getElementById("username").value,
				"userPassword":document.getElementById("userpassword").value
			};
			var chkRem = document.getElementById("chkRem");
			postData('http://intertest.top/login',
				data,
				function(data) {
					wd.close();
					if(data.result != "checkOK") {
						mui.alert("用户名或密码错误", "登录错误", "关闭");
						return;
					}
					localStorage.setItem("user", document.getElementById("username").value);
					var check = document.getElementById("chkRem");
					if(check.checked)
					{
						var id = document.getElementById("username").value;
						var pwd = document.getElementById("userpassword").value;
						localStorage.setItem("username", id);
						localStorage.setItem("password", pwd);
					}else
					{
						document.getElementById("userpassword").value = "";
						document.getElementById("username").value = "";
						localStorage.removeItem("username"); 
						localStorage.removeItem("password"); 
					}
					var root = JSON.stringify(data.inform);
					mui.toast("你已登录！");
					localStorage.setItem("userdata", root);
					mui.back();
				},
				wd
			); 
		});
		document.getElementById("regBtn").addEventListener('tap', function(){
			mui.openWindow({
				url:'regist.html',
				id:'regist',
			});
		})
	}
);