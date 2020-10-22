function spiralArray(n) {
    // Initialize empty array
    const arraySize = n, array = []
    // Initialize values for x and y
    let x = 0, y = 0
    
    const total = Math.pow(n--, 2)

    // Initialize values for dx and dy, 
    let dx = 1, dy = 0
    let i = 0, j = 0

    // We will create n number of empty arrays, push to variable array
    for (let i = 0; i < arraySize; i++) {
        array.push([])
    }
    

    while (i < total) {
     
    // Value of array[y][x] is equal to i, then increment 
        array[y][x] = i++;
    // Add value of dx to x, and dy to y
        x += dx; y += dy; 

// The algorithm checks to see if j incremented by 1 is equal to the value of n 
        if (++j === n) {
    // If dy is 0, we need to spiral inside the matrix in another level
            if (dy < 0) {
                x++
                y++ 
                n -= 2
            }
    // Change values of dx so we can spiral the matrix and change the value we need to change. 
            j = dx; dx = -dy; dy = j; j = 0;
       }
    }
    console.log(array)
    return array;
}
spiralArray(3)
