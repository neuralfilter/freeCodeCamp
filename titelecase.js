function titleCase(str) {
	var splitStr = str.toLowerCase().split(" ");
	for(var i = 0; i < splitStr.length; i++){
		var temp = splitStr[i].split("");
		temp[0] = temp[0].toUpperCase();
		splitStr[i] = temp.join("");
		console.log(temp[0]);
	}
	console.log(splitStr);
	return splitStr.join(" ");
}

titleCase("I'm a little tea pot");
