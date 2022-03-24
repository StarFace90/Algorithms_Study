const solution = require('./matrixRotate');

describe('행렬 테두리 회전하기 ', () => {
    test('케이스 1번', () => {
        const row = 6
        const columns = 6
        const queries = [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]];
        expect(solution(row, columns, queries)).toEqual([8, 10, 25]);
    });
    test('케이스 2번', () => {
        const row = 3
        const columns = 3
        const queries = [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]]
        expect(solution(row, columns, queries)).toEqual([1, 1, 5, 3]);
    });
    test('케이스 3번', () => {
        const row = 100
        const columns = 97
        const queries = [[1, 1, 100, 97]];
        expect(solution(row, columns, queries)).toEqual([1]);
    });

});