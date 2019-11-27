$(function(){
	$("#b_cate .cate_menu_item").mouseenter(function(){
        var index=$(this).attr("data-index");
		$("#b_popCtn").css("display","block");		
		$("#cate_item"+index).css("display","block");
	});
	
	$("#b_cate .cate_menu_item").mouseleave(function(){
		var index=$(this).attr("data-index");		
		$("#cate_item"+index).css("display","none");
		$("#b_popCtn").css("display","none");
	});
	$("#b_popCtn").hover(function(){
		$("#b_popCtn").css("display","block");
	});
	$("#b_popCtn").mouseleave(function(){
		$("#b_popCtn").css("display","none");
	});
	
});
