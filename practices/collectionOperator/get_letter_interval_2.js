'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let shouldReverse = number_a > number_b;
  let start = shouldReverse ? number_b : number_a;
  let end = shouldReverse ? number_a : number_b;
  let result = [];

  for (let i = 0, cur = start; cur <= end; i++, cur++) {
    result[i] = map_to_word(cur);
  }

  return shouldReverse ? result.reverse() : result;
}

function map_to_word(x) {
  let cur = "";
  x--;
  while (x >= 0) {
    cur = String.fromCharCode(97 + x % 26) + cur;
    x = Math.floor(x / 26) - 1;
  }
  return cur;
}

module.exports = get_letter_interval_2;

