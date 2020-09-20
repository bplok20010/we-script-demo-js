function shuffle(array) {
	var length = array == null ? 0 : array.length;
	if (!length) {
		return [];
	}
	var index = -1;
	var lastIndex = length - 1;
	var result = [].concat(array);
	while (++index < length) {
		var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
		var value = result[rand];
		result[rand] = result[index];
		result[index] = value;
	}
	return result;
}
