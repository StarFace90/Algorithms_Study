/**
 * TODO: 
 *   
 *   - query문을 기준으로(조건)  info데이터와 조회하여 결과 추출
 *   - query[0] 번에 대한 질문을 => info 전체 데이터 내에서 검색 => 결과는 []으로
 *   -  '-' 키워드가 존재하면 모든 조건을 통과할 것 
 *  // - 카운트를 활용하여 조건을 통과하면 누적시켜 일정 숫자에 도달할 경우 각 배열의 마지막 값인 '점수'를 비교하여 최종 함격자 판별 =>[카운트 제거]
 *   - 조건을 통과하면 true, 아니면 false를 배열에 저장하여 각 조건에 맞는 지원자 판별
 *  
 *   ! 주석 등 지저분한 것들 정리
 */

/**
 * FIXME: 
 * 
 * [헤결] 1. 검색조건에 따른 합격자 배열 숫자 누적 방지
 * [해결] 2. 3번째 검색 조건에 5번째 지원자 정보 맞추는 부분에서 카운트 누적이 4가 되지만, 점수 조건이 안되는 경우인데 합격 되는 경우 
 * [해결] 3. 문자열인 숫자 -> 숫자형으로 변환하기 [정학한 판단이 되지 않음] => parseInt
 *    
 *  */


// ? 누적된 배열 안의 true의 갯수 판단하여 4개 이상일 경우 true를 반환해주는 함수

const judgeCountTrue = function (box) {
    let judge = box.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1
        return acc;
    }, {});
    let weWant = (judge['true'] === 4);
    return weWant;
}

function solution(info, query) {
    let infoArr, queryArr, queryValueSpace, inputQueryArr, answer;
    let people = 0;
    let savePoint = [];
    let savePeople = [];

    for (let j = 0; j < query.length; j++) {
        people = 0;
        savePeople = [];

        for (let i = 0; i < info.length; i++) {
            infoArr = info[i].split(' ');
            queryArr = query[j].split(' and ');
            queryValueSpace = queryArr[3].split(' ');
            queryArr.pop();
            inputQueryArr = [...queryArr, ...queryValueSpace];

            // 검색 조건
            newQuery = inputQueryArr; // [ 'java', 'backend', 'junior', 'pizza', '100' ]

            // 지원자 정보
            newInfo = infoArr;  // [ 'java', 'backend', 'junior', 'pizza', '150' ]

            let infoInfo = newInfo.slice(0, 4);
            let queryInfo = newQuery.slice(0, 4);


            const orCheck = queryInfo.map((element, index) => {
                if ((element === '-')) {
                    queryInfo[index] = infoInfo[index];
                    return queryInfo
                } else if ((element !== '-')) {
                    return queryInfo
                }
            });
            let orArr = orCheck.splice(0, 1).flat();


            const trueCheck = infoInfo.map((val, index) => {
                return tureOrFalse = (val === orArr[index]);
            })
            let figureIt = judgeCountTrue(trueCheck);

            if (trueCheck.length === 0) {
                continue;
            }

            if ((figureIt) && (parseInt(newInfo[4], 10) >= parseInt(newQuery[4], 10))) {
                people++
                savePeople.push(people);
            }

        }
        // 각 질문에 대한 지원자를 판별하고 누적된 people을 배열에 넣는다
        // 새로운 질문 이전에 people을 초기화한다 

        savePoint.push(people);
    }
    answer = savePoint;
    console.log(answer);
    return answer;
}

let info =
    ["java backend junior pizza 150",
        "python frontend senior chicken 210",
        "python frontend senior chicken 150",
        "cpp backend senior pizza 260",
        "java backend junior chicken 80",
        "python backend senior chicken 50",
    ];

let query =
    ["java and backend and junior and pizza 100",
        "python and frontend and senior and chicken 200",
        "cpp and - and senior and pizza 250",
        "- and backend and senior and - 150",
        "- and - and - and chicken 100",
        "- and - and - and - 150",
    ];


solution(info, query)
// [1,1,1,1,2,4]


module.exports = solution;