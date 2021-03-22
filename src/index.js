
exports.min = function min (array) {
  if (array === undefined || array.length === 0) { return 0 };
	let minimum = array[0];
  for (i = 0; i < array.length; i++) {
    if (minimum > array[i]) {
      minimum = array[i];
    };
  };
	return minimum;
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
  if (array === undefined || array.length === 0) { return 0 };
  let sum = 0;
  for (i = 0; i < array.length; i++) { sum += array[i] }
  // let sum = array.reduce((val, acc) => acc + val);

  return sum / array.length;
}
