function search(){
	var name=document.getElementById("name").value.toLowerCase();
	var wri=document.getElementById("writer").value.toLowerCase();
	var tea=document.getElementById("teacher").value.toLowerCase();
	window.location.href="s.html?&"+name+"&"+wri+"&"+tea;
}

function sear(str){
	window.location.href="html/main.html?&"+str;
}