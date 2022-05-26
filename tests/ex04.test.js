const arrayToObject = require('../exercises/ex04');

describe('Testing ex04 - function that converts array into object', () => {
    it("should result {c:2, d:4} when ([['c',2],['d',4]]) is entered as function parameters", () => {
        expect(arrayToObject([['c',2],['d',4]])).toEqual({c:2, d:4});
    })
})