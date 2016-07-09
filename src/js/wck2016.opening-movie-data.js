/*===========================================================
Data
============================================================*/
function loadImages() {
    var wcData = json.wc;
	//WordCamp hold date
	for(var i = 0; i < wcData.length; i++) {
		
		if('wapuu' in wcData[i]){
			params.load.wapuu.push(false);
			$('<img />').on('load',function(){
				params.load.wapuu[parseInt($(this).attr('alt'))]= true;
				loadCheck()

			}).attr('src','img/wapuu/' + wcData[i].wapuu ).attr('alt',i);
		}
		
	}
}

/*===========================================================
History
============================================================*/

//Year 
function createYear() {
	var currentYear = params.date.now.getFullYear();
	for(var i = 2003; i < currentYear + 1; i++) {
		var src= '<h2 class="year">' + i + '</h2>';
		var element = createElement(src);
		var object = createSprite(element, i);
		object.position.x = 0;
		object.position.y = -60;
		
		createPoint('s',{x:0,y:linePositionY,z:getZPosition(i)})
	}
}

function createWpRelease() {
	//WordPress release date
	var wp = $("#wp"), wc = $("#wc");
	var wpData = json.wp;
	var param = params['3d']; 
	
	for(var i = 0; i < wpData.length; i++) {
		var date = dateFix(wpData[i].date)
		var src = '<span class="date">' + date + '<span><h2>v' + wpData[i].version + ' ' +wpData[i].codename + '</h2>';
		var element = createElement(src);
		$(element).addClass="wp";
		var object = createSprite(element, wpData[i].date);
		object.position.x = param.wpXLength  * Math.cos(60 * i / 180 * Math.PI) + param.wpXLength * 2;
		
		if(i % 2 == 0 ){
			object.position.y = param.yLength + param.yRamdom * (Math.random() - 0.5);
		}else{
			object.position.y = -param.yLength + param.yRamdom * (Math.random() - 0.5);
		}
		
		
		
		createPoint('s',{x:object.position.x,y:object.position.y,z:object.position.z})
		createline(
			{x:object.position.x - 0,y:object.position.y, z:object.position.z},
			{x:0,y:linePositionY,z:object.position.z}
		)
		
		
	}
	
}

function createWc() {
    var wcData = json.wc;
	var param = params['3d']; 

	//WordCamp hold date
	for(var i = 0; i < wcData.length; i++) {
		var date = dateFix(wcData[i].date)
		var src = '<span class="date">' + date + '</span>' +'<h2>' + wcData[i].name + '</h2>'
		if ('wapuu' in wcData[i]) {
			src += '<img src="img/wapuu/'+ wcData[i].wapuu +'" alt="' + wcData[i].name +'" />'
		}

		var element = createElement(src);
		$(element).addClass('wc');
		
		var object = createSprite(element, wcData[i].date);
		object.position.x = param.wcXLength  * Math.cos(60 * i / 180 * Math.PI) - param.wcXLength *2 ;
		
		if(i % 2 == 0 ){
			object.position.y = param.yLength + param.yRamdom * (Math.random() - 0.5);
		}else{
			object.position.y = -param.yLength + param.yRamdom * (Math.random() - 0.5);
		}
		
		createPoint('s',{x:object.position.x,y:object.position.y,z:object.position.z})
		
		
		createline(
			{x:object.position.x,y:object.position.y,z:object.position.z},
			{x:0,y:linePositionY,z:object.position.z}
		)
	}
	
}


/*===========================================================
Wapuu Animation Path
============================================================*/
function makePath(pathData){
	var path;
	for(var i=0;i<pathData.length;i++){
		var x = coordinateX(pathData[i]['x'])
		var y = coordinateY(pathData[i]['y'])
		if(i == 0){
			path = $.bezierCurve(x, y);
		}else{
			path.addPoint(x, y);
		}
	}
	return path;
}

/*===========================================================
3D Animation
============================================================*/

function setCurrentTime(){
	params.scene['1'].currentTime++;
}

function cancelCurrentTime(){
	clearInterval(currentTimer)
}

function fpsCheck(_fps){
	if(params['3d'].fpsCheck){
		setAnimationSpeed(_fps)
	}else{
		params['3d'].fpsCheck = true;
	}

}


function setAnimationSpeed(_fps){
	
	
	var remainTime = params.scene['1'].duration - params.scene['1'].currentTime * 1000;
	params['3d'].speed = -current / (remainTime / 1000 * _fps);
}

/*===========================================================
3D coordinate
============================================================*/
function coordinateX(percent){
	return $(window).width() * percent;
}
	
function coordinateY(percent){
	return $(window).height() * percent;
}
