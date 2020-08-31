function truthCheck(collection, pre) {
    let isTrue = true

    for (let i = 0 ; i < collection.length;i++) {
      if(!collection[i][pre]) {
        isTrue =false
        return isTrue
      } 
    }
    return isTrue
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
