function myReplace(str, before, after) {
//In order to preserve the casing of the first char in the original word, we will split the before and after strings into an array 
let original = before.split('')
let replaced = after.split('')

// If the original string is uppercased, We will uppercase the replaced string. Otherwise, we will lowercase the replaced string 

  if (original[0] === original[0].toUpperCase()) {
    replaced[0] = replaced[0].toUpperCase()
  } else {
    replaced[0] = replaced[0].toLowerCase()
  }
  original = original.join('')
  replaced = replaced.join('')

// The algorithm is fairly simple, just replace the original with the replaced using a built in string method. 
return str.replace(original,replaced)

}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
