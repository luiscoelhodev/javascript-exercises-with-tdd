const removeItemsFromArray = require('../exercises/ex05');

describe('Testing ex05 - function that removes selected items from an array and returns a new one', () => {
    it("should result [4,2] when ([5,4,3,2,5], 5,3) is entered as function parameters", () => {
        expect(removeItemsFromArray([5,4,3,2,5], 5,3)).toEqual([4,2]);
    })
})