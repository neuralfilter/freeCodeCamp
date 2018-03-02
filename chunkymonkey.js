function chunkArrayInGroups(arr, size) {
	var newArr = [];
	var temp = [];
	for(var i = 0; i < (arr.length); i+=size){
		temp = arr.slice(i,i+size);
		newArr.push(temp);
	}
	console.log(newArr);
	return newArr;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
