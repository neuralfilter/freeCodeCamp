

function destroyer(arr) {
	var arrArgs = [].slice.call(arguments, 1);	
	var remo = arr.filter(function(val) {

		for(var i = 0; arrArgs.length > i; i++){
			return !(arrArgs.indexOf(val) >= 0);
		}

	});
	return remo
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);

