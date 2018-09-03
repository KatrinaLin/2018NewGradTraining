'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  console.log()
  return collection_a.concat(collection_b.filter(num => !collection_a.includes(num)));
}

module.exports = get_union;

