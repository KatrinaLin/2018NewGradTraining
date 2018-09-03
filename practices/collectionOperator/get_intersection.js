'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter(num => collection_a.includes(num));
}

module.exports = get_intersection;
