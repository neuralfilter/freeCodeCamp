function largestOfFour(arr) {
	var temp = [];
	for(var i = 0; i < arr.length; i++){
		var max = 0;
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] > max){
				max = arr[i][j];
			}
		}
		temp.push(max);
	}
	console.log(temp);
	return temp;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

