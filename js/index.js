var timer1;
var index;
var newpro;
var newProimg;
var newProimg2;

window.onload=function()
	{
		timer1=setInterval("move()",33);
		index=document.getElementById("index");
		newpro=index.getElementsByClassName("newPro-content")[0];
		newProimg=newpro.getElementsByClassName("newProimg")[0];
		newProimg2=newpro.getElementsByClassName("newProimg2")[0];
		newProimg2.innerHTML=newProimg.innerHTML;
		console.log(newProimg.innerHTML);
		//当鼠标移到图片上时，清除定时器
		newpro.onmouseover=function()
		{
			clearInterval(timer1);
		}
		//当鼠标移出图片时，开启定时器
		newpro.onmouseout=function()
		{
			timer1=setInterval("move()",33);
		}
	}

	
	function move()
	{
		if(newProimg.offsetWidth<=newpro.scrollLeft)
		{
			
			newpro.scrollLeft=0;
		}
		else
		{
			newpro.scrollLeft+=2;
		}
	}
	


