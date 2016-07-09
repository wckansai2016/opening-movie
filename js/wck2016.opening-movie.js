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
var parent1, parent2;

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
    now: new Date(),
    yearLength: 1000,
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
params.date.yearStart = (new Date().getFullYear() - 2003) * params.date.yearLength,
    params.date.cameraInitPosition = params.date.yearStart + 500;

var currentTimer;



/* Load
------------------------------------------------------*/
params.load = {
    json: false,
    element: false,
    img: false,
    audio: false,

}


/* 3D
------------------------------------------------------*/
params['3d'] = {

    fps: 60,
    fpsCheck: false,
    speed: 0,
    audio: '',
    offset: 2000,
    enableRender: true,
    start: -params.date.yearStart - params.date.yearLength * 3,
    goal: 0,
    wpXLength: 100,
    wcXLength: 100,
    yLength: 100,
    yRamdom: 50,
    camera: {
        x: 0,
        y: 50,
        z: 500
    }

}

params['3d'].current = params['3d'].start;




/* Main Visual
------------------------------------------------------*/
params.mv = {
    width: 1920,
    height: 864,
    ratio: 1.0,
    scale: 1.0,
    baseScale: 1.5
}

/* Scene
------------------------------------------------------*/


params.scene = {}
params.currentScene = 1;



//Scene1
params.scene['1'] = {
    interval: 1000,
    fadeIn: 2000,
    duration: 21000,
    currentTime: 0
}

//Scene2
params.scene['2'] = {
    interval: 1000,
    fadeIn: 2000,
    fadeOut: 2000,
    duration: 3500
}


