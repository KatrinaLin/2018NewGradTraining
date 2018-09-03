'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let shouldReverse = number_a > number_b;
  let start = shouldReverse ? number_b : number_a;
  let end = shouldReverse ? number_a : number_b;
  let result = [];

  start = start % 2 === 0 ? start : start + 1;
  end = end % 2 === 0 ? end : end - 1;

  for (let i = 0, cur = start; cur <= end; i++, cur+=2) {
    result[i] = cur;
  }

  return shouldReverse ? result.reverse() : result;
}

module.exports = get_integer_interval_2;
