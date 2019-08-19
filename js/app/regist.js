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
mui.init();
mui.plusReady(
	function() {
		var Btn = document.getElementById("regBtn")
		Btn.addEventListener('tap', function(){
			var wd = plus.nativeUI.showWaiting();
			var email = document.getElementById("email").value;
			var username = document.getElementById("username").value;
			var pw1 = document.getElementById("userpassword1").value;
			var pw2 = document.getElementById("userpassword2").value;
			if(username == ""){
				mui.alert('请输入用户名！','错误','确定');
				wd.close();
				return;
			}else if(username.length < 2){
				mui.alert('用户名长度过短！','错误','确定');
				wd.close();
				return;
			}else if(username.length > 7){
				mui.alert('用户名长度过长！','错误','确定');
				wd.close();
				return;
			}
			if(pw1.length < 6){
				mui.alert('密码长度过短！','错误','确定');
				wd.close();
				return;
			}else if(pw1.length > 16){
				mui.alert('密码长度过长！','错误','确定');
				wd.close();
				return;
			}else if(pw1 != pw2){
				mui.alert('两次输入的密码不一致！','错误','确定');
				wd.close();
				return;
			}
			var data = {
				"userEmail": document.getElementById("email").value,
				"userName": document.getElementById("username").value,
				"userPassword1":document.getElementById("userpassword1").value,
				"userPassword2":document.getElementById("userpassword2").value,
			};
			postData('http://intertest.top/regist',
				data,
				function(data) {
					wd.close();
					if(data.result == "userExisted") {
						mui.alert("用户名已存在", "注册失败", "关闭");
						return;
					}else{
					mui.toast('注册成功');
					mui.back();
					}
				},
				wd
			); 
		});
	}
);