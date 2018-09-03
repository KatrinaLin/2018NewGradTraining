'use strict';
var even_group_calculate_average = function (collection) {

  let even = collection.filter((ele, index) => index % 2 !== 0).filter(x => x % 2 === 0);

  let arr = Object.values(
    even.reduce(function (acc, num) {
      let digit = num.toString().length;
      if (digit in acc) {
        acc[digit].sum += num;
        acc[digit].count++;
      } else {
        acc[digit] = {sum: num, count: 1};
      }
      return acc;
    }, {}))

  if (arr.length == 0) {
    return [0];
  }

  return arr.map(function (ele) {
    return ele.sum / ele.count;
  });

};
module.exports = even_group_calculate_average;
