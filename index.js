/*
Write a function called same, which accepts two array.
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be same
 */

function naiveSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return 'The frequency of values must be same';
    }
    for (let i = 0; i < arr1.length; ++i) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
    }
    return true;
}


//Stack Implementation

class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }

    length() {
        return this.top;
    }

    peek() {
        return this.data[this.top - 1];
    }

    isEmpty() {
        return this.top === 0;
    }

    pop() {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop(); // removes the last element
        }
    }

    print() {
        let top = this.top - 1; // because top points to index where new    element to be inserted
        while (top >= 0) { // print upto 0th index
            console.log(this.data[top]);
            top--;
        }
    }

    reverse() {
        this._reverse(this.top - 1);
    }

    _reverse(index) {
        if (index !== 0) {
            this._reverse(index - 1);
        }
        console.log(this.data[index]);
    }
}

function decimalToBinary(number) {
    let stack = new Stack();
    let rem;
    let binaryString = '';

    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString()
    }
    return binaryString;
}

function baseConverter(decimalNumber, base) {
    const stack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decimalNumber;
    let rem;
    let baseString = '';

    if(!(base >= 0 && base <=36)) {
        return '';
    }

    while (number > 0) {
        rem = Math.floor(number % base);
        stack.push(rem)
        number = Math.floor(number / base);
    }

    while (!stack.isEmpty()) {
        baseString += digits[stack.pop()];
        console.log(`Base String in while ${stack.pop()}`)
    }
    console.log(baseString)
    return baseString
}


console.log(baseConverter(11, 16));
