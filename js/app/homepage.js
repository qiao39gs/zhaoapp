mui.init();
mui.plusReady(function(){
	if(localStorage.getItem('userdata') != null && localStorage.getItem('userdata') != ""){
		var userdata = JSON.parse(localStorage.getItem('userdata'));
		document.getElementById("username").innerHTML = '<a><img class="mui-media-object mui-pull-left" src="image/zslider/1.jpg">'+
				'<div class="mui-media-body">'+
					localStorage.getItem('user')+
					'<p class="mui-ellipsis">等级：'+userdata[5]+'</p>'+
				'</div>'+
			'</a>';
		document.getElementById("class").innerHTML = userdata[5];
		document.getElementById("point").innerHTML = userdata[6];
		document.getElementById("statement").innerHTML = userdata[7];
		document.getElementById("registime").innerHTML = userdata[8];
		document.getElementById("email").innerHTML = userdata[3];
	}
});