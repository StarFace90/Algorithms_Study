
// ! 여기서는 전체행렬에서 회전하기 위해 선택된 행렬을 추출하는 함수 입니다.
function chooseRotateArea(matrix, queries) {
    //let queries = [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]];
    // x1 =2행, y1 =2열, x2=5행, y2=4열
    // idx화 = x1 = 1, y1 =1,  x2= 4, y2=3
    let x1, x2, y1, y2;

    //console.log("matrixxxx", matrix);
    //console.log(matrix[1][1]);
    //console.log(matrix[4][3]);

    x1 = queries[0][0];
    x2 = queries[0][2];
    y1 = queries[0][1];
    y2 = queries[0][3];

    let x = x2 - x1 + 1; //4
    let y = y2 - y1 + 1; //3

    let idxSave = [];
    let idxArr;
    let idxEmpty = [];


    let queriesArray = new Array(x);
    //   console.log("x행", queriesArray); // x행 [ <4 empty items> ]

    for (let i = 0; i < x; i++) {
        queriesArray[i] = new Array(y);
        // console.log('y열', queriesArray);
        // y열 [ [ <3 empty items> ], [ <3 empty items> ], [ <3 empty items> ],[ <3 empty items> ]]
    }


    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            queriesArray[i][j] = matrix[i + 1][j + 1];

            idxSave.push(i + 1, j + 1)
            // [ [ 8, 9, 10 ], [ 14, 15, 16 ], [ 20, 21, 22 ], [ 26, 27, 28 ] ]

            idxArr = idxSave.splice(0, 2);
            idxEmpty.push(idxArr);
        }
    }
    let queriesIndex = idxEmpty
    //console.log("queries에 의해 선택된 idx들 ", queriesIndex);
    //     [[ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 1 ],[ 2, 2 ], [ 2, 3 ],
    //      [ 3, 1 ], [ 3, 2 ],[ 3, 3 ], [ 4, 1 ],[ 4, 2 ], [ 4, 3 ]]
    console.log("선택된 위치", queriesArray);

    let copyM = queriesArray.slice();
    copyM.pop();
    copyM.shift();
    let fixed = [];
    for (let m = 0; m < copyM.length; m++) {
        let cc = copyM[m].slice(1, copyM[m].length - 1);
        fixed.push(cc);
    }

    let findMid = fixed.reduce((acc, cur) => {
        return acc.concat(cur);
    });
    console.log("고정값 담긴 배열: 움직이면 안되는 값들", findMid);

    //console.log("원래 행렬4", matrix);
    queries.shift();
    console.log("2회차 queries", queries);
    return matrixRotate90(queriesArray, findMid, matrix, queries);
    //[ [ 8, 9, 10 ], [ 14, 15, 16 ], [ 20, 21, 22 ], [ 26, 27, 28 ] ]

}



//! 행과 열 값을 통해 전체 행렬을 생성합니다.
//! 행렬을 만든 뒤에는 움직여야할 좌표(queies)값과 함께 
//! 이동하기 위해 선택된 행렬을 추출하는 chooseRotateArea함수로 이동합니다.
function solution(rows, columns, queries) {
    let arr = [];
    let makeArray = [];
    //순차적 숫자 배열 만드는 로직 (new Array 안하고) : 행과 열이 다를 경우 0 및 value 제거되는 문제 있음
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            arr.push(((i - 1) * columns + j + rows + 1));

        }
        let empty = arr.splice(0, columns);
        makeArray.push(empty);
    }
    console.log("만들어진 행렬:", makeArray);

    // 6 * 6 행렬 
    return chooseRotateArea(makeArray, queries);
}






//! 선택된 행렬 값을 이동시켜 움직이고 다시 원래의 행렬값에 대입하는 함수 입니다.
//! 함수가 실행되고나서 변환된 행렬을 통해 다시 chooseRotateArea로 이동합니다.
function matrixRotate90(chooseMatrix, mid, original, queries) {
    console.log(chooseMatrix[0][0]); //8

    let x = chooseMatrix[0].length;
    let y = chooseMatrix.length;


    //console.log(x); //3
    // console.log(y); //4

    let makeArray = new Array(y);
    // console.log("y축", makeArray); //  [ <4 empty items> ]

    for (let i = 0; i < y; i++) { // 0,1,2,3
        makeArray[i] = new Array(x);
        //    console.log("x축", makeArray);
    }

    for (let k = 0; k + 1 < y; k++) { // k =1,2 3, y=4
        for (let j = 0; j < x; j++) { //j= 0,1,2, x=3

            if (j === 0) {
                //  console.log("1");
                makeArray[k][j] = chooseMatrix[k + 1][j];
                //   console.log("1번", makeArray[k][j]); //14,20,26
            }
            if ((k + 1 === 3) && (j === 0 || j === 1)) {
                // console.log("2");
                makeArray[k + 1][j] = chooseMatrix[k + 1][j + 1];
                //  console.log("2번", makeArray[k + 1][j]); //27,28
            }

            if ((k === 0) && (j !== 2)) {
                // console.log("4");
                makeArray[k][j + 1] = chooseMatrix[k][j];
                // console.log("3번", makeArray[k][j + 1]); //8,9
            }

            if (j === 2) {
                //  console.log("3");
                makeArray[k + 1][j] = chooseMatrix[k][j];
                //console.log("4번", makeArray[k + 1][j]); //10,16,22
            } else if (k === 1 && j === 1) {

                // console.log("k와 j", k, j) //0,0, 0,1, 1,0, 1,1, 2,0, 2,1
                makeArray[k][j] = mid[0]
                makeArray[k + 1][j] = mid[1]
            }

        }
    }

    let result = makeArray;


    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 3; j++) {
            original[i][j] = result[i - 1][j - 1];
            var resultArray = original;
        }
    }

    let matrixTo1d = result.reduce((acc, cur) => {
        return acc.concat(cur);
    }).sort((a, b) => a - b);

    let min = [];

    min.push(matrixTo1d[0]);



    //console.log("원본", chooseMatrix);
    //console.log("result", result);
    console.log("움직인 값 중 제일 작은 수", min);
    console.log("변환된행렬은?: ", resultArray);
    // 여기서 다시 원래의 첫 큰 배열로 돌아가야함...

    // 최소값의 (배열) 길이가  queries의 길이와 같지 않으면 계속해서 함수 실행한다.
    // queries=[[2,2,5,4],[3,3,6,6],[5,1,6,3]]	 min = [8, 10, 25]
    // if (min.length !== queries.length) {
    //     chooseRotateArea(resultArray, queries);
    // } else {

    return min;
    // }
}


let queries = [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]];
const row = 6;    // 행
const columns = 6; //열



solution(row, columns, queries)

module.exports = solution;

