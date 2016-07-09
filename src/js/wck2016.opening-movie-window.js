/*===========================================================
Window
============================================================*/

function resize() {
	
	resizeMV();
	resize3D();
	resizeWapuu();
	
}


/* Main Visual
--------------------------------------------------------------------*/
function resizeMV(){
	
	var windowRatio = $(window).width() / $(window).height();

	var mv = $('.mv img');
	var width,height,marginLeft,marginTop

	if(params.mv.ratio >= windowRatio){
		params.mv.scale = $(window).height() * params.mv.baseScale / params.mv.height
	}else{
		params.mv.scale = $(window).width() / params.mv.width 
	}
	

	width = params.mv.width * params.mv.scale;
	height = params.mv.height * params.mv.scale;
	marginLeft =  ($(window).width() - width) / 2;

	mv.css({
		width : width + 'px',
		height : height + 'px',
		marginLeft : marginLeft + 'px',
	})
	
	if(!params.mv.start){
		mv.css({
			marginTop : $(window).height() - height + 'px'
		})
	}
}

/* 3D
--------------------------------------------------------------------*/
function resize3D() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer1.setSize( window.innerWidth, window.innerHeight );
	renderer2.setSize( window.innerWidth, window.innerHeight );
	render();
}

/* Wapuu
--------------------------------------------------------------------*/
function resizeWapuu() {
	$('.wapuu').each(function(){
		var height = $(this).height() 
		$(this).css({
			width:height + 'px'
		})
		
		$(this).find('img').css({
			width:height + 'px',
			height:height + 'px'
		})
	})
	
	setHeadphoneWapuuPosition();
}
