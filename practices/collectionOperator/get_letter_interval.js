'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let shouldReverse = number_a > number_b;
  let start = shouldReverse ? number_b : number_a;
  let end = shouldReverse ? number_a : number_b;
  let result = [];

  for (let i = 0, cur = start; cur <= end; i++, cur++) {
    result[i] = String.fromCharCode(96 + cur);
  }

  return shouldReverse ? result.reverse() : result;
}

module.exports = get_letter_interval;
