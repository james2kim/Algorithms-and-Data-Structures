const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let [first,last] = firstAndLast.split(' ')
  
  // Get Full Name Method
  this.getFullName = function() {
    return firstAndLast
  }

  // Get First Name Method
  this.getFirstName = function() {
    first = firstAndLast.split(' ')[0]
    return first
  }

  // Get Last Name Method
  this.getLastName = function() {
    last = firstAndLast.split(' ')[1]
    return last
  }

  // Set new first name method 
  this.setFirstName = function(newName) {
    firstAndLast = [newName, last].join(' ')
  }

  // Set new last name method 
  this.setLastName = function(newName) {
    firstAndLast = [first, newName].join(' ')
  }
   // Set new full name method 
  this.setFullName = function(newName) {
    return firstAndLast = newName
  }

  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.setFirstName('Haskell')
