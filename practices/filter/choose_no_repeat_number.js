'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  return collection.filter((num, index, arr) => arr.indexOf(num) == index);
}

module.exports = choose_no_repeat_number;
