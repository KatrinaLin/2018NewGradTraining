'use strict';
var calculate_average = function(collection){

  let even = collection.filter(x => x % 2 === 0)
  return even.reduce((acc, num) => acc += num)/even.length
};
module.exports = calculate_average;
