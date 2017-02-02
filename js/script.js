var supermegashuffle = "https://powerfulech0.github.io/supermegashuffle";
var supermega = "https://www.youtube.com/channel/UCPPc2PdtA7gCMbjYp_i_TKA";
var siteaw = "https://siteaw.org";
var oldsiteaw = "https://siteawinc.org";
var github = "https://github.com/powerfulech0";
var linkedin = "https://www.linkedin.com/in/gregoryrearden/";
var frandios = "https://onsen.io/blog/onsen-ui-youtube-api-v3/";

function newProjectWindow(url) {
  	window.open(url);
}

$(".supermegashufflelink").on("click", function() {
	newProjectWindow(supermegashuffle);
});

$(".siteawlink").on("click", function() {
	newProjectWindow(siteaw);
});

$("#supermega").on("click", function() {
	newProjectWindow(supermega);
});

$("#oldsiteaw").on("click", function() {
	newProjectWindow(oldsiteaw);
});

$("#frandios").on("click", function() {
	newProjectWindow(frandios);
});

$("#github").on("click", function() {
	newProjectWindow(github);
});

$("#linkedin").on("click", function() {
	newProjectWindow(linkedin);
});

$("#portfoliotab").on("click", function() {
	$(".active").removeClass("active");
	$("#portfoliotab").addClass("active");
});

$("#aboutmetab").on("click", function() {
	$(".active").removeClass("active");
	$("#aboutmetab").addClass("active");
});

$("#contacttab").on("click", function() {
	$(".active").removeClass("active");
	$("#contacttab").addClass("active");
});