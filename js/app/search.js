document.getElementById("search").addEventListener("keypress",function(event) {
    if(event.keyCode == "13") {
        document.activeElement.blur();//收起虚拟键盘
		var keyword = document.getElementById('search').value;
        toSearch(keyword);//TODO 完成搜索事件
        event.preventDefault(); // 阻止默认事件---阻止页面刷新
    }
});
function toSearch(word){
	mui.toast(word);
}