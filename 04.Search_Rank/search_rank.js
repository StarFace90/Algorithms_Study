/**
 * TODO: 
 *   
 *   - query문을 기준으로(조건)  info데이터와 조회하여 결과 추출
 *   - query[0] 번에 대한 질문을 => info 전체 데이터 내에서 검색 => 결과는 []으로
 *   -  '-' 키워드가 존재하면 모든 조건을 통과할 것 
 *  // - 카운트를 활용하여 조건을 통과하면 누적시켜 일정 숫자에 도달할 경우 각 배열의 마지막 값인 '점수'를 비교하여 최종 함격자 판별 =>[카운트 제거]
 *   - 조건을 통과하면 true, 아니면 false를 배열에 저장하여 각 조건에 맞는 지원자 판별
 *   - 최대한 메서드 활용하기 
 *   - 코드의 길이 최대한 줄이기 
 *   - 무의미한 반복된 코드 줄이기
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
    // true의 갯수만 활용할 것이므로 judge자체는 리턴할 필요없다
    //return judge;

    let weWant = (judge['true'] === 4);
    return weWant;
}


function solution(info, query) {

    let infoArr, queryArr, queryValueSpace, inputQueryArr, answer, queryInfo, infoInfo;
    let people = 0;
    let arr = [];
    let savePoint = [];

    for (let j = 0; j < query.length; j++) {

        for (let i = 0; i < info.length; i++) {
            //count = 0;
            infoArr = info[i].split(' '); // [ 'java', 'backend', 'junior', 'pizza', '150' ]
            queryArr = query[j].split(' and ');// [ 'java', 'backend', 'junior', 'pizza 100' ]
            queryValueSpace = queryArr[3].split(' '); // [ 'chicken', '100' ]
            queryArr.pop();
            inputQueryArr = queryArr.concat(queryValueSpace);


            // 검색 조건
            queryInfo = inputQueryArr; // [ 'java', 'backend', 'junior', 'pizza', '100' ]

            // 지원자 정보
            infoInfo = infoArr;  // [ 'java', 'backend', 'junior', 'pizza', '150' ]

            queryInfo.forEach((element, index) => {
                // 누적된 arr의 상태 판별 현재 ture가 4개 이상인지 
                let figureIt = judgeCountTrue(arr);

                // 조건의 element가 '-'이면 queryInfo 배열의 해당 value를 지원자 배열의 해당 value 값으로 변경하여 일치시킨다.
                if ((element === '-')) {
                    queryInfo[index] = infoInfo[index];
                }

                // index는 4개 이상이 되면 안된다. 넘어가면 판별이 누적됨..
                if ((0 <= index) && (index < 4)) {
                    // 요구조건안에 지원자의 조건과 일치하면 true를 아니면 false를 arr에 넣는다.
                    arr.push(queryInfo.includes(infoInfo[index], 0));
                }

                // true가 4개인 경우 => 점수 판별하여 통과하면 people 카운트 +1 한다
                if (((figureIt) && (parseInt(infoInfo[4], 10) >= parseInt(queryInfo[4], 10)))) {
                    people++;
                    arr = [];
                }


                // 지원자가 조건을 통과하거나 못하거나 
                // index가 4일 경우 즉, 점수 판별을 한 경우 다음 지원자 판별을 위해 arr를 다시 초기화 한다 
                if (index === 4) {
                    arr = [];
                }
            });

        }
        // 각 질문에 대한 지원자를 판별하고 누적된 people을 배열에 넣는다
        savePoint.push(people);

        // 새로운 질문 이전에 people을 초기화한다 
        people = 0;
    }

    answer = savePoint;
    console.log("각 조건의 최종 합격자 명단", savePoint);

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