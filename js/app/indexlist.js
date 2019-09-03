mui.init({
	gestureConfig:{
		doubletap: true,
		longtap: true,
	}
});
mui.plusReady(function () {
	mui.getJSON(
		'http://intertest.top/zaolists',
		function(blog){
			//console.log(JSON.stringify(blog));
			t1 = mui('#zlist');
			var content = "";
			window.blog;
			window.blog = blog;
			for (var i = 0; i < blog.length; i++) {
				content += '<li class="mui-table-view-cell mui-media" data-id="'+i+'">'+
							'<a href="javascript:;">'+
							'<img class="mui-media-object mui-pull-right" src="image/zslider/1.jpg">'+
							'<div class="mui-media-body">'+blog[i][3]+
							'<p class="mui-ellipsis">'+blog[i][4]+
							'</p></div></a></li>';
			}
			t1[0].innerHTML = content;
		},'json'
	);
	mui('#zlists').on('tap', 'li', function(){
		mui.openWindow({
			url:'indexcontent.html',
			id:'indexcontent',
			extras:{
				blogid:blog[this.getAttribute('data-id')][0],
				title:blog[this.getAttribute('data-id')][3],
				content:blog[this.getAttribute('data-id')][4]
			}
		})
	});
	document.getElementById("hotlist").addEventListener('tap',function(){
		mui.toast('tap');
		document.getElementById("zlists").style.display="none";
		document.getElementById("hotlists").style.display="block";
	})
	document.getElementById("followlist").addEventListener('tap',function(){
		mui.toast('tap');
		document.getElementById("zlists").style.display="block";
		document.getElementById("hotlists").style.display="none";
	})
	document.getElementById("contents").addEventListener("swipeleft", function() {
		document.getElementById("zlists").style.display="none";
		document.getElementById("hotlists").style.display="block";
	});
	document.getElementById("contents").addEventListener("swiperight", function() {  
		document.getElementById("zlists").style.display="block";
		document.getElementById("hotlists").style.display="none";
	});
});