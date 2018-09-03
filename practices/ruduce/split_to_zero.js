'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
  while (Math.round(number * 10) / 10 > 0) {
    result.push(Math.round(number * 10) / 10);
    number -= interval;
  }
  result.push(Math.round(number * 10) / 10);
  return result;
}

module.exports = spilt_to_zero;
