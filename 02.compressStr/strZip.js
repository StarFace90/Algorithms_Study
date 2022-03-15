//s의 길이는 1이상 1000 이사
//s는 알파벳 소문자로만 이루어짐

// abab cdcd abab cdcd
// 2ab2cd2ab2cd -> 12
// 2ababcdcd -> 9

// 문자별로 매칭해서 ->
// 단위 별로 잘라 압축 
// 단위 별로 압축 된 문자열 길이


//let arr = [];

let lastResult;
//let test = 'abcabcabcabcdededededede'.split('');
let test = 'abcabcabcabcdededededede'.split('');

// 먼저 인풋 값인 문자열의 길이를 구한다 
let strLen = test.length;
console.log("문자열 길이", strLen);


function culStrLen(strLen) {
    // 문자열의 길이를 나눠서 나머지가 0으로 떨어지는 값들을 구한다 
    for (let i = 2; i < strLen; i++) {

        let result = strLen % i;


        //2,3,4,6,8,12
        if ((result === 0)) {
            let arr = [];
            let arr2 = test.slice();


            for (let j = 1; j <= (strLen / i); j++) {
                //console.log(`${i}분할로 나눌 차례`);
                arr.push(arr2.splice(0, i).join(''));
                console.log(`${i}분할로 나눌 차례 잘라낸 arr2`, arr, "길이", arr.length, "각 길이", arr[0].length);

            }
            lastResult = arr;
        }
        return controlArr(lastResult);
    }

}
// 분할은 성공 그다음엔? 

//! 6분할로 나눌 차례 잘라낸 arr2 [ 'abcabc', 'abcabc', 'dedede', 'dedede' ] 길이 4 각 길이 6


function controlArr(conArr) {
    // 넘어오는 arr
    console.log("넘어오는 arr", ...conArr);
    let result = conArr.reduce((acc, cur) => {
        // console.log("acc", acc);
        // console.log("cur", cur);
        // console.log("현재 값", acc[cur]);
        acc[cur] = (acc[cur] || 0) + 1;
        // 객체에서 cur key값을 찾아 value값이 있으면 그 value에서 1을 더하고, 없다면 0을 할당하고 거기에 1을 더해준다. 
        return acc;
    }, {});

    console.log('result', result); // 'result' { abca: 1, bcab: 1, cabc: 1, dede: 3 }


    for (let key in result) {
        if (result[key] > 1) {
            console.log(key)
            let padStr = key.padStart(key.length + 1, result[key]);
            console.log(padStr);
        }
    }
}












function solution(s) {
    var answer = 0;



    return answer;
}




culStrLen(strLen)








module.exports = solution;
