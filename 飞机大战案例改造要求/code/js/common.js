

/*
 * 碰撞检测
 * 箭头函数+结构赋值
 */ 
var isCrash=(obj1,obj2)=>{
	if(obj1 && obj2){
		const [leftSide,rightSide,upSide,downSide] = [obj2.offsetLeft-obj1.offsetWidth/2,obj2.offsetLeft+obj2.offsetWidth+obj1.offsetWidth/2,obj2.offsetTop - obj1.offsetHeight/2,obj2.offsetTop + obj2.offsetHeight + obj1.offsetHeight/2];
		//const  = ;
		//const  = ;
		//const  = ;
		const x = obj1.offsetLeft+obj1.offsetWidth/2;
		const y = obj1.offsetTop + obj1.offsetHeight/2;
		if(x > leftSide && x < rightSide && y > upSide && y < downSide){
			return true;
		} 
	}
	return false;
}

















