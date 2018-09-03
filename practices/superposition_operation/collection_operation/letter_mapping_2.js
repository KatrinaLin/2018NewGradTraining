'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let avg = collection.reduce((acc, num) => acc += num)/collection.length;
  return String.fromCharCode(96 + Math.ceil(avg));
}

module.exports = average_to_letter;

