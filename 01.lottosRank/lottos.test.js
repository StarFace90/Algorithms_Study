const solution = require('./lottos');

describe('lotto의 최고순위와 최저순위 구하는 테스트', () => {
    test('1번 케이스', () => {
        const lottos = [44, 1, 0, 0, 31, 25];
        const win_nums = [31, 10, 45, 1, 6, 19];

        expect(solution(lottos, win_nums)).toEqual([3, 5]);
    });

    test('2번 케이스', () => {
        const lottos = [0, 0, 0, 0, 0, 0];
        const win_nums = [38, 19, 20, 40, 15, 25];

        expect(solution(lottos, win_nums)).toEqual([1, 6]);
    });

    test('3번 케이스', () => {
        const lottos = [45, 4, 35, 20, 3, 9];
        const win_nums = [20, 9, 3, 45, 4, 35];

        expect(solution(lottos, win_nums)).toEqual([1, 1]);
    });
});