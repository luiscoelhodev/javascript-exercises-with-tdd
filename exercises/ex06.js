// 6) Write a function that returns an array without duplicates. 
// Example input: ([1,2,3,3,2,4,5,4,7,3]), Result: [1,2,3,4,5,7]

function removeDuplicates(inputArray) {
    const arrayToSet = new Set(inputArray);

    const setBackToArray = [... arrayToSet];

    return setBackToArray;
}

module.exports = removeDuplicates;