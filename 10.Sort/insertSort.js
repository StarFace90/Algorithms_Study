function insertionSort(array){
    console.log(array);
    let temp;
    for(let i = 1; i < array.length; i++){
        temp = array[i];

        for(var j = i -1; array[j] > temp && j > -1; j--){ // i=1, j=0, j는 음수가 아님
            array[j+1] = array[j];
            //console.log("in",array[j+1]);
        }
      
        array[j+1] = temp;
        //console.log("out",array[j+1]);
    }
    console.log(array);
    return array;
}

insertionSort([4,2,6,5,1,3]);
