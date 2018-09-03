'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  collection.sort(function (a, b) {
    return a - b;
  })

  return collection.map((function (ele, index) {
    if (index % 3 === 0 && (index + 2) < collection.length) {
      collection.splice(index, 1);
      collection.splice(index + 2, 0, ele);
    }
    return collection[index];
  }));

}
module.exports = rank_by_two_large_one_small;
