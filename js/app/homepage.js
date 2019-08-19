mui.init();
mui.plusReady(function(){
	if(localStorage.getItem('userdata') != null && localStorage.getItem('userdata') != ""){
		var userdata = JSON.parse(localStorage.getItem('userdata'));
		document.getElementById("username").innerHTML = userdata[1];
		document.getElementById("class").innerHTML = userdata[5];
		document.getElementById("point").innerHTML = userdata[6];
		document.getElementById("statement").innerHTML = userdata[7];
		document.getElementById("registime").innerHTML = userdata[8];
		document.getElementById("email").innerHTML = userdata[3];
	}
});