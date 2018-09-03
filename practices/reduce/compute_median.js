'use strict';

function compute_median(collection) {
  //在这里写入代码
  let sorted = collection.sort(function (a, b) {
    return a - b;
  });
  let len = sorted.length;
  return len % 2 === 0 ?
    (sorted[len/2 - 1] + sorted[len/2]) / 2 :
    sorted[(len - 1) / 2];
}

module.exports = compute_median;


