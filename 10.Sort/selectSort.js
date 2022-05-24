
function selectionSort(array){
    let min;  // 최소 변수
    for(let i = 0; i < array.length -1; i++){ // 5번만 수행
        min = i; // 첫번째 시작할 때는 0 (index)
        
        for(let j = i+1; j < array.length; j++){ // i=0, j=1 ~ 6
            if(array[j] < array[min]) { // ex) j < i
                min = j; // 작은 값이 든 idx를 min에 설정
            }
        }
        if(i !== min){
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    console.log(array);
    return array;
}


selectionSort([4,2,6,5,1,3])