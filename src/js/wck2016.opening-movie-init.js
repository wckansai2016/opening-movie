/*===========================================================
Init
============================================================*/


/* Document ready
------------------------------------------------------*/

$(function(){
	audio = document.getElementById('audio');

	
	audio.addEventListener('canplay', function(){
		params.load['audio'] = true;
		loadCheck('audio');
	}, true);
	audio.load();

	
	$.getJSON("json/wp_release.json" , function(data) {
		json = data;
		params.load['json'] = true;
		loadWapuuImages();
		loadCheck('json');
	})
	
	params.load['element'] = true;
	loadCheck('element')
});


/* Document load
------------------------------------------------------*/

$(window).load(function(){
	setImages();
})

/* Wapuu load
------------------------------------------------------*/
function loadWapuuImages() {
    var wcData = json.wc;
	//WordCamp hold date
	var reg=/(.*)(?:\.([^.]+$))/;
	for(var i = 0; i < wcData.length; i++) {
		if('wapuu' in wcData[i]){
			var fileName = wcData[i].wapuu.match(reg)[1]
			params.load[fileName] = false;
			$('<img />').on('load',function(){
				params.load[$(this).attr('alt')]= true;
				loadCheck($(this).attr('alt'));
			}).attr('src','img/wapuu/' + wcData[i].wapuu ).attr('alt',fileName);
		}
	}
}


/* Document load
------------------------------------------------------*/
function loadCheck(param){
	arrow = true;
	for(var key in params.load){
		if(!params.load[key]){
			arrow = false;
			break;
		}
	}
	if(arrow){
		 init();
	}
}

function init() {
	init3D();
	initElement();
	initWindow();
	debugMode();
}




function setImages() {
	/* MV
	--------------------------------------------------------*/
	var mv = new Image();
	var width,height;

	mv.onload = function(){
		params.mv.width = mv.width;
		params.mv.height = mv.height;
		params.mv.ratio = mv.width / mv.height;
		params.load['img'] = true;
		loadCheck('img');
	};
	
	mv.src = $('.mv img').attr('src');

}

function init3D() {
	/* 3D Scene
	--------------------------------------------------------*/
	container = document.getElementById( 'container' );
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, params.date.cameraInitPosition );
	camera.position.x = params['3d'].camera.x;
	camera.position.y = params['3d'].camera.y;
	camera.position.z = params['3d'].camera.z;
	

	layer1 = new THREE.Scene();
	parent1 = new THREE.Object3D;
	layer1.add( parent1 );
	
	layer2 = new THREE.Scene();
	parent2 = new THREE.Object3D;
	layer2.add( parent2 );

	/* Status
	--------------------------------------------------------*/
	stats = new Stats();
	
	$('body').prepend(stats.domElement);
	$(stats.domElement).addClass('stats').css('display', 'none')
	
	
	/* Rendrer
	--------------------------------------------------------*/
	renderer1 = new THREE.CSS3DRenderer({antialias: false, alpha: true});
	renderer1.setClearColor( 0xFFFFFF, 0);
	renderer1.setSize( window.innerWidth, window.innerHeight );
	renderer1.domElement.style.position = 'absolute';
	container.appendChild( renderer1.domElement );
	
	renderer2 = new THREE.WebGLRenderer({ alpha: true });
	renderer2.setClearColor( 0xFFFFFF, 0);
	renderer2.setPixelRatio( window.devicePixelRatio );
	renderer2.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer2.domElement );
	
	reset();

	
	
	
	
}

function initElement() {
	
	createYear()
	createWpRelease();
	createWc();
	
	/* TimeLine
	--------------------------------------------------------*/
	createline(
		{x:0, y:linePositionY, z:params.date.yearStart + params['3d'].offset},
		{x:0, y:linePositionY, z: -params.date.yearLength / 12 * 5 + params['3d'].offset}
	)
	
	$('body').css({
		background:'none'
	})
	
	setStart();
	
}




function initWindow() { 
	window.addEventListener( 'resize', function(){resize()}, false );
	resize();
	
}

function initCurrentTime(){
	
	currentTimer = setInterval(function(){
		setCurrentTime()
	},1000)
}







