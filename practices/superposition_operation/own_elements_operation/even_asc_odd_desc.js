'use strict';
var even_asc_odd_desc = function(collection){

  let even = collection.filter(x => x % 2 === 0);
  let odd = collection.filter(x => x % 2 !== 0);

  return even.sort(function (a, b) {
    return a - b;
  }).concat(odd.sort(function (a, b) {
    return b - a;
  }))
};

module.exports = even_asc_odd_desc;
