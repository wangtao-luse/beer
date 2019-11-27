$(function(){
	//左侧菜单
	$("#b_cate .cate_menu_item").mouseenter(function(){
        var index=$(this).attr("data-index");
        $(this).addClass("cate_menu_item_on");
		$("#b_popCtn").css("display","block");
		$("#b_popCtn .cate_part").css("display","none");
		$("#cate_item"+index).css("display","block");
	});	
	$("#b_cate .cate_menu_item").mouseleave(function(){
		var index=$(this).attr("data-index");
		$(this).removeClass("cate_menu_item_on");
		$("#b_popCtn").css("display","none");
	});
	$("#b_popCtn").hover(function(){
		$("#b_popCtn").css("display","block");
	});
	$("#b_popCtn").mouseleave(function(){
		$("#b_popCtn").css("display","none");
	});
	
});
