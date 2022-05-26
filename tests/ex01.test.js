const createArray = require('../exercises/ex01');

describe('Testing ex01 - function that creates an array', () => {
    it("should result ['a', 'a', 'a'] when (3,a) is entered as function parameters", () => {
        expect(createArray(3, 'a')).toEqual(['a', 'a', 'a']);
    })
})