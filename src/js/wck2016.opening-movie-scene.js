/*===========================================================
Scene
============================================================*/


function run(){
	if(!params.run){
		params.run = true;
		scene1();
	}
	
	
}

/* Scene1 TimeLine
----------------------------------------------------*/
function scene1(){
	if(params.debug){
		$('.stats').fadeIn();
	}
	
	initCurrentTime();
	setAnimationSpeed(60);
	
	$(container).fadeIn(params.scene['1'].fadeIn);
	
	render();
	audio.play();
	animate();
}

function scene1End(){
    $(container).hide();
    scene2();
}

/* Scene2 Theme
----------------------------------------------------*/
function scene2(){
	params.currentScene = 2;
	// show theme
	var param =params.scene['2'];
	
	setTimeout(function(){
		$('.theme-outer').css({
			display:'table',
		})
		$('.theme').fadeTo(param.fadeIn,1,function(){
				setTimeout(function(){
					$('.theme').fadeOut(param.fadeOut,
						function(){
							scene2End();
						}
					)
				},param.duration)
			})
	},param.interval)
}


function scene2End(){
	$('.theme').hide();
	scene3();
}

/* Scene3 Logo MV
----------------------------------------------------*/
function scene3(){
	params.currentScene = 3;
	var param =params.scene['3'];
	
	
	//Logo Visible Animation
	setTimeout(function(){
		
		//fadeIn
		$('.logo-outer').css({
			display:'table',
			opacity:0
		})
		$('.logo-outer').fadeTo(param.logo.fadeIn,1);
		$('.logo').animate({paddingRight:param.logo.scale},{
			duration:param.logo.duration,
			step:function(now){
				$(this).css({transform:'scale(' + now  + ')'});
			},
			complete:function(){
				
			}
		})
	},param.logo.interval)
	
	//Logo fadeouts
	setTimeout(function(){
		$('.logo-outer').fadeOut(param.logo.fadeOut,function(){
			scene3End();
		})
	},param.logo.fadeOutStart)

	//MV Visible Animation
	setTimeout(function(){
		//fadeIn
		$('.mv-outer').show();
		resizeMV();
		
		$('.mv-outer').fadeTo(param.mv.fadeIn,1);

		params.mv.start = true;
		$('.mv img').animate({
			marginTop : 0
		}, param.mv.duration)
		
		params.scene['3'].mv.start= true;

	},param.mv.interval)
	
	//Wapuu
	wapuuAnimationStart();
	
	//fadeOut
	setTimeout(function(){
		$('.mv-outer').fadeOut(param.mv.fadeOut);
	},param.mv.fadeOutStart)
	

}

function scene3End(){
	sceneEnd();
}

function sceneEnd(){
	sceneReset();
}

function sceneReset(){
	setRestart();
}


