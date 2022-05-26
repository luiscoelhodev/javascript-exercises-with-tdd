const denestArray = require('../exercises/ex08');

describe('Testing ex08 - function that breaks nests inside an array', () => {
    it("should result [1, 2, 3, 4, 5] when ([1, 2, [3], [4, 5]]) is entered as function parameter", () => {
        expect(denestArray([1, 2, [3], [4, 5]])).toEqual([1, 2, 3, 4, 5]);
    })

    it("should result [1, 2, 3, {key: 'value'}, 4, 5] when ([1, 2, [3], [{'key': 'value'}], [4,5]])", () => {
        expect(denestArray([1, 2, [3], [{"key": "value"}], [4,5]])).toEqual([1, 2, 3, {key: 'value'}, 4, 5])
    })
})