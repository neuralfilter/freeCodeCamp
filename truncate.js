function truncateString(str, num) {
	if(str.length >= num){
		if(num <= 3){
			return str.slice(0, num) + "...";
		} else if(str.length == num){
			return str;
		} else {
			return str.slice(0, num-3)+"...";
		}
	} else if(num > str.length) {
		return str;
	}
}


truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
