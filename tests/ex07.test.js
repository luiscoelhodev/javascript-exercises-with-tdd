const compareArrays = require('../exercises/ex07');

describe('Testing ex07 - function that compares two arrays', () => {
    it("should result 'true' when ([1,2,3,4],[1,2,3,4]) is entered as function parameters", () => {
        expect(compareArrays([1,2,3,4],[1,2,3,4])).toBe(true);
    })

    it("should result 'false' when length of the arrays are different", () => {
        expect(compareArrays([1,2], [1,2,3])).toBe(false);
    })

    it("should return 'false' when the loop finds a different match", () => {
        expect(compareArrays([1,2,3,4],[1,2,4,3])).toBe(false);
    })
})