const removeUnwantedElements = require('../exercises/ex03');

describe('Testing ex03 - function that removes unnecessary values', () => {
    it("should result [1,2] when ([1,2,'', undefined]) is entered as function parameters", () => {
        expect(removeUnwantedElements([1,2,'', undefined])).toEqual([1,2]);
    })
})