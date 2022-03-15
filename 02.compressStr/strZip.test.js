const solution = require('./strZip');

describe('문자열 압축 : 표현한 문자열 중 가장 짧은 것의 길이 테스트', () => {
    test('1번 케이스', () => {
        const s = '"aabbaccc"';
        expect(solution(s)).toEqual(7);
    });

    test('2번 케이스', () => {
        const s = "ababcdcdababcdcd";
        expect(solution(s)).toEqual(9);
    });

    test('3번 케이스', () => {
        const s = "abcabcdede";
        expect(solution(s)).toEqual(8);
    });

    test('4번 케이스', () => {
        const s = "abcabcabcabcdededededede";
        expect(solution(s)).toEqual(14);
    });

    test('5번 케이스', () => {
        const s = "xababcdcdababcdcd"
        expect(solution(s)).toEqual(17);
    });
});