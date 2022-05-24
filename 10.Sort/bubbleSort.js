 

// function swap(arr, idx1, idx2){
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
//     console.log(arr);
// }


// const swap = (arr, idx1, idx2) => {
//     [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
// }

// swap([1,2,3,4,5], 0,3);

function bubbleSort(array){
    console.log("버블정렬 전",array);
    let breakSwap;
    for(let i = array.length -1 ; i >0; i--){ 
        breakSwap = true;
        for(let j=0; j < i; j++){
          //  console.log(array);
            if(array[j] > array[j+1]){ // 비교
            let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp;
                breakSwap = false;
            }
        }
        if(breakSwap) break;
    }
    console.log("버블정렬 후",array);
    return array;
}

//bubbleSort([4,2,6,5,1,3]);
bubbleSort([4,1,2,3,5,6,7]);