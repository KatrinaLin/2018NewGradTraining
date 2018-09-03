'use strict';
var calculate_median = function(collection){
  let sorted = collection
    .filter(x => x % 2 === 0)
    .sort(function (a, b) {
    return a - b;
  });
  let len = sorted.length;
  return len % 2 === 0 ?
    (sorted[len/2 - 1] + sorted[len/2]) / 2 :
    sorted[(len - 1) / 2];
};
module.exports = calculate_median;
