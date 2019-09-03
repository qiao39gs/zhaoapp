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
		var userdata = JSON.parse(localStorage.getItem('userdata'));
		document.getElementById("login").innerHTML =
			'<a><img class="mui-media-object mui-pull-left" src="image/zslider/1.jpg">'+
				'<div class="mui-media-body">'+
					localStorage.getItem('user')+
					'<p class="mui-ellipsis">'+userdata[7]+'</p>'+
				'</div>'+
			'</a>';
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