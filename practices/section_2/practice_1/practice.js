function count_same_elements(collection) {
  //在这里写入代码
  return Object.values(collection.reduce((acc, ele) => {
    if (ele in acc) {
      acc[ele].count++;
    } else {
      acc[ele] = {key: ele, count: 1};
    }
    return acc;
  }, {}))
}

module.exports = count_same_elements;
