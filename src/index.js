
exports.min = function min (array) {
  if(arguments.length === 0 || array.length === 0 ) {
    return 0
  } 
  return array.sort((a,b) => a > b ? 1 : -1)[0]
}

exports.max = function max (array) {
  if(arguments.length === 0 || array.length === 0 ) {
    return 0
  } 
  return array.sort((a,b) => a > b ? 1 : -1)[array.length - 1];
}

exports.avg = function avg (array) {
  if(arguments.length === 0 || array.length === 0 ) {
    return 0
  } 
 return array.reduce((acc, el) => acc + el,0)/array.length;
}
