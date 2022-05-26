// 2) Write a function that inverts an array without using native array methods.
// Example input: ([1,2,3,4]), Result: [4,3,2,1]

function invertArray(inputArray) {
    const outputArray = [];
    for (let counter = inputArray.length - 1; counter >= 0 ; counter--) {
        outputArray.push(inputArray[counter]);
    }
    return outputArray;    
}

module.exports = invertArray;