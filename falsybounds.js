function bouncer(arr) {
	checker = false;
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i]){
			console.log("ok");
			newArr.push(arr[i]);
		} else {
			console.log("not ok");
		}
	}
	return newArr;
}
