function newProjectWindow() {
  	window.open("https://powerfulech0.github.io/supermegashuffle");
}

$("#portfoliotab").on("click", function() {
	$(".active").removeClass("active");
	$("#portfoliotab").addClass("active");
});

$("#aboutmetab").on("click", function() {
	$(".active").removeClass("active");
	$("#aboutmetab").addClass("active");
});