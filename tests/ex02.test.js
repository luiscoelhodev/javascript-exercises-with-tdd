const invertArray = require('../exercises/ex02');

describe('Testing ex02 - function that inverts an array', () => {
    it("should result [4,3,2,1] when ([1,2,3,4]) is entered as function parameter", () => {
        expect(invertArray([1,2,3,4])).toEqual([4,3,2,1]);
    })
})