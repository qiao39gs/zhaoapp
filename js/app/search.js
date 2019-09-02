var text = document.getElementById('search');
text.addEventListener('input',function () {
	if(text.value.length <= 10){
		mui.post('http://intertest.top/search',{
			msg:text.value
		},function(tip){
			t1 = mui('#lb');
			var content = "";
			window.tip;
			window.tip = tip;
			for (var i = 0; i < tip.length; i++) {
				content += '<li class="mui-table-view-cell" data-id="'+i+'">'+
								'<a>'+tip[i][1]+'</a>'+
							'</li>';
			}
			t1[0].innerHTML = content;
		},'json'
		);
	}
});
mui('#slists').on('tap', 'li', function(){
		console.log(this.getAttribute('data-id'));
		mui.openWindow({
			url:'indexcontent.html',
			id:'indexcontent',
			extras:{
				blogid:blog[this.getAttribute('data-id')][0]
			}
		})
});
text.addEventListener("keypress",function(event) {
    if(event.keyCode == "13") {
        document.activeElement.blur();
		var keyword = text.value;
        toSearch(keyword);
        event.preventDefault();
    }
});
function toSearch(word){
	mui.post('http://intertest.top/tosearch',{
		msg:text.value
	},function(blog){
		var content = "";
		for (var i = 0; i < blog.length; i++) {
			content += '<li class="mui-table-view-cell" data-id="'+i+'">'+
							'<a>'+blog[i][1]+'</a>'+
						'</li>';
		}
		mui.openWindow({
			url:'searchresult.html',
			id:'searchresult',
			extras:{
				blogid:blog[this.getAttribute('data-id')][0]
			}
		})
	},'json'
	);
}