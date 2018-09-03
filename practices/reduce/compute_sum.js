'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  return collection.reduce((acc, num) => acc + num, 0);
}

module.exports = calculate_elements_sum;

