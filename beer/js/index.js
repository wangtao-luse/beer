$(function(){
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
	$(window).scroll(function(){
		//console.log($(document).scrollTop());
		var s = $(document).scrollTop();
		if(s>=187.2&&s<1000){
			$("#b_popCtn").css("top",$(document).scrollTop()-187.2);
		}else{
			$("#b_popCtn").css("top",0);
		}
		
	});
	var bannerSlider = new Slider($('.slider_list'), {
            time: 5000,
            delay: 400,
            event: 'hover',
            auto: true,
            mode: 'fade',
            controller: $('.slider_indicators'),
            activeControllerCls: 'slider_indicators_btn_active'
        });
       $('.sliderBanner .slider_control_prev').click(function() {
            bannerSlider.prev();
        });
        $('.sliderBanner .slider_control_next').click(function() {
            bannerSlider.next();
        });
});
