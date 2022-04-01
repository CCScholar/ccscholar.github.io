var l=[
	["name","writer","teacher","href"],
	["圆周角=1/2圆心角","T.M.D.","T.M.D.","https://cucumbercan.github.io/math/html/main.html?&2022-03-31"],
	["圆: 相交弦定理","T.M.D.","T.M.D.","https://cucumbercan.github.io/math/html/main.html?&2022-04-01.1"],
	["圆: 割线定理","T.M.D.","T.M.D.","https://cucumbercan.github.io/math/html/main.html?&2022-04-01.2"],
	["圆: 垂径定理","T.M.D.","T.M.D.","https://cucumbercan.github.io/math/html/main.html?&2022-04-01.3"],
	["圆: 弦切角定理","T.M.D.","T.M.D.","https://cucumbercan.github.io/math/html/main.html?&2022-04-01.4"],
	
];

function search(){
	var number = 1;
	function Get() {
		urlinfo = window.location.href; //获取当前页面的url
		len = urlinfo.length; //获取url的长度
		offset = urlinfo.indexOf("?"); //设置参数字符串开始的位置
		newsidinfo = urlinfo.substr(offset, len) //取出参数字符串 这里会获得类似“id=1”这样的字符串
		newsids = newsidinfo.split("&"); //对获得的参数字符串按照“=”进行分割
		newsid = newsids[number]; //得到参数值
		newsname = newsids[2]; //得到参数名字
		return newsid;
	}
	number = 1;
	var NAME = decodeURI(Get());
	number = 2;
	var WRI = decodeURI(Get());
	number = 3;
	var TEA = decodeURI(Get());
	
	
	var lst=[];
	
	
	for(var i=0;i<l.length;i++){
		if(l[i][0].indexOf(NAME)!=-1 && l[i][1].indexOf(WRI)!=-1 && l[i][2].indexOf(TEA)!=-1){
			lst.push(l[i])
		}
	}
	
	var s="";
	for (var i = 0; i < lst.length; i++) {
		var name = lst[i][0];
		var wt = lst[i][1];
		var tc = lst[i][2];
		var hf = lst[i][3];
		//s+="<input type=\"button\" value=\"aaa\"/>"
		s += "<div style=\"margin:1vw\"><h2><a href=\""+hf+"\">"+name+"</a></h2><span>作者：</span>"+wt+"<br><span>指导教师：</span>"+tc+"</div><br>";
	}
	
	document.getElementById("DIV").innerHTML = s;
}
