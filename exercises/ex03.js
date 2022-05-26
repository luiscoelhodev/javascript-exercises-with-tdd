// 3) Write a function that removes unnecessary items from an array (false, undefined, empty strings, number zero, null).
// Example input: ([1,2,'', undefined]), Result: [1,2]

function removeUnwantedElements(input) {
    const clean = [];
    const unwantedElements = [false, undefined, '', 0, null];
    let unwantedCounter = 0;
    for (let counter = 0; counter < input.length; counter++) {
        for (let index in unwantedElements) {
            if (input[counter] === unwantedElements[index]) {
                unwantedCounter++;
            } 
        }
        if (unwantedCounter === 0) {
            clean.push(input[counter]);    
        }
        unwantedCounter = 0;    
    }
    return clean;
}

module.exports = removeUnwantedElements;
