// 7) Write a function that compares the equality of two arrays and returns a boolean value.
// Example input: ([1,2,3,4],[1,2,3,4]), Result: true

function compareArrays(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }
    for (let counter = 0; counter < arrayOne.length ; counter++) {
        if (arrayOne[counter] !== arrayTwo[counter]) {
            return false;
        }
    }
    return true;
}

module.exports = compareArrays;