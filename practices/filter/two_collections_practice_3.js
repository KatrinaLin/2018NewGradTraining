'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(num_a => collection_b.find(num_b => num_a % num_b === 0));
}

module.exports = choose_divisible_integer;
