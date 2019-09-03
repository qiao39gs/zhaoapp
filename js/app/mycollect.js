mui.init({
	gestureConfig:{
		doubletap: true,
		longtap: true,
	}
});
mui.plusReady(function () {
	user = JSON.parse(localStorage.getItem('userdata'));
	mui.post('http://intertest.top/findcollect',{
		userId:user[0]
	},function(blog){
		t1 = mui('#clist');
		var content = "";
		window.blog;
		window.blog = blog;
		for (var i = 0; i < blog.length; i++) {
			content += '<li class="mui-table-view-cell" data-id="'+i+'">'+
							'<a>'+blog[i][3]+'</a>'+
						'</li></br>';
		}
		t1[0].innerHTML = content;
	},'json'
	);
	mui('#clists').on('tap', 'li', function(){
		console.log(this.getAttribute('data-id'));
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
})