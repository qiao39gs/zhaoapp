mui.init();
mui.plusReady(function () {
	var sData = plus.webview.currentWebview();
	var title1 = mui('#title');
	var content = mui('#content');
	var Thump = mui('#thump');
	title1[0].innerHTML = sData.title;
	content[0].innerHTML = sData.content;
	mui.post('http://intertest.top/findthump',{
			blogId:sData.blogid
		},function(data){
			Thump[0].innerHTML = data.result;
		},'json'
	);
	user = JSON.parse(localStorage.getItem('userdata'));
	var ThumpAC = "thumpUser"+user[0]+"Blog"+sData.blogid;
	var CollectAC = "collectUser"+user[0]+"Blog"+sData.blogid;
	if(localStorage.getItem(ThumpAC) != null && localStorage.getItem(ThumpAC) != ""){
		if(localStorage.getItem(ThumpAC) == "Thump"){
			document.getElementById("good").style.color = "red";
		}
	}else{
		localStorage.setItem(ThumpAC, "None");
		document.getElementById("good").style.color = "#929292";
	}
	if(localStorage.getItem(CollectAC) != null && localStorage.getItem(CollectAC) != ""){
		if(localStorage.getItem(CollectAC) == "Collect"){
			document.getElementById("collect").style.color = "cadetblue";
		}
	}else{
		localStorage.setItem(CollectAC, "None");
		document.getElementById("collect").style.color = "#929292";
	}
	document.getElementById("good").addEventListener('tap',function(){
		if(localStorage.getItem('user') != null && localStorage.getItem('user') != ""){
			mui.post('http://intertest.top/thump',{
					userId:user[0],
					blogId:sData.blogid
				},function(data){
					if(data.result=="thumpTrue"){
						document.getElementById("good").style.color = "red";
						Thump[0].innerHTML = parseInt(Thump[0].innerHTML) + 1;
						localStorage.setItem(ThumpAC, "Thump");
					}else if(data.result=="thumpCanceled"){
						document.getElementById("good").style.color = "#929292";
						Thump[0].innerHTML = parseInt(Thump[0].innerHTML) - 1;
						localStorage.setItem(ThumpAC, "None");
					}
				},'json'
			);
		}else{
			mui.toast("你还未登录!");
		}
	})
	document.getElementById("collect").addEventListener('tap',function(){
		if(localStorage.getItem('user') != null && localStorage.getItem('user') != ""){
			mui.post('http://intertest.top/collect',{
					userId:user[0],
					blogId:sData.blogid
				},function(data){
					if(data.result=="collectTrue"){
						document.getElementById("collect").style.color = "cadetblue";
						localStorage.setItem(CollectAC, "Collect");
					}else if(data.result=="collectCanceled"){
						document.getElementById("collect").style.color = "#929292";
						localStorage.setItem(CollectAC, "None");
					}
				},'json'
			);
		}else{
			mui.toast("你还未登录!");
		}
	})
})