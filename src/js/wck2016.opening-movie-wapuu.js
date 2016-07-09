function initWapuu()
{
	$('.hover').css({
		top:'-30%',
		left:'-30%'
	})
	
	$('.headphone').css({
		bottom:'-30%',
		right:'-30%'
	})
	
	resizeWapuu();

}




function wapuuAnimationStart()
{
	setTimeout(function(){
		wapuuAnimation1();
		params.scene['3'].wapuu.animation = true;
	},params.scene['3'].wapuu.animation_1.interval)
}

function wapuuAnimation1()
{
	
	var param =params.scene['3'].wapuu.animation_1;
	params.scene['3'].wapuu.windowWidth = $(window).width();
	params.scene['3'].wapuu.windowHeight = $(window).height();
	
	$('.wapuu').show();
	$('.wapuu').css({
		transform: 'scaleX(-1)'
		
	})
	
	
	var pathHover = makePath(param.hover.path);
	var pathHeadphone = makePath(param.headphone.path);
	setWapuuAnimation('hover',param.hover.duration,pathHover,param.easing,true)
	setWapuuAnimation('headphone',param.headphone.duration,pathHeadphone,param.easing,true,function(){
		$('.wapuu').hide();
		wapuuAnimation1End()
	})
	params.scene['3'].wapuu.current = 1;
}

function wapuuAnimation1End()
{
	params.scene['3'].wapuu.animation = false;
	wapuuAnimation2Start()
	
}
function wapuuAnimation2Start()
{
	//Animation 2
	setTimeout(function(){
		wapuuAnimation2();
	},params.scene['3'].wapuu.animation_2.interval)
}

function wapuuAnimation2(){
	var param =params.scene['3'].wapuu.animation_2;

	
	$('.wapuu').show();
	$('.wapuu').css({
		transform: 'scaleX(1)',
	})
	var i = 0;
	$('.wapuu .inner').each(function(){
		var delay = 1000 * i;
		var duration;
		$(this).delay(delay)
			
			.queue(function () { 
				duration = 1 * Math.random() + 2;
				$(this).css({
					animation: 'wapuu-vertical '+ duration +'s ease-in-out infinite alternate'
				}).dequeue();
			
				duration = 1 * Math.random() + 4;
				$(this).find('img').css({
					animation: 'wapuu-horizontal '+ duration +'s ease-in-out infinite alternate'
				})
			})
		i++;
	})

	
	var pathHover = makePath(param.hover.path)
	var pathHeadphone = makePath(param.headphone.path)
	setWapuuAnimation('hover',param.hover.duration,pathHover,param.easing,false)
	setWapuuAnimation('headphone',param.headphone.duration,pathHeadphone,param.easing,false,function(){
		wapuuAnimation2End()
	})
	params.scene['3'].wapuu.current = 2;
}

function wapuuAnimation2End()
{
	wapuuAnimation3Start();
}

function wapuuAnimation3Start()
{
	setTimeout(function(){
		wapuuAnimation_3();
	},params.scene['3'].wapuu.animation_3.interval)
}
function wapuuAnimation_3()
{
	var param =params.scene['3'].wapuu.animation_3;
	var pathHover = makePath(param.hover.path);
	var pathHeadphone = makePath(param.headphone.path);
	setWapuuAnimation('hover',param.hover.duration,pathHover,param.easing,true)
	setWapuuAnimation('headphone',param.headphone.duration,pathHeadphone,param.easing,false,function(){
		wapuuAnimation3End();
	})
	params.scene['3'].wapuu.current = 3;
}

function wapuuAnimation3End()
{
	$('.wapuu').hide();
}



function setWapuuAnimation(wapuu,duration,path,easing,rotate,callBack){
	if(rotate){
		path.rotate()
	}
	$('.' + wapuu).animate({
		bezierPath:path
	},duration,easing,callBack)
}


function setHeadphoneWapuuPosition(){
	if(params.scene['3'].wapuu.current > 0){
		var marginLeft = $(window).width() - params.scene['3'].wapuu.windowWidth;
		var marginTop = $(window).height() - params.scene['3'].wapuu.windowHeight;
		$('.headphone').css({
			marginLeft : marginLeft + 'px',
			marginTop : marginTop + 'px',
		})
		
	}
}
