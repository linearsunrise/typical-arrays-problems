
exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) { return 0 };
	let maximum = array[0];
  for (i = 0; i < array.length; i++) {
    if (maximum < array[i]) {
      maximum = array[i];
    };
  };
	return maximum;
}

exports.avg = function avg (array) {
  return 0;
}
