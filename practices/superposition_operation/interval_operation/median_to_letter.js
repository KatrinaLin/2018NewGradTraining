'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  collection.sort(function (a, b) {
    return a - b;
  });
  let len = collection.length;
  let median = len % 2 === 0 ?
    (collection[len/2 - 1] + collection[len/2]) / 2 :
    collection[(len - 1) / 2];

  median = Math.ceil(median);

  let cur = "";
  while (median > 0) {
    cur += String.fromCharCode(96 + median % 26);
    median = Math.floor(median / 26);
  }
  return cur.split("").reverse().join("");

}

module.exports = median_to_letter;
