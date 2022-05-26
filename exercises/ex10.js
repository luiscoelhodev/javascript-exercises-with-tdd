// 10) Write a function that finds equal values in two different arrays.
// Example input: ([6, 8], [8, 9]), Result: [8]

function findCommonElements(arrayOne, arrayTwo) {
    const newArray = [];

    for (let counter1 = 0; counter1 < arrayOne.length; counter1++) {
        for (let counter2 = 0; counter2 < arrayTwo.length; counter2++) {
            if (arrayOne[counter1] === arrayTwo[counter2]) {
                newArray.push(arrayOne[counter1]);
            }
        }
    }
    return newArray;
}

module.exports = findCommonElements;