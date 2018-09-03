'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return collection.reduce((acc, cur) => acc.concat(cur),[]);
}

module.exports = double_to_one;
