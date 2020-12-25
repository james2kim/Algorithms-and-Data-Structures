var MaxHeap = function () {
    // change code below this line
    this.arr = [null];

    this.insert = function (val) {
        this.arr.push(val);
        let i = this.arr.length - 1;
        let parentIndex = Math.floor(i / 2);
        // console.log(`---i: ${i}`)
        // console.log(`p: ${parentIndex}`)
        while (parentIndex > 0 && this.arr[i] > this.arr[parentIndex]) {
            // console.log(`Swapping bc ${this.arr[i]} > ${this.arr[parentIndex]}`)
            let temp = this.arr[i];
            this.arr[i] = this.arr[parentIndex];
            this.arr[parentIndex] = temp;
            i = parentIndex;
            parentIndex = Math.floor(i / 2);
            // console.log(`New i: ${i}`);
        }


    }
    this.remove = function () {
        // Base Case 1: No element initially
        if (this.arr.length === 1) {
            return null;
        }
        let valueToRemove = this.arr[1];
        let lastVal = this.arr.pop(); 
        // Base Case 2: No element left after remove 
        if (this.arr.length === 1) {
            return valueToRemove;
        }

        let length = this.arr.length;
        // console.log(`Array length:${length}`);
        
        let i = 1; // pointer to the moving value
        this.arr[i] = lastVal;

        let iIsNotLastLevel = (this.arr[2 * i] !== undefined);
        let parentIsSmallerThanChildren = this.arr[i] < this.arr[2 * i] || this.arr[i] < this.arr[2 * i + 1]
        while (iIsNotLastLevel && parentIsSmallerThanChildren) {

            if (this.arr[2 * i] > this.arr[2 * i + 1] || this.arr[2 * i + 1] === undefined) {
                // console.log(`Left child is bigger than right: ${this.arr[2 * i]} > ${this.arr[2 * i + 1]}`);
                let temp = this.arr[2 * i];
                this.arr[2 * i] = this.arr[i];
                this.arr[i] = temp;
                i = 2 * i;
            } else {
                // console.log(`Left child is smaller than right: ${this.arr[2 * i]} < ${this.arr[2 * i + 1]}`);
                let temp = this.arr[2 * i + 1];
                this.arr[2 * i + 1] = this.arr[i];
                this.arr[i] = temp;
                i = 2 * i + 1;
            }
            // console.log(`New i:${i} | ${this.arr}`);

            iIsNotLastLevel = (this.arr[2 * i] !== undefined);
            // console.log(`-iIsNotLastLevel: ${iIsNotLastLevel}`);
            parentIsSmallerThanChildren = this.arr[i] < this.arr[2 * i] || this.arr[i] < this.arr[2 * i + 1]

        }
        return valueToRemove;
    }
    this.print = function () {
        console.log(this.arr);
        return this.arr;
    }
    // change code above this line
};
