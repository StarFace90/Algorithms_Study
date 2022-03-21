
// 행렬이 90도 회전하는 함수 3 * 3예제
function matrixRotate90(matrix) {

    // let x = matrix.length; // 가로(행) [1,2,3],[4,5,6],[7,8,9] 길이 총 3개
    // let y = matrix.length; // 세로(열) [1,4,7],[2,5,8],[3,6,9] 길이 총 3개 
    let arr = [];
    let arr1 = [];
    let empty = [];
    // console.log(x); //3
    // console.log(y); //3

    // let makeArray = new Array(y);
    // console.log("y축", makeArray); //  [ <3 empty items> ]

    // for (let i = 0; i < y; i++) {
    //     makeArray[i] = new Array(x);
    //     console.log("x축", makeArray);
    // }

    // for (let k = 0; k < y; k++) {
    //     for (let j = 0; j < x; j++) {
    //         makeArray[k][j] = matrix[x - j - 1][k];
    //         console.log("최종", makeArray);

    //     }
    // }
    //let result = makeArray;

    let makeMatrix = matrix;
    console.log("원본", makeMatrix);

    let makeMatrixCopy = matrix.slice();
    console.log("카피", makeMatrixCopy);


    for (let i = 0; i < makeMatrix.length; i++) { // 0,1,2
        // console.log("dsdd", makeMatrix[i][3 - (i + 1)])

        for (let j = 0; j < makeMatrix.length; j++) {   // 0,1,2
            // console.log("i:", i, "j:", j)
            arr[i] = makeMatrix[makeMatrix.length - (j + 1)][i];
            console.log("arr[i]", arr[i]); // 7,4,1,....
            arr1.push(arr[i]);
        }

        var c = arr1.splice(0, makeMatrix.length); // [ 7, 4, 1 // 8, 5, 2 // 9, 6, 3 ]
        empty.push(c); //[7,4,1],[8,5,2],[9,6,3]

    }
    let result = empty;


    // [0,0, 0,1, 0,2]       [2,0, 1,0, 0,0]
    // [1,0, 1,1, 1,2]  ->   [2,1, 1,1, 0,1]
    // [2,0, 2,1, 2,2]       [2,2, 1,2, 0,2]


    // [[7,4,1],[8,5,2],[9,6,3]]




    console.log("result", result);
    return result;

}

let matrix =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

matrixRotate90(matrix);





module.exports = matrixRotate90;