//Scene3
params.scene['3'] = {

    logo: {
        interval: 1000,
        fadeIn: 2000,
        scale: 1.3,
        duration: 10000,
        fadeOutStart: 24000,
        fadeOut: 4000,
    },
    mv: {
        interval: 4000,
        fadeIn: 5000,
        duration: 12000,
        fadeOutStart: 22000,
        fadeOut: 4000,

    },

    wapuu: {
        animation: false,
        current: 0,
        windowWidth: 0,
        windowHeight: 0,
        animation_1: {
            interval: 6000,
            easing: 'linear',
            hover: {
                startDelay: 200,
                start: {
                    left: '130%',
                    top: '130%'
                },
                goal: {
                    left: '-30%',
                    top: '-30%'
                },
                duration: 1000,
                path: [{
                    x: 0.9,
                    y: 1.3
                }, {
                    x: 0.5,
                    y: -0.8
                }, {
                    x: -0.3,
                    y: -0.3
                }, ]
            },
            headphone: {
                startDelay: 0,
                start: {
                    left: '-30%',
                    top: '-30%'
                },
                goal: {
                    left: '130%',
                    top: '130%'
                },
                duration: 1000,
                path: [{
                    x: -0.1,
                    y: -0.3
                }, {
                    x: 0.5,
                    y: 1.2
                }, {
                    x: 1.3,
                    y: 0.9
                }, ]
            }
        },
        animation_2: {
            interval: 2000,
            easing: 'easeOutQuad',
            hover: {
                start: {
                    left: '-30%',
                    top: '-30%'
                },
                goal: {
                    left: '3%',
                    top: '3%'
                },

                duration: 5000,
                path: [{
                    x: -0.3,
                    y: -0.1
                }, {
                    x: -0.1,
                    y: 0.3
                }, {
                    x: 0.1,
                    y: 0.1
                }, ]
            },
            headphone: {
                start: {
                    right: '-30%',
                    bottom: '-30%'
                },
                goal: {
                    right: '3%',
                    bottom: '-5%'
                },
                duration: 5000,
                path: [{
                    x: 1.1,
                    y: 0.9
                }, {
                    x: 1.1,
                    y: 0.4
                }, {
                    x: 0.8,
                    y: 0.7
                }, ]
            }
        },
        animation_3: {
            interval: 9000,
            easing: 'linear',
            hover: {
                goal: {
                    left: '130%',
                    top: '90%'
                },
                duration: 500,
                path: [{
                    x: 0.1,
                    y: 0.1
                }, {
                    x: 0.5,
                    y: 0.1
                }, {
                    x: 1.3,
                    y: 0.9
                }, ]
            },
            headphone: {
                goal: {
                    right: '130%',
                    bottom: '90%'
                },
                duration: 500,

                path: [{
                    x: 0.8,
                    y: 0.7
                }, {
                    x: 0.4,
                    y: 0.9
                }, {
                    x: -0.3,
                    y: 0.1
                }, ]
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







/*===========================================================
Init
============================================================*/


/* Document ready
------------------------------------------------------*/

$(function() {
    audio = document.getElementById('audio');


    audio.addEventListener('canplay', function() {
        params.load['audio'] = true;
        loadCheck('audio');
    }, true);
    audio.load();


    $.getJSON("json/wp_release.json", function(data) {
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

$(window).load(function() {
    setImages();
})

/* Wapuu load
------------------------------------------------------*/
function loadWapuuImages() {
    var wcData = json.wc;
    //WordCamp hold date
    var reg = /(.*)(?:\.([^.]+$))/;
    for (var i = 0; i < wcData.length; i++) {
        if ('wapuu' in wcData[i]) {
            var fileName = wcData[i].wapuu.match(reg)[1]
            params.load[fileName] = false;
            $('<img />').on('load', function() {
                params.load[$(this).attr('alt')] = true;
                loadCheck($(this).attr('alt'));
            }).attr('src', 'img/wapuu/' + wcData[i].wapuu).attr('alt', fileName);
        }
    }
}


/* Document load
------------------------------------------------------*/
function loadCheck(param) {
    arrow = true;
    for (var key in params.load) {
        if (!params.load[key]) {
            arrow = false;
            break;
        }
    }
    if (arrow) {
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
    var width, height;

    mv.onload = function() {
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
    container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, params.date.cameraInitPosition);
    camera.position.x = params['3d'].camera.x;
    camera.position.y = params['3d'].camera.y;
    camera.position.z = params['3d'].camera.z;


    layer1 = new THREE.Scene();
    parent1 = new THREE.Object3D;
    layer1.add(parent1);

    layer2 = new THREE.Scene();
    parent2 = new THREE.Object3D;
    layer2.add(parent2);

    /* Status
    --------------------------------------------------------*/
    stats = new Stats();

    $('body').prepend(stats.domElement);
    $(stats.domElement).addClass('stats').css('display', 'none')


    /* Rendrer
    --------------------------------------------------------*/
    renderer1 = new THREE.CSS3DRenderer({
        antialias: false,
        alpha: true
    });
    renderer1.setClearColor(0xFFFFFF, 0);
    renderer1.setSize(window.innerWidth, window.innerHeight);
    renderer1.domElement.style.position = 'absolute';
    container.appendChild(renderer1.domElement);

    renderer2 = new THREE.WebGLRenderer({
        alpha: true
    });
    renderer2.setClearColor(0xFFFFFF, 0);
    renderer2.setPixelRatio(window.devicePixelRatio);
    renderer2.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer2.domElement);

    reset();





}

function initElement() {

    createYear()
    createWpRelease();
    createWc();

    /* TimeLine
    --------------------------------------------------------*/
    createline({
        x: 0,
        y: linePositionY,
        z: params.date.yearStart + params['3d'].offset
    }, {
        x: 0,
        y: linePositionY,
        z: -params.date.yearLength / 12 * 5 + params['3d'].offset
    })

    $('body').css({
        background: 'none'
    })

    setStart();

}




function initWindow() {
    window.addEventListener('resize', function() {
        resize()
    }, false);
    resize();

}

function initCurrentTime() {

    currentTimer = setInterval(function() {
        setCurrentTime()
    }, 1000)
}








/*===========================================================
Data
============================================================*/
function loadImages() {
    var wcData = json.wc;
    //WordCamp hold date
    for (var i = 0; i < wcData.length; i++) {

        if ('wapuu' in wcData[i]) {
            params.load.wapuu.push(false);
            $('<img />').on('load', function() {
                params.load.wapuu[parseInt($(this).attr('alt'))] = true;
                loadCheck()

            }).attr('src', 'img/wapuu/' + wcData[i].wapuu).attr('alt', i);
        }

    }
}

/*===========================================================
History
============================================================*/

//Year 
function createYear() {
    var currentYear = params.date.now.getFullYear();
    for (var i = 2003; i < currentYear + 1; i++) {
        var src = '<h2 class="year">' + i + '</h2>';
        var element = createElement(src);
        var object = createSprite(element, i);
        object.position.x = 0;
        object.position.y = -60;

        createPoint('s', {
            x: 0,
            y: linePositionY,
            z: getZPosition(i)
        })
    }
}

function createWpRelease() {
    //WordPress release date
    var wp = $("#wp"),
        wc = $("#wc");
    var wpData = json.wp;
    var param = params['3d'];

    for (var i = 0; i < wpData.length; i++) {
        var date = dateFix(wpData[i].date)
        var src = '<span class="date">' + date + '<span><h2>v' + wpData[i].version + ' ' + wpData[i].codename + '</h2>';
        var element = createElement(src);
        $(element).addClass = "wp";
        var object = createSprite(element, wpData[i].date);
        object.position.x = param.wpXLength * Math.cos(60 * i / 180 * Math.PI) + param.wpXLength * 2;

        if (i % 2 == 0) {
            object.position.y = param.yLength + param.yRamdom * (Math.random() - 0.5);
        } else {
            object.position.y = -param.yLength + param.yRamdom * (Math.random() - 0.5);
        }



        createPoint('s', {
            x: object.position.x,
            y: object.position.y,
            z: object.position.z
        })
        createline({
            x: object.position.x - 0,
            y: object.position.y,
            z: object.position.z
        }, {
            x: 0,
            y: linePositionY,
            z: object.position.z
        })


    }

}

function createWc() {
    var wcData = json.wc;
    var param = params['3d'];

    //WordCamp hold date
    for (var i = 0; i < wcData.length; i++) {
        var date = dateFix(wcData[i].date)
        var src = '<span class="date">' + date + '</span>' + '<h2>' + wcData[i].name + '</h2>'
        if ('wapuu' in wcData[i]) {
            src += '<img src="img/wapuu/' + wcData[i].wapuu + '" alt="' + wcData[i].name + '" />'
        }

        var element = createElement(src);
        $(element).addClass('wc');

        var object = createSprite(element, wcData[i].date);
        object.position.x = param.wcXLength * Math.cos(60 * i / 180 * Math.PI) - param.wcXLength * 2;

        if (i % 2 == 0) {
            object.position.y = param.yLength + param.yRamdom * (Math.random() - 0.5);
        } else {
            object.position.y = -param.yLength + param.yRamdom * (Math.random() - 0.5);
        }

        createPoint('s', {
            x: object.position.x,
            y: object.position.y,
            z: object.position.z
        })


        createline({
            x: object.position.x,
            y: object.position.y,
            z: object.position.z
        }, {
            x: 0,
            y: linePositionY,
            z: object.position.z
        })
    }

}


/*===========================================================
Wapuu Animation Path
============================================================*/
function makePath(pathData) {
    var path;
    for (var i = 0; i < pathData.length; i++) {
        var x = coordinateX(pathData[i]['x'])
        var y = coordinateY(pathData[i]['y'])
        if (i == 0) {
            path = $.bezierCurve(x, y);
        } else {
            path.addPoint(x, y);
        }
    }
    return path;
}

/*===========================================================
3D Animation
============================================================*/

function setCurrentTime() {
    params.scene['1'].currentTime++;
}

function cancelCurrentTime() {
    clearInterval(currentTimer)
}

function fpsCheck(_fps) {
    if (params['3d'].fpsCheck) {
        setAnimationSpeed(_fps)
    } else {
        params['3d'].fpsCheck = true;
    }

}


function setAnimationSpeed(_fps) {


    var remainTime = params.scene['1'].duration - params.scene['1'].currentTime * 1000;
    params['3d'].speed = -current / (remainTime / 1000 * _fps);
}

/*===========================================================
3D coordinate
============================================================*/
function coordinateX(percent) {
    return $(window).width() * percent;
}

function coordinateY(percent) {
    return $(window).height() * percent;
}

/*===========================================================
Elements
============================================================*/
function createElement(_src) {
    var element = document.createElement('div');
    $(element).addClass('element');
    $(element).html(_src);
    return element;
}

function createSprite(_element, date) {
    var object = new THREE.CSS3DSprite(_element);
    object.position.z = getZPosition(date);
    parent1.add(object);
    return object;

}

function createPoint(size, position) {
    var point = document.createElement('div');
    $(point).addClass('point point-' + size);
    var pointObject = new THREE.CSS3DSprite(point);
    pointObject.position.x = position.x;
    pointObject.position.y = position.y;
    pointObject.position.z = position.z;
    parent1.add(pointObject);
}

function createline(v1, v2) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(v1.x, v1.y, v1.z));
    geometry.vertices.push(new THREE.Vector3(v2.x, v2.y, v2.z));
    var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
        color: 0xcccccc
    }));
    parent2.add(line);
}


function dateFix(_date) {
    var split = _date.split('/')
    var monthNum = parseInt(split[0].replace('0', '')) - 1;

    var month = params.date.monthNames[monthNum];
    var date = month + ' / ' + split[1] + ' / ' + split[2];
    return date;

}





function getZPosition(date) {

    var currentYear = params.date.now.getFullYear() - 2003;
    var fixPosition = (currentYear - 3) / 2;

    date = date.toString()
    var split = date.split('/');
    var position;



    if (split) {
        var year = parseInt(split[split.length - 1]) - 2003;
        if (split.length > 1) {
            var month = parseInt(split[0]) / 12;
            var dayNumber = 31;
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                dayNumber = 30;
            } else if (month == 2) {
                if (month % 4 == 0) {
                    dayNumber = 29;
                } else {
                    dayNumber = 28;
                }
            }
            var day = parseInt(split[1]) / dayNumber;
            var dayLength = params.date.yearLength / 12 / dayNumber;
            position = params.date.yearStart - params.date.yearLength * year - params.date.yearLength * month - dayLength;
        } else {
            position = params.date.yearStart - params.date.yearLength * year;
        }

    }

    position += params['3d'].offset;

    return position;
}

function setStart() {
    // Run
    $('.start a').click(function() {
        run();
        $(this).fadeOut();
    })
    $('.start').css({
        display: 'flex'
    })
}

function setRestart() {
    /*
    setTimeout(function(){
    	$('.start').html('Restart').fadeIn();
    },2000)
    */
    params.run = false;

}




function initWapuu() {
    $('.hover').css({
        top: '-30%',
        left: '-30%'
    })

    $('.headphone').css({
        bottom: '-30%',
        right: '-30%'
    })

    resizeWapuu();

}




function wapuuAnimationStart() {
    setTimeout(function() {
        wapuuAnimation1();
        params.scene['3'].wapuu.animation = true;
    }, params.scene['3'].wapuu.animation_1.interval)
}

function wapuuAnimation1() {

    var param = params.scene['3'].wapuu.animation_1;
    params.scene['3'].wapuu.windowWidth = $(window).width();
    params.scene['3'].wapuu.windowHeight = $(window).height();

    $('.wapuu').show();
    $('.wapuu').css({
        transform: 'scaleX(-1)'

    })


    var pathHover = makePath(param.hover.path);
    var pathHeadphone = makePath(param.headphone.path);
    setWapuuAnimation('hover', param.hover.duration, pathHover, param.easing, true)
    setWapuuAnimation('headphone', param.headphone.duration, pathHeadphone, param.easing, true, function() {
        $('.wapuu').hide();
        wapuuAnimation1End()
    })
    params.scene['3'].wapuu.current = 1;
}

function wapuuAnimation1End() {
    params.scene['3'].wapuu.animation = false;
    wapuuAnimation2Start()

}

function wapuuAnimation2Start() {
    //Animation 2
    setTimeout(function() {
        wapuuAnimation2();
    }, params.scene['3'].wapuu.animation_2.interval)
}

function wapuuAnimation2() {
    var param = params.scene['3'].wapuu.animation_2;


    $('.wapuu').show();
    $('.wapuu').css({
        transform: 'scaleX(1)',
    })
    var i = 0;
    $('.wapuu .inner').each(function() {
        var delay = 1000 * i;
        var duration;
        $(this).delay(delay)

        .queue(function() {
            duration = 1 * Math.random() + 2;
            $(this).css({
                animation: 'wapuu-vertical ' + duration + 's ease-in-out infinite alternate'
            }).dequeue();

            duration = 1 * Math.random() + 4;
            $(this).find('img').css({
                animation: 'wapuu-horizontal ' + duration + 's ease-in-out infinite alternate'
            })
        })
        i++;
    })


    var pathHover = makePath(param.hover.path)
    var pathHeadphone = makePath(param.headphone.path)
    setWapuuAnimation('hover', param.hover.duration, pathHover, param.easing, false)
    setWapuuAnimation('headphone', param.headphone.duration, pathHeadphone, param.easing, false, function() {
        wapuuAnimation2End()
    })
    params.scene['3'].wapuu.current = 2;
}

function wapuuAnimation2End() {
    wapuuAnimation3Start();
}

function wapuuAnimation3Start() {
    setTimeout(function() {
        wapuuAnimation_3();
    }, params.scene['3'].wapuu.animation_3.interval)
}

function wapuuAnimation_3() {
    var param = params.scene['3'].wapuu.animation_3;
    var pathHover = makePath(param.hover.path);
    var pathHeadphone = makePath(param.headphone.path);
    setWapuuAnimation('hover', param.hover.duration, pathHover, param.easing, true)
    setWapuuAnimation('headphone', param.headphone.duration, pathHeadphone, param.easing, false, function() {
        wapuuAnimation3End();
    })
    params.scene['3'].wapuu.current = 3;
}

function wapuuAnimation3End() {
    $('.wapuu').hide();
}



function setWapuuAnimation(wapuu, duration, path, easing, rotate, callBack) {
    if (rotate) {
        path.rotate()
    }
    $('.' + wapuu).animate({
        bezierPath: path
    }, duration, easing, callBack)
}


function setHeadphoneWapuuPosition() {
    if (params.scene['3'].wapuu.current > 0) {
        var marginLeft = $(window).width() - params.scene['3'].wapuu.windowWidth;
        var marginTop = $(window).height() - params.scene['3'].wapuu.windowHeight;
        $('.headphone').css({
            marginLeft: marginLeft + 'px',
            marginTop: marginTop + 'px',
        })

    }
}

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
function resizeMV() {

    var windowRatio = $(window).width() / $(window).height();

    var mv = $('.mv img');
    var width, height, marginLeft, marginTop

    if (params.mv.ratio >= windowRatio) {
        params.mv.scale = $(window).height() * params.mv.baseScale / params.mv.height
    } else {
        params.mv.scale = $(window).width() / params.mv.width
    }


    width = params.mv.width * params.mv.scale;
    height = params.mv.height * params.mv.scale;
    marginLeft = ($(window).width() - width) / 2;

    mv.css({
        width: width + 'px',
        height: height + 'px',
        marginLeft: marginLeft + 'px',
    })

    if (!params.mv.start) {
        mv.css({
            marginTop: $(window).height() - height + 'px'
        })
    }
}

/* 3D
--------------------------------------------------------------------*/
function resize3D() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer1.setSize(window.innerWidth, window.innerHeight);
    renderer2.setSize(window.innerWidth, window.innerHeight);
    render();
}

/* Wapuu
--------------------------------------------------------------------*/
function resizeWapuu() {
    $('.wapuu').each(function() {
        var height = $(this).height()
        $(this).css({
            width: height + 'px'
        })

        $(this).find('img').css({
            width: height + 'px',
            height: height + 'px'
        })
    })

    setHeadphoneWapuuPosition();
}

/*===========================================================
Render
============================================================*/

function render() {
    renderer1.render(layer1, camera);
    renderer2.render(layer2, camera);
}
/*===========================================================
Scene
============================================================*/


function run() {
    if (!params.run) {
        params.run = true;
        scene1();
    }


}

/* Scene1 TimeLine
----------------------------------------------------*/
function scene1() {
    if (params.debug) {
        $('.stats').fadeIn();
    }

    initCurrentTime();
    setAnimationSpeed(60);

    $(container).fadeIn(params.scene['1'].fadeIn);

    render();
    audio.play();
    animate();
}

function scene1End() {
    $(container).hide();
    scene2();
}

/* Scene2 Theme
----------------------------------------------------*/
function scene2() {
    params.currentScene = 2;
    // show theme
    var param = params.scene['2'];

    setTimeout(function() {
        $('.theme-outer').css({
            display: 'table',
        })
        $('.theme').fadeTo(param.fadeIn, 1, function() {
            setTimeout(function() {
                $('.theme').fadeOut(param.fadeOut,
                    function() {
                        scene2End();
                    }
                )
            }, param.duration)
        })
    }, param.interval)
}


function scene2End() {
    $('.theme').hide();
    scene3();
}

/* Scene3 Logo MV
----------------------------------------------------*/
function scene3() {
    params.currentScene = 3;
    var param = params.scene['3'];


    //Logo Visible Animation
    setTimeout(function() {

        //fadeIn
        $('.logo-outer').css({
            display: 'table',
            opacity: 0
        })
        $('.logo-outer').fadeTo(param.logo.fadeIn, 1);
        $('.logo').animate({
            paddingRight: param.logo.scale
        }, {
            duration: param.logo.duration,
            step: function(now) {
                $(this).css({
                    transform: 'scale(' + now + ')'
                });
            },
            complete: function() {

            }
        })
    }, param.logo.interval)

    //Logo fadeouts
    setTimeout(function() {
        $('.logo-outer').fadeOut(param.logo.fadeOut, function() {
            scene3End();
        })
    }, param.logo.fadeOutStart)

    //MV Visible Animation
    setTimeout(function() {
        //fadeIn
        $('.mv-outer').show();
        resizeMV();

        $('.mv-outer').fadeTo(param.mv.fadeIn, 1);

        params.mv.start = true;
        $('.mv img').animate({
            marginTop: 0
        }, param.mv.duration)

        params.scene['3'].mv.start = true;

    }, param.mv.interval)

    //Wapuu
    wapuuAnimationStart();

    //fadeOut
    setTimeout(function() {
        $('.mv-outer').fadeOut(param.mv.fadeOut);
    }, param.mv.fadeOutStart)


}

function scene3End() {
    sceneEnd();
}

function sceneEnd() {
    sceneReset();
}

function sceneReset() {
    setRestart();
}



/*===========================================================
Animation
============================================================*/

function animate() {
    if (params['3d'].enableRender) {
        if (parent1.position.z > params['3d'].goal) {
            params['3d'].enableRender = false;
            scene1End();
        } else {
            parent1.position.z = parent1.position.z + params['3d'].speed;
            parent2.position.z = parent2.position.z + params['3d'].speed;

            current = parent1.position.z;
        }
        requestAnimationFrame(animate);


        TWEEN.update();
        stats.update();
        render()
    }

}


function reset() {
    parent1.position.z = params['3d'].start;
    parent2.position.z = params['3d'].start;
    current = parent1.position.z;
}





/*===========================================================
DebugMode
============================================================*/
function debugMode() {
    if (params.debug) {
        //Audio
        $('#audio').attr('controls', 'true');
    }
}