'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((acc, num) => Math.max(acc, num));
}

module.exports = collect_max_number;
