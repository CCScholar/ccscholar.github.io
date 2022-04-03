var l = [
	["name", "writer", "teacher", "href"],
	["圆周角=1/2圆心角", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-03-31"],
	["圆: 相交弦定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-01.1"],
	["圆: 割线定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-01.2"],
	["圆: 垂径定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-01.3"],
	["圆: 弦切角定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-01.4"],

	["圆: 圆幂定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-02.2"],
	["圆: 切割线定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-02.7"],
	["圆: 相交弦定理逆定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-02.6"],
	["圆: 相交弦定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-02.5"],
	["圆: 割线定理逆定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-02.4"],
	["圆: 割线定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-02.3"],
	["圆: 托勒密定理", "T.M.D.", "T.M.D.", "https://cucumbercan.github.io/math/html/main.html?&2022-04-02.1"],

];

function similar(s, t, f) {
	if (!s || !t) {
		return 0
	}
	var l = s.length > t.length ? s.length : t.length
	var n = s.length
	var m = t.length
	var d = []
	f = f || 3
	var min = function(a, b, c) {
		return a < b ? (a < c ? a : c) : (b < c ? b : c)
	}
	var i, j, si, tj, cost
	if (n === 0) return m
	if (m === 0) return n
	for (i = 0; i <= n; i++) {
		d[i] = []
		d[i][0] = i
	}
	for (j = 0; j <= m; j++) {
		d[0][j] = j
	}
	for (i = 1; i <= n; i++) {
		si = s.charAt(i - 1)
		for (j = 1; j <= m; j++) {
			tj = t.charAt(j - 1)
			if (si === tj) {
				cost = 0
			} else {
				cost = 1
			}
			d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
		}
	}
	let res = (1 - d[n][m] / l)
	return res.toFixed(f)
}

function search() {
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



	var lst = [];
	var ntp = [];


	for (var i = 0; i < l.length; i++) {
		var tmp1=l[i][0].toLowerCase()
		var tmp2=l[i][1].toLowerCase()
		var tmp3=l[i][2].toLowerCase()
		while(tmp2.indexOf('.')!=-1){
			tmp2=tmp2.replace('.','')
		}
		while(tmp3.indexOf('.')!=-1){
			tmp3=tmp3.replace('.','')
		}
		while(WRI.indexOf('.')!=-1){
			WRI=WRI.replace('.','')
		}
		while(TEA.indexOf('.')!=-1){
			TEA=TEA.replace('.','')
		}
		
		console.log(l[i][1])
		if (tmp1.indexOf(NAME) != -1 && tmp2.indexOf(WRI) != -1 && tmp3
			.indexOf(TEA) != -1) {
			lst.push(l[i])
		}else if(similar(tmp1, NAME) >= 0.5 || similar(tmp2, WRI) > 0.9 || similar(tmp3, TEA) > 0.9) {
			ntp.push(l[i])
		}
	}

	var s = "";
	for (var i = 0; i < lst.length; i++) {
		var name = lst[i][0];
		var wt = lst[i][1];
		var tc = lst[i][2];
		var hf = lst[i][3];
		//s+="<input type=\"button\" value=\"aaa\"/>"
		s += "<div style=\"margin:1vw\"><h2><a href=\"" + hf + "\">" + name + "</a></h2><span>作者：</span>" + wt +
			"<br><span>指导教师：</span>" + tc + "</div><br>";
	}

	document.getElementById("DIV").innerHTML = s;
	
	var s = "";
	for (var i = 0; i < ntp.length; i++) {
		var name = ntp[i][0];
		var wt = ntp[i][1];
		var tc = ntp[i][2];
		var hf = ntp[i][3];
		//s+="<input type=\"button\" value=\"aaa\"/>"
		s += "<div style=\"margin:1vw\"><h2><a href=\"" + hf + "\">" + name + "</a></h2><span>作者：</span>" + wt +
			"<br><span>指导教师：</span>" + tc + "</div><br>";
	}
	
	document.getElementById("D90").innerHTML = s;
}
