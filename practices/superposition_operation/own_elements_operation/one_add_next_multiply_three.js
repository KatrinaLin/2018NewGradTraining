'use strict';
function one_add_next_multiply_three(collection){
  let result = collection.map(function (ele, index) {
    if (index < collection.length - 1) {
      return (ele + collection[index + 1]) * 3
    }
  });

  result.pop();
  return result;
}
module.exports = one_add_next_multiply_three;
