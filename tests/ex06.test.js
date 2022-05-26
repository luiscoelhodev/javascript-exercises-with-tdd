const removeDuplicates = require('../exercises/ex06');

describe('Testing ex06 - function that removes duplicates', () => {
    it("should result [1,2,3,4,5,7] when ([1,2,3,3,2,4,5,4,7,3]) is entered as function parameter", () => {
        expect(removeDuplicates([1,2,3,3,2,4,5,4,7,3])).toEqual([1,2,3,4,5,7]);
    })
})