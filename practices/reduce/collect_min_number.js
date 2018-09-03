'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((acc, num) => Math.min(acc, num));
}

module.exports = collect_min_number;

