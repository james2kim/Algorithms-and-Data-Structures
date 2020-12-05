function reverseString(str) {
 return str.split('').reverse().join('')
}

reverseString("hello");


// Recursive Solution

function reverse(str){
if (str.length <= 1) return str 
return reverse(str.slice(1)) + str[0]
}

reverse('hi')
