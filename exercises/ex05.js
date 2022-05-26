// 5) Write a function that removes selected items from an array and returns a new one. 
// Example input: ([5,4,3,2,5], 5,3), Result: [4,2]

function removeItemsFromArray(inputArray, fisrtItem, secondItem) {
    const arrayToBeFilled = [];
    for (let counter=0; counter < inputArray.length; counter++) {
        if (fisrtItem !== inputArray[counter] && secondItem !== inputArray[counter]) {
            arrayToBeFilled.push(inputArray[counter]);
        }
    }
    return arrayToBeFilled;
}

module.exports = removeItemsFromArray;
