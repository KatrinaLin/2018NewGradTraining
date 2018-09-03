'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  return collection.filter(x => x % 2 === 0).map(x => String.fromCharCode(x + 96))
}

module.exports = even_to_letter;
