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
        binaryString += stack.pop().toString();
    }
    return binaryString;
}

function baseConverter(decimalNumber, base) {
    const stack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decimalNumber;
    let rem;
    let baseString = '';

    if (!(base >= 0 && base <= 36)) {
        return '';
    }

    while (number > 0) {
        rem = Math.floor(number % base);
        stack.push(rem);
        number = Math.floor(number / base);
    }

    while (!stack.isEmpty()) {
        baseString += digits[stack.pop()];
        console.log(`Base String in while ${stack.pop()}`);
    }
    console.log(baseString);
    return baseString;
}

function countPerson(person) {
    let duplicates = new Map();
    person.forEach(person => {
        if(!person.hasOwnProperty('lastName')) {
            duplicates.set(person.firstName, (duplicates.get(person.firstName) ||0 )+1)
        } else {
            duplicates.set(`${person.firstName} ${person.lastName}`, (duplicates.get(`${person.firstName} ${person.lastName}`)|| 0)+ 1)
        }
    })
    return duplicates
}

let person = [
    {firstName: 'Akaki'},
    {firstName: 'Akaki'},
    {firstName: 'Akaki'},
]
