function sortByKey(arr) {
  let sorted = []
  let greatest = 1
  let index = 0

  while (sorted.length < arr.length) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].key > greatest) {
          greatest = arr[i].key
          index = i
    }
  }
    sorted.unshift(arr[index])
    arr[index] = 0
    index = 0
    greatest = 0
  }
  return sorted
}
sortByKey([{key: 3, value: "foo"}, {key: 2, value: "bar"}, {key: 4, value: "baz"}, {key: 1, value: 42}, {key: 5, value: "another string"}])
