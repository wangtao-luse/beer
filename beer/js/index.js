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
		console.log($(document).scrollTop());
		var s = $(document).scrollTop();
		//左侧菜单
		if(s>=187.2&&s<1000){
			$("#b_popCtn").css("top",$(document).scrollTop()-187.2);
		}else{
			$("#b_popCtn").css("top",0);
		}
		//右侧导航
		if(s>1000){
			$(".elevator").addClass("elevator_fix");
		}else{
		$(".elevator").removeClass("elevator_fix");	
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
        
    var callbackIndex = 0;
	$('.slider.sliderRecommend .slider_list').mySilder({
		width:190, //容器的宽度 必选参数!!!!!!
		height:470, //容器的高度 必选参数!!!!!!
		auto:true,//是否自动滚动
		autoTime:3, //自动滚动时，时间间隙，即多长滚动一次,单位(秒)
		direction:'x',//滚动方向,默认X方向
		autoType:'left', //滚动方向，auto为true时生效
		few:1,//一次滚动几个，默认滚动1张
		showFew:1, //显示几个,就不用调css了,默认显示一个
		clearance:0, //容器之间的间隙，默认为 0
		silderMode:'linear' ,//滚动方式
		timeGap:350,//动画间隙，完成一次动画需要多长时间，默认700ms
		buttonPre:'.slider_control_prev',//上一个，按钮
		buttonNext:'.slider_control_next',//下一个，按钮
		jz:true, //点击时，是否等待动画完成
		runEnd:function(){//回调函数
			callbackIndex ++ ;
			$('.cj em').text(callbackIndex);
		}
	});
	var callbackIndex = 0;
	$('#1234').mySilder({
		width:790, //容器的宽度 必选参数!!!!!!
		height:720, //容器的高度 必选参数!!!!!!
		auto:true,//是否自动滚动
		autoTime:3, //自动滚动时，时间间隙，即多长滚动一次,单位(秒)
		direction:'x',//滚动方向,默认X方向
		autoType:'left', //滚动方向，auto为true时生效
		few:1,//一次滚动几个，默认滚动1张
		showFew:1, //显示几个,就不用调css了,默认显示一个
		clearance:0, //容器之间的间隙，默认为 0
		silderMode:'linear' ,//滚动方式
		timeGap:350,//动画间隙，完成一次动画需要多长时间，默认700ms
		buttonPre:'.slider_control_prev',//上一个，按钮
		buttonNext:'.slider_control_next',//下一个，按钮
		jz:true, //点击时，是否等待动画完成
		runEnd:function(){//回调函数
			callbackIndex ++ ;
			$('.cj em').text(callbackIndex);
		}
	});
});
