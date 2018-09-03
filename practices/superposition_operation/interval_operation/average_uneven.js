'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let uneven = collection.filter(x => x % 2 !== 0)
  return uneven.reduce((acc, num) => acc += num) / uneven.length;
}

module.exports = average_uneven;
