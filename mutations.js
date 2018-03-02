function mutation(arr){
	var newArr = [];
	newArr[0]= arr[0].toLowerCase().split("");
	newArr[1]= arr[1].toLowerCase().split("");
	console.log(newArr);
	var counter = 0;
	for(var i = 0; i < newArr[1].length; i++){
		for(var j = 0; j < newArr[0].length; j++){
			if(newArr[1][i] == newArr[0][j]){	
				counter++;
				break;
			}
		}
	}
	console.log(counter);
	if(counter == newArr[1].length){
		return true;
	} else {
		return false;
	}
}
mutation(["hello", "Hello"]);
