// 8) Write a function that breaks nests inside an array.
// Example input: ([1, 2, [3], [4, 5]]), Result: [1, 2, 3, 4, 5]

function denestArray(inputArray) {
    const newArray = [];

    for (let counter = 0; counter < inputArray.length; counter++) {
        if (typeof inputArray[counter] === 'number') {
            newArray.push(inputArray[counter]);
        } 
        else if (typeof inputArray[counter] === 'object') {
            for (let counterObject=0; counterObject < inputArray[counter].length; counterObject++) {
                newArray.push(inputArray[counter][counterObject]);
            }
        }
    }
    return newArray;
}

module.exports = denestArray;