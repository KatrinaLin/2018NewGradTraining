function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let a_key = collection_a.map(element => element.key);
  return a_key.filter(x => object_b.value.includes(x));
}

module.exports = collect_same_elements;
