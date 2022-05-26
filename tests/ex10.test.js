const findCommonElements = require('../exercises/ex10');

describe('Testing ex10 - function that finds equal values in two different arrays', () => {
    it("should result [8] when ([6, 8], [8, 9]) is entered as function parameters", () => {
        expect(findCommonElements([6, 8], [8, 9])).toEqual([8]);
    })
})