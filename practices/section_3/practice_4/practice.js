function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let arr = Object.values(collection_a.reduce((acc, ele) => {
    let ele_count = 1;
    let ele_key = ele;

    if (ele.indexOf('-') >= 0) {
      let arr = ele.split('-');
      ele_key = arr[0];
      ele_count = parseInt(arr[1]);
    }

    if (ele in acc) {
      acc[ele_key].count += ele_count;
    } else {
      acc[ele_key] = {key: ele_key, count: ele_count};
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
