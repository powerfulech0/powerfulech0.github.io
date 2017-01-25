var supermegashuffle = "https://powerfulech0.github.io/supermegashuffle";
var supermega = "https://www.youtube.com/channel/UCPPc2PdtA7gCMbjYp_i_TKA";
var github = "https://github.com/powerfulech0";
var frandios = "https://onsen.io/blog/onsen-ui-youtube-api-v3/";

function newProjectWindow(url) {
  	window.open(url);
}

$(".supermegashufflelink").on("click", function() {
	newProjectWindow(supermegashuffle);
});

$(".navbar-brand").on("click", function() {
	newProjectWindow(github);
});

$("#supermega").on("click", function() {
	newProjectWindow(supermega);
})

$("#frandios").on("click", function() {
	newProjectWindow(frandios);
})

$("#portfoliotab").on("click", function() {
	$(".active").removeClass("active");
	$("#portfoliotab").addClass("active");
});

$("#aboutmetab").on("click", function() {
	$(".active").removeClass("active");
	$("#aboutmetab").addClass("active");
});