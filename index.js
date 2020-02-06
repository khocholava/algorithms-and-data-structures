/*
Write a function called same, which accepts two array.
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be same
 */

function naiveSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return "The frequency of values must be same"
    }
    for (let i = 0; i < arr1.length; ++i) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
    }
    return true;
}

console.log(naiveSame([1, 2, 3], [41, 9]));


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

const stack = new Stack();
stack.push(12);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(30);
console.log(stack.peek());
console.log('peek');
console.log(`Length ${stack.length()}`);
stack.print()
