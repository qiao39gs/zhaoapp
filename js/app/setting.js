function changeView(id){
	var view = plus.webview.getWebviewById(id);
	view.show();
}
window.addEventListener('refresh',function(){
     location.reload();
})
mui.init({
	preloadPages:[
		{
			url:'login.html',
			id:'login'
		},
		{
			url:'homepage.html',
			id:'homepage',
		},
		{
			url:'mycollect.html',
			id:'mycollect',
		}
	]
})
mui.plusReady(function(){
	if(localStorage.getItem('user') != null && localStorage.getItem('user') != ""){
		document.getElementById("login").innerHTML = localStorage.getItem('user');
		document.getElementById('login').addEventListener('tap', function(){
			changeView('homepage');
		});
		document.getElementById('mycollect').addEventListener('tap',function () {
			mui.openWindow({
				url:'mycollect.html',
				id:'mycollect',
			})
		})
		document.getElementById('logout').addEventListener('tap', function(){
			localStorage.removeItem("user");
			mui.toast('你已退出登录！');
			location.reload();
		});
	}else{
		document.getElementById("login").innerHTML = "登录";
		document.getElementById('login').addEventListener('tap', function(){
			changeView('login');
		});
		document.getElementById('mycollect').addEventListener('tap',function () {
			mui.toast('你还尚未登录！');
		})
		document.getElementById('logout').addEventListener('tap', function(){
			mui.toast('你还尚未登录！');
		});
	}
	document.getElementById('clear').addEventListener('tap', function(){
		localStorage.clear();
		mui.toast('缓存清除成功！');
	});
});