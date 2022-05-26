const createNestedArray = require('../exercises/ex09');

describe('Testing ex09 - function that creates nests in an array', () => {
    it("should result [[1, 2], [3, 4], [5]] when ([1, 2, 3, 4, 5], 2) is entered as parameters", () => {
        expect(createNestedArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    })
})