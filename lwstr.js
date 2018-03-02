function findLongestWord(str) {
	var splitStr = str.split(" ");
	console.log(splitStr);
	var max = 0;
	for(var i = 0; i < splitStr.length; i++){
		if(splitStr[i].length > max){
			max = splitStr[i].length;
		}
	}
	console.log(max);
	return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog")
