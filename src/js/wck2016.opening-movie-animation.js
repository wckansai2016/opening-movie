/*===========================================================
Animation
============================================================*/

function animate() {
	if(params['3d'].enableRender){
		if(parent1.position.z > params['3d'].goal){
			params['3d'].enableRender = false;
			scene1End();
		}else{
			parent1.position.z = parent1.position.z + params['3d'].speed;
			parent2.position.z = parent2.position.z + params['3d'].speed;
			
			current = parent1.position.z;
		}
		requestAnimationFrame( animate );
		
		
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




