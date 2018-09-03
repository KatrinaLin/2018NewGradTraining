'use strict';

function grouping_count(collection) {

  //在这里写入代码
  return collection.reduce(function (acc, num) {
    if (num in acc) {
      acc[num]++;
    } else {
      acc[num] = 1;
    }
    return acc;
  }, {});

}

module.exports = grouping_count;
