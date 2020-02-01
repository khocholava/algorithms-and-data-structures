/*
Write a function called same, which accepts two array.
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be same
 */

function naiveSame(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return "The frequency of values must be same"
    }
    for(let i = 0; i < arr1.length; ++i) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return  false
        }
    }
    return  true;
}

console.log(naiveSame([1, 2, 3], [ 41, 9]));
