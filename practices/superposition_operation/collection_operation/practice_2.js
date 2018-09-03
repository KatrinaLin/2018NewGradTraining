'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(x => x % 2 !== 0).map(x => x * 3 + 2);
}

module.exports = hybrid_operation_to_uneven;

