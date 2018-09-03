'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(function (x) {
    let cur = "";
    x--;
    while (x >= 0) {
      cur = String.fromCharCode(97 + x % 26) + cur;
      x = Math.floor(x / 26) - 1;
    }
    return cur;
  });
};

module.exports = number_map_to_word_over_26;
