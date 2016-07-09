/*===========================================================
Elements
============================================================*/
function createElement(_src) {
	var element = document.createElement( 'div' );
	$(element).addClass('element');
	$(element).html(_src);
	return element;
}

function createSprite(_element, date) {
	var object = new THREE.CSS3DSprite( _element );
	object.position.z = getZPosition(date);
	parent1.add( object );
	return object;
	
}

function createPoint(size,position) {
	var point = document.createElement( 'div' );
	$(point).addClass('point point-' + size);
	var pointObject = new THREE.CSS3DSprite( point );
	pointObject.position.x = position.x;
	pointObject.position.y = position.y;
	pointObject.position.z = position.z;
	parent1.add( pointObject );
}

function createline(v1, v2) {
	var geometry = new THREE.Geometry();
	geometry.vertices.push( new THREE.Vector3(v1.x,v1.y, v1.z) ); 
	geometry.vertices.push( new THREE.Vector3(v2.x,v2.y, v2.z) ); 
	var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xcccccc} ) );
	parent2.add( line );
}


function dateFix(_date) {
	var split = _date.split('/')
	var monthNum = parseInt(split[0].replace('0','')) - 1;

	var month = params.date.monthNames[monthNum];
	var date = month + ' / ' + split[1] + ' / ' + split[2];
	return date;

}





function getZPosition(date){
	
	var currentYear = params.date.now.getFullYear() - 2003;
	var fixPosition = (currentYear - 3) / 2;
	
	date = date.toString()
	var split = date.split('/');
	var position;
	
	
	
	if(split){
		var year = parseInt(split[split.length-1]) - 2003;
		if(split.length > 1){
			var month = parseInt(split[0]) / 12;
			var dayNumber = 31;
			if(month == 4 || month == 6 || month == 9 || month == 11){
				dayNumber = 30;
			}else if(month == 2){
				if(month % 4 == 0){
					dayNumber = 29;
				}else{
					dayNumber = 28;
				}
			}
			var day = parseInt(split[1]) / dayNumber;
			var dayLength = params.date.yearLength / 12 / dayNumber;
			position = params.date.yearStart - params.date.yearLength * year - params.date.yearLength * month - dayLength;
		}else{
			position = params.date.yearStart - params.date.yearLength * year;
		}

	}
	
	position += params['3d'].offset;

	return position;
}

function setStart(){
	// Run
	$('.start a').click(function(){
		run();
		$(this).fadeOut();
	})
	$('.start').css({
		display:'flex'
	})
}

function setRestart(){
	/*
	setTimeout(function(){
		$('.start').html('Restart').fadeIn();
	},2000)
	*/
	params.run = false;
	
}



