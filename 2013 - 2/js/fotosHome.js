$(function(){
	$("#fotos li").mouseenter(function(){
		$(this).parent().find("li").removeClass("active");
		if($(this).not(".active")) $(this).addClass("active");
	});
});