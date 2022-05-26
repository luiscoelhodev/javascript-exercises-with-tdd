// 9) Write a function that creates nests in an array with 'n' values (passed in as a parameter).
// Example input: ([1, 2, 3, 4, 5], 2), Result: [[1, 2], [3, 4], [5]]

function createNestedArray (inputArray, howManyNestedElements) {
    let newNestedArray = [];
    let arrayModel = [];

    for (let counter = 0; counter < inputArray.length; counter++) {
        if (arrayModel.length <= howManyNestedElements) {
            arrayModel.push(inputArray[counter])
            if (arrayModel.length === howManyNestedElements) {
                newNestedArray.push(arrayModel);
                arrayModel = [];
            }
            if (counter === inputArray.length-1) {
                newNestedArray.push(arrayModel);
            }
        }
     }
     return newNestedArray;
}

module.exports = createNestedArray;