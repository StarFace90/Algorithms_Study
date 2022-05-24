



function solution(n) {
    let nToStr = n.toString().split('');
    let answer = nToStr;

    for(let i = answer.length -1; i > -1; i--){
        for(let j=0; j < i; j++){
            if(answer[j] < answer[j+1]){
                let temp = answer[j];
                answer[j] = answer[j+1];
                answer[j+1] = temp;
            }
        }
    }

    let chanToNum = Number(answer.join(''));
    console.log(chanToNum);
    return chanToNum;
}


// function solution(n) {
//     let nToStr = n.toString().split('');
//     let array  = nToStr;
//     let temp;
//     for(let i = 1; i < array.length; i++){
//         temp = array[i];

//         for(var j = i -1; array[j] < temp && j > -1; j--){ // i=1, j=0, j는 음수가 아님
//             array[j+1] = array[j];
//             //console.log("in",array[j+1]);
//         }
      
//         array[j+1] = temp;
//         //console.log("out",array[j+1]);
//     }
// let chanToNum = Number(array.join(''));
//     console.log(chanToNum);
//     return chanToNum;
// }


// function solution(n) {
// let min;  // 최소 변수
//  let nToStr = n.toString().split('');
//   let array  = nToStr;
//     for(let i = 0; i < array.length -1; i++){ // 5번만 수행
//         min = i; // 첫번째 시작할 때는 0 (index)
        
//         for(let j = i+1; j < array.length; j++){ // i=0, j=1 ~ 6
//             if(array[j] > array[min]) { // ex) j < i
//                 min = j; // 작은 값이 든 idx를 min에 설정
//             }
//         }
//         if(i !== min){
//             let temp = array[i];
//             array[i] = array[min];
//             array[min] = temp;
//         }
//     }

// let chanToNum = Number(array.join(''));
//     console.log(chanToNum);
//     return chanToNum;
// }





let n = 118372;

solution(n);