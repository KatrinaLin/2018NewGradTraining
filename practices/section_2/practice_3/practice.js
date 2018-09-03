function count_same_elements(collection) {
  //在这里写入代码
  return Object.values(collection.reduce((acc, ele) => {
    let ele_count = 1;
    let ele_key = ele;

    if (ele.indexOf('-') >= 0 || ele.indexOf(':') >= 0) {
      let arr = ele.split(/[:-]/);
      ele_key = arr[0];
      ele_count = parseInt(arr[1]);
    } else if (ele.indexOf('[') >= 0) {
      ele_key = ele.substr(0, ele.indexOf('['));
      ele_count = parseInt(ele.substr(ele.indexOf('[') + 1, ele.indexOf(']')));
      console.log("key: " + ele_key + " count: " + ele_count)
    }

    if (ele_key in acc) {
      acc[ele_key].summary += ele_count;
    } else {
      acc[ele_key] = {name: ele_key, summary: ele_count};
    }
    return acc;
  }, {}))
}

module.exports = count_same_elements;
