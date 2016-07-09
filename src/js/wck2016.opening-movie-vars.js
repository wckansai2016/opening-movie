/*===========================================================
Variables
============================================================*/

var container;


/* 3D Scene
------------------------------------------------------*/
var camera, layer1, layer2, renderer1, renderer2;
var controls;
var stats;
var objects = [];
var json;

//
/* 3DOjbects
------------------------------------------------------*/
var parent1,parent2;

/* Params
------------------------------------------------------*/
var params = {};

//position
//var wpXLength = 100;
var yRamdom = 300;

//timing
var linePositionY = -20;



//debug
params.debug = false;


//date
params.date = {
	now : new Date(),
	yearLength : 1000,
	monthNames : ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
}
params.date.yearStart = (new Date().getFullYear() -2003) * params.date.yearLength,
params.date.cameraInitPosition = params.date.yearStart + 500;

var currentTimer;



/* Load
------------------------------------------------------*/
params.load ={
	json : false,
	element : false,
	img : false,
	audio : false,
	
}


/* 3D
------------------------------------------------------*/
params['3d'] = {
	
    fps:60,
	fpsCheck:false,
    speed : 0,
    audio : '',
	offset : 2000,
    enableRender : true,
	start : - params.date.yearStart - params.date.yearLength * 3,
	goal : 0,
	wpXLength : 100,
	wcXLength : 100,
	yLength : 100,
	yRamdom : 50,
	camera : {x:0,y:50,z:500}
	
}

params['3d'].current = params['3d'].start;




/* Main Visual
------------------------------------------------------*/
params.mv ={
	width : 1920,
	height: 864,
	ratio : 1.0,
	scale : 1.0,
	baseScale : 1.5
}

/* Scene
------------------------------------------------------*/


params.scene = {}
params.currentScene = 1;



//Scene1
params.scene['1'] = { 
	interval:1000,
    fadeIn:2000,
    duration:21000,
	currentTime:0
}

//Scene2
params.scene['2'] ={
    interval:1000,
    fadeIn:2000,
    fadeOut:2000,
    duration:3500
}


//Scene3
params.scene['3'] ={
	
	logo:{
		interval:1000,
		fadeIn : 2000,
		scale : 1.3,
		duration : 10000,
		fadeOutStart : 24000,
		fadeOut : 4000,
	},
	mv:{
		interval:4000,
		fadeIn : 5000,
		duration : 12000,
		fadeOutStart : 22000,
		fadeOut : 4000,
		
	},

	wapuu:{
		animation:false,
		current : 0,
		windowWidth:0,
		windowHeight:0,
		animation_1:{
			interval:6000,
			easing:'linear',
			hover:{
				startDelay:200,
				start:{left:'130%',top:'130%'},
				goal:{left:'-30%',top:'-30%'},
				duration:1000,
				path:[
					{x:0.9,y:1.3},
					{x:0.5,y:-0.8},
					{x:-0.3,y:-0.3},
				]
			},
			headphone:{
				startDelay:0,
				start:{left:'-30%',top:'-30%'},
				goal:{left:'130%',top:'130%'},
				duration:1000,
				path:[
					{x:-0.1,y:-0.3},
					{x:0.5,y:1.2},
					{x:1.3,y:0.9},
				]
			}
		},
		animation_2:{
			interval:2000,
			easing:'easeOutQuad',
			hover:{
				start:{left:'-30%',top:'-30%'},
				goal:{left:'3%',top:'3%'},
				
				duration:5000,
				path:[
					{x:-0.3,y:-0.1},
					{x:-0.1,y:0.3},
					{x:0.1,y:0.1},
				]
			},
			headphone:{
				start:{right:'-30%',bottom:'-30%'},
				goal:{right:'3%',bottom:'-5%'},
				duration:5000,
				path:[
					{x:1.1,y:0.9},
					{x:1.1,y:0.4},
					{x:0.8,y:0.7},
				]
			}
		},
		animation_3:{
			interval:9000,
			easing:'linear',
			hover:{
				goal:{left:'130%',top:'90%'},
				duration:500,
				path:[
					{x:0.1,y:0.1},
					{x:0.5,y:0.1},
					{x:1.3,y:0.9},
				]
			},
			headphone:{
				goal:{right:'130%',bottom:'90%'},
				duration:500,
				
				path:[
					{x:0.8,y:0.7},
					{x:0.4,y:0.9},
					{x:-0.3,y:0.1},
				]
			}
		},
	}
}




/*
//Scene1
params.scene['1'] = { 
    interval:100,
    fadeIn:1000,
    duration:1000,
	currentTime:0
	
}

//Scene2
params.scene['2'] ={
	interval:0,
	fadeIn:10,
    fadeOut:10,
    duration:100
}


params.scene['3'] ={
	logo:{
		interval:0,
		fadeIn : 1000,
		scale : 1.3,
		duration : 10000,
		fadeOutStart : 28000,
		fadeOut : 3000,
	},
	mv:{
		interval:1000,
		fadeIn : 2000,
		duration : 12000,
		fadeOutStart : 18000,
		fadeOut : 3000,
		start : false,
		marginTop : 30,
		marginAnimation : 0
		
	},
	wapuu:{
		animation:false,
		animation_1:{
			interval:6000,
			easing:'linear',
			hover:{
				startDelay:200,
				start:{left:'130%',top:'130%'},
				goal:{left:'-30%',top:'-30%'},
				duration:1000,
				path:[
					{x:0.9,y:1.3},
					{x:0.5,y:-0.8},
					{x:-0.3,y:-0.3},
				]
			},
			headphone:{
				startDelay:0,
				start:{left:'-30%',top:'-30%'},
				goal:{left:'130%',top:'130%'},
				duration:1000,
				path:[
					{x:-0.1,y:-0.3},
					{x:0.5,y:1.2},
					{x:1.3,y:0.9},
				]
			}
		},
		animation_2:{
			interval:3000,
			easing:'easeOutQuad',
			hover:{
				start:{left:'-30%',top:'-30%'},
				goal:{left:'3%',top:'3%'},
				
				duration:5000,
				path:[
					{x:-0.3,y:-0.1},
					{x:-0.1,y:0.3},
					{x:0.1,y:0.1},
				]
			},
			headphone:{
				start:{right:'-30%',bottom:'-30%'},
				goal:{right:'3%',bottom:'-5%'},
				duration:5000,
				path:[
					{x:1.1,y:0.9},
					{x:1.1,y:0.4},
					{x:0.8,y:0.7},
				]
			}
		},
		animation_3:{
			interval:8000,
			easing:'linear',
			hover:{
				goal:{left:'130%',top:'90%'},
				duration:500,
				path:[
					{x:0.1,y:0.1},
					{x:0.5,y:0.1},
					{x:1.3,y:0.9},
				]
			},
			headphone:{
				goal:{right:'130%',bottom:'90%'},
				duration:500,
				
				path:[
					{x:0.7,y:0.6},
					{x:0.4,y:0.9},
					{x:-0.3,y:0.1},
				]
			}
		},
	}
}


*/






