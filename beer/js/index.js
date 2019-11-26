$(function(){
	$("#b_cate .cate_menu_item").hover(function(){
		$("#b_popCtn").css("display","block");
		var index=$(this).attr("data-index");
		$("#cate_item"+index).css("display","block");
	});
});
