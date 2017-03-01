
//轮播
var bannerWidth;
var bannerImg;
var timer;
var count=0;

//新闻动态
var goodsWidth;
var goodsImg;
var timerNew;
var countNew=0;

$(document).ready(function(){
	/***************轮播*************************/
	bannerWidth=$(".banner").width();
	$(".bannerImg a").width(bannerWidth);
	$(".banner-icon span").eq(0).css("background","#000000").siblings().css("background","#fff");
	bannerImg=$(".bannerImg a").length;
	timer=setInterval("donghua()",3000);
	$(".banner-icon span").click(function(){
		clearInterval(timer);
		var icoNum=$(this).index();
		count=icoNum;
		$(".bannerImg").stop(true).animate({left:"-"+bannerWidth*count+"px"},1000);
		$(".banner-icon span").eq(count).css("background","#000000").siblings().css("background","#fff");
	})
	$(".banner").mouseover(function(){
		clearInterval(timer);
	})
	$(".banner").mouseout(function(){
		timer=setInterval("donghua()",3000);
	})
	
	/****************新闻动态--轮播***************/
	goodsWidth=$(".goods-wrap").width();
	$(".goods-icon span").eq(0).css("background","#000000").siblings().css("background","#fff");
	goodsImg=$(".goodsImg a").length;
	timerNew=setInterval("donghuaNew()",3000);
	$(".goods-icon span").click(function(){
		clearInterval(timerNew);
		var icoNum=$(this).index();
		countNew=icoNum;
		$(".goodsImg").stop(true).animate({left:"-"+goodsWidth*countNew+"px"},1000);
		$(".goods-icon span").eq(count).css("background","#000000").siblings().css("background","#fff");
	})
	$(".goods-wrap").mouseover(function(){
		clearInterval(timerNew);
	})
	$(".goods-wrap").mouseout(function(){
		timerNew=setInterval("donghuaNew()",3000);
	})
	
	/*********************留言系统****************************/
	var state1=false;
	var state2=false;
	var state3=false;
	
	$("#message-form .username").blur(function(){
		var username=$(this).val();
		if(username.length<=0)
		{
			$(this).siblings(".tip").addClass("messTip");
		}
		else{
			$(this).siblings(".tip").removeClass("messTip");
			
			state1=true;
		}
	})
	
	$("#message-form textarea").blur(function(){
		var textare=$(this).val();
		if(textare=="")
		{
			$(this).siblings(".tip").addClass("messTip");
		}
		else{
			$(this).siblings(".tip").removeClass("messTip");
			state2=true;
		}
	})
	
	$("#message-form .yam .tip").hide();
	$("#message-form .yzmVarify").blur(function(){
		var yzmVlue=$(this).val().toLocaleLowerCase();
		var yz=$("#message-form .yzmNum").text().toLocaleLowerCase();
		if(yzmVlue!=yz)
		{
			$("#message-form .yam .tip").show();
			$(this).siblings(".tip").addClass("messTip");
		}
		else{
			$(this).siblings(".tip").removeClass("messTip");
			$("#message-form .yam .tip").hide();
			state3=true;
		}
		
	})
	
	$("#message-form .sub-btn").click(function(){
		if(state1 && state2 && state3)
		{
		  $("#message-form .sub-btn").submit();	
		}
		else
		{
			return false;
		}
	})
	
	//验证码
	function creat_code(){
		var arr=['1','r','Q','4','S','6','w','u','D','I','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',  
                 'q','2','s','t','8','v','7','x','y','z','A','B','C','9','E','F','G','H','0','J','K','L','M','N','O','P','3','R',  
                 '5','T','U','V','W','X','Y','Z'];
 		return arr.sort(function(){
 			return (Math.random()-.5);
 		})
	}
	creat_code();
	
	function show_code(){
		var str="";
		var code=creat_code();
		for(var i=0;i<6;i++)
		{
			str+=code[i];
		}
		$("#message-form .yam .yzmNum").text(str);
	}
	show_code();
	
	$("#message-form .yam .yzmNum").click(function(){
		show_code();
	})
	
	
	
	
	
})

/***轮播**/
function donghua(){
		if(count>=bannerImg)
		{
			$(".bannerImg").animate({left:"0px"},1000);
			$(".banner-icon span").eq(0).css("background","#000000").siblings().css("background","#fff");
			count=0;
			
		}
		$(".bannerImg").stop(true).animate({left:"-"+bannerWidth*count+"px"},1000);
		$(".banner-icon span").eq(count).css("background","#000000").siblings().css("background","#fff");
		count++;
		
}

/*****新闻动态**/
function donghuaNew(){
		if(countNew>=goodsImg)
		{
			$(".goodsImg").animate({left:"0px"},1000);
			$(".goods-icon span").eq(0).css("background","#000000").siblings().css("background","#fff");
			countNew=0;
			
		}
		$(".goodsImg").stop(true).animate({left:"-"+goodsWidth*countNew+"px"},1000);
		$(".goods-icon span").eq(countNew).css("background","#000000").siblings().css("background","#fff");
		countNew++;
		
}