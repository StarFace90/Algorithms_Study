const solution = require('./lottos');

describe('lotto 최고 순위, 최저 순위 구하기', () => {
    test('solution test 1', () => {
        const lottos = [44, 1, 0, 0, 31, 25];
        const win_nums = [31, 10, 45, 1, 6, 19];

        expect(solution(lottos, win_nums)).toEqual([3, 5]);
    });

    test('solution test 2', () => {
        const lottos = [0, 0, 0, 0, 0, 0];
        const win_nums = [38, 19, 20, 40, 15, 25];

        expect(solution(lottos, win_nums)).toEqual([1, 6]);
    });

    test('solution test 3', () => {
        const lottos = [45, 4, 35, 20, 3, 9];
        const win_nums = [20, 9, 3, 45, 4, 35];

        expect(solution(lottos, win_nums)).toEqual([1, 1]);
    });
});