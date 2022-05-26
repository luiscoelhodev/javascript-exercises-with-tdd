// 1) Write a function that creates an array based on an input command.
// Example input: (3,a), Result: ['a', 'a', 'a']

function createArray(numberOfElements, value) {
    const arrayToBeFilled = [];
    for (let counter = 0; counter < numberOfElements; counter++) {
        arrayToBeFilled.push(value);
    }
    return arrayToBeFilled;
}

module.exports = createArray;