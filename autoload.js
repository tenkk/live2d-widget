
const live2d_path = "https://cdn.statically.io/gh/tenkk/live2d-widget/master/";

$("<link>").attr({ href: live2d_path + "waifu.css?env=dev", rel: "stylesheet" }).appendTo("head");

//加载live2d.min.js
$.ajax({
	url: live2d_path + "live2d.min.js?env=dev",
	dataType: "script",
	cache: true
});

//加载waifu-tips.js
$.ajax({
	url: live2d_path + "waifu-tips.js?env=dev",
	dataType: "script",
	cache: true
});

//初始化看板娘，会自动加载指定目录下的waifu-tips.json
$(window).on("load", function() {
	initWidget(live2d_path + "waifu-tips.json?env=dev", "https://live2d.fghrsh.net/api");
});
