const solution = require('./rotateMatrix90');

describe('행렬 90도 회전 테스트', () => {
    test('90도 회전 3 * 3', () => {
        const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const result = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
        expect(solution(input)).toEqual(result);
    });
    test('90도 회전 4 * 4', () => {
        const input = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
        const result = [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]];
        expect(solution(input)).toEqual(result);
    });
    test('90도 회전 5 * 5', () => {
        const input = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
        const result = [[21, 16, 11, 6, 1], [22, 17, 12, 7, 2], [23, 18, 13, 8, 3], [24, 19, 14, 9, 4], [25, 20, 15, 10, 5]];
        expect(solution(input)).toEqual(result);
    });
});