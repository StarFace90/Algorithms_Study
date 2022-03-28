/**
 * 
  TODO:  query문을 기준으로(조건)  info데이터와 조회하여 결과 추출
          '-' 키워드가 존재하면 모든 조건을 통과할 것 

          query[0] 번에 대한 질문을 => info 전체 데이터 내에서 검색 => 결과는 []으로
 */

//1 . 언어 [자바, 파이썬, cpp]
//2 . 직군 [프런트, 백엔드]
//3 . 경력 [주니어, 시니어]
//4 . 푸드 [피자, 치킨]
//5 . 점수 [1점 ~ 10만점 이하]


// [1,2,3,4,5] => 1번이면 => 1[1,2,3], 2번이면 => [1,2]

/**
 * 
 * FIXME: 
 * 
 * 1. 검색조건에 따른 합격자 배열 숫자 누적 방지
 * 2. 3번째 검색 조건에 5번째 지원자 정보 맞추는 부분에서 카운트 누적이 4가 되지만, 점수 조건이 안되는 경우인데 합격 되는 경우 
 * 3. 문자열인 숫자 -> 숫자형으로 변환하기 [정학한 판단이 되지 않음] => parseInt
 *  */




const judgeCountTrue = function (box) {
    let judge = box.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1
        return a;
    }, {});
    //return judge;

    let weWant = (judge['true'] === 4);
    return weWant;
}









function solution(info, query) {

    let infoArr, queryArr, queryValueSpace, inputQueryArr;
    let count = 0;
    var people = 0;
    let arr = [];
    let answer;
    let savePeople = [];
    let savePoint = [];
    let queryInfo;
    let infoInfo;

    // console.log(info);
    //console.log(query.length);

    // console.log(query[0].split(' and '));
    // console.log(info[0].split(' '));


    for (let j = 0; j < query.length; j++) {
        console.log('==========================================');
        console.log('==========================================');
        people = 0;
        console.log("현재 저장된 피플", savePeople);
        savePeople = [];
        arr = [];
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

            console.log('==========================================');
            console.log('==========================================');
            console.log(`${j}번째 검색 조건: `, queryInfo);
            console.log(`${i}번째 지원자 정보: `, infoInfo);


            queryInfo.forEach((element, index) => {

                console.log(`조건${index}번째`, element);

                //console.log(infoInfo[index]);
                //console.log(element === infoInfo[index]);
                //console.log(queryInfo.includes(infoInfo[index], 0));

                if ((element === '-')) {
                    queryInfo[index] = infoInfo[index];
                    //console.log("변경된 queryInfo", queryInfo);
                }

                if ((0 <= index) && (index < 4)) {
                    arr.push(queryInfo.includes(infoInfo[index], 0));
                    console.log("현재", arr);
                }

                let figureIt = judgeCountTrue(arr);
                console.log("현재 ture의 갯수가 4개인가", figureIt);


                if ((arr[index] === true)) {
                    //console.log('통과');
                    //count++
                    //console.log("카운트", count);
                    // }

                    // if (arr[index] === true) {
                    //     console.log('매칭으로 통과');
                    //     count++
                    //     console.log(count);



                    if (((figureIt) && (parseInt(infoInfo[4], 10) >= parseInt(queryInfo[4], 10)))) {
                        // console.log('모든 조건 완료');
                        //count = 0;
                        people++;
                        console.log("검색된 지원자", people + '명');
                        arr = [];
                        savePeople.push(people);

                        console.log("현재 저장된 피플", savePeople);

                    }



                }
                //console.log(info.length);//6
                if (index === 4) {
                    console.log("카운트", count);
                    //count = 0;
                    arr = [];
                }

                if (arr.length >= 5) {
                    console.log("길이 한도", arr);
                    arr = [];

                }

                //console.log('사람수', people);


            });


        }
        savePoint.push(people);
        console.log('저장갯수', savePoint);
    }




    // console.log("저장된 합격자 수", savePeople);

    // answer.push(savePeople.length);


    answer = savePoint;

    console.log("최종전", savePoint);
    console.log('==========================================');
    console.log('==========================================');

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