function deepcopy(obj) {
  const newObj = {
      ...obj
    }
    return newObj
}

deepcopy({test: "test", testArray:[1,2,3],testObject:{pizza:'pizza',burger:'burger'}})
