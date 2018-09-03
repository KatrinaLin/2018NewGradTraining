'use strict';
var single_element = function(collection){

  let even = collection.filter((ele, index) => index % 2 !== 0);
  even.forEach(function (ele, index) {
    if (even.indexOf(ele) !== index) {
      while (even.indexOf(ele) != -1) {
        even.splice(even.indexOf(ele), 1);
      }
    }
  })
  return even;
};

module.exports = single_element;
