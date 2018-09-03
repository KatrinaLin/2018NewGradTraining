'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var flatResult = collection.reduce((acc, cur) => acc.concat(cur),[]);

  return flatResult.filter((x, index, arr) => arr.indexOf(x) == index);
}

module.exports = double_to_one;
