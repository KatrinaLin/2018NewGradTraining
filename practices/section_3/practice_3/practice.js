function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let arr = Object.values(collection_a.reduce((acc, ele) => {
    if (ele in acc) {
      acc[ele].count++;
    } else {
      acc[ele] = {key: ele, count: 1};
    }
    return acc;
  }, {}));

  return arr.map(function (ele) {
    if (object_b.value.includes(ele.key)) {
      ele.count -= Math.floor(ele.count / 3);
    }
    return ele;
  })
}

module.exports = create_updated_collection;
