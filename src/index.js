
exports.min = function min (array) {
  return  arguments.length && array.length ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return arguments.length && array.length ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
  return arguments.length && array.length ? array.reduce((a,b)=>a+b,0) / array.length : 0;
}
