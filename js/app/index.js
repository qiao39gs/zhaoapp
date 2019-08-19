function changeView(id){
	var view = plus.webview.getWebviewById(id);
	view.show();
}
mui.init({
	subpages:[{
		url:'index.html',
		id:'index'
	},{
		url:'perinf.html',
		id:'setting',
		styles:{top:'44px', bottom:'44px'}
	}], 
	preloadPages:[
		{
			url:'perinf.html',
			id:'perinf'
		}
	]
})
mui.plusReady(function(){
	var slider = mui('.mui-slider');
	slider.slider({interval:2000});
	var indexs = plus.webview.getWebviewById('index');
	indexs.show(); 
	document.getElementById('home').addEventListener('tap', function(){
		changeView('index');
	});
	document.getElementById('setting').addEventListener('tap', function(){
		changeView('setting');
	});
});