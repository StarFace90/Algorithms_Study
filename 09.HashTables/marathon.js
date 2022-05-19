// 해쉬의 키워드인 키와 value를 최대한 활용하여 만들자
/**
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

참가자 중에는 동명이인이 있을 수 있습니다.
 *
 */


function solution(participant, completion) {
    let makeObj = participant.reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur] = acc[cur] + 1;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {});

    console.log('객체 생성확인', makeObj);

    let obj = Object.entries(makeObj);
    sameNameCheck(obj);

    function sameNameCheck(obj) {
        for (const [key, value] of obj) {
            //console.log(`${key}: ${value}`);
            if (value > 1) {
                console.log("중복된 이름을 가진 사람은?", key);
                return key;
            }
        }
    }

    completion.forEach((x) => {
        if (makeObj[x]) {
            makeObj[x] = makeObj[x] - 1;
        }
        if (makeObj[x] === 0) {
            delete makeObj[x]
        };
    });
    // 키만 뽑아낸다.
    console.log(makeObj);
    let result = Object.keys(makeObj)[0];
    console.log("완주하지 못한사람은:", result);
}


let participant = ['mislav', 'stanko', 'mislav', 'ana'];
let completion = ['stanko', 'ana', 'mislav'];


solution(participant, completion);