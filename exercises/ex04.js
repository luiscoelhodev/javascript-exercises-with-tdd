// 4) Write a function that converts a nested array into an object.
// Example input: ([["c",2],["d",4]]), Result: {c:2, d:4}

function arrayToObject (arrayInput) {
    const objectToBeFilled = {};
    for (element of arrayInput) {
        objectToBeFilled[element[0]] = element[1];
    }
    return objectToBeFilled;
}

module.exports = arrayToObject;