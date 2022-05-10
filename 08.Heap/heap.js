
class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    /** 
     * value : [41,39,33,18,27,12,55]
     * idx   :  0  1  2  3  4  5  6
     * 
     *  TODO: - 요소와 그 인덱스를 저장할 수 있는 변수 만들기
     *  todo: - 인덱스간의 자리를 바꾸면 바뀐자리로 다시 값을 바꿔준다.
     *  todo: - loop문으로 element를 가져다가 부모요소와 바꾼다.  -> 부모의 인덱스를 먼저 찾는다
     *  todo: - 부모의 인덱스를 찾고 거기 들어있는 값을 찾아서 element와 비교후에 조건이 맞으면 자리를 바꾼다.
     *  
     */

    bubbleUp() {
        let idx = this.values.length - 1; // 맨 마지막 인덱스로 시작
        const element = this.values[idx];// 요소만 가리키므로 const
        while (idx > 0) {
            // 부모인덱스를 먼저 찾기 위한 변수
            //! (인덱스 -1) /2 값을 내림할 것 -> 공식
            let parentIdx = Math.floor((idx - 1) / 2);
            console.log("부모 인덱스는?", parentIdx); // 예로 2면 -> 33이므로 실제 55의 부모이다.
            // 인덱스에 있는 요소와 element인 55를 비교
            let parent = this.values[parentIdx] // parent는 this.values 배열 값의 인덱스
            // element가 parent보다 크면 자리를 바꾼다.
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;// 값의 위치가 바뀌었으므로 초기화

        }
    }

    // 최대값을 없애는 메서드
    removeMaxValue() {
        /**
         *TODO: - 가장 앞에 있는 element를 제거하고 그 자리를 가장 뒤에 있는 element로 대체한다.
         * todo: - 부모인덱스를 찾고, 자식인덱스인 left, right를 찾아야한다 
         * todo: - 자식인덱스가 조건에 따라서 부모인덱스와 자리가 바뀐다.
         * todo: - 자리를 바꾼 자식인덱스가 새로운 부모의 값이 된다.
         * 
         * 
         */

        const maxValue = this.values[0]; // 가장 앞에 있는 값이 최대 값일 것
        const end = this.values.pop(); // 맨 뒤에 있는 요소를 제거
        this.values[0] = end; // 제거한 맨 뒤 요소를 최대값으로

        // 배열의 값이 1개일 경우, maxValue와 end값이 같아질 경우
        if (this.values.length > 0) {
            this.bubbleDown(); // todo: 과정을 위한 메서드
            console.log("맨 앞의 값은:");
        }
        return maxValue; // 가장 앞에 있는 값 출력
    }

    // 맨 앞의 요소에서 부터 제거되게
    bubbleDown() {
        let idx = 0;
        // 자식인덱스 찾기
        // ! 공식 왼쪽(2 * idx + 1) , 오른쪽(2 * idx + 2)
        const length = this.values.length;
        const element = this.values[0];
        // [33,39,41,18,27,12]
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            //해당 인덱스에 있는 값을 저장할 변수 
            let rightChild, leftChild;
            let swap = null; // loop안에서 자리 바꾸기를 했는지 여부를 추적하는 변수


            // 인덱스가 범위안에 들어와있는 것인지 확인
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]; //39
                // element(33)와 leftChild(39) 비교
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                // 자리바꾸기 하지 않았을 경우, element보다 leftChild가 더 크지 않았다면,
                // 왼쪽 자식과 오른쪽 자식이 둘다 element보다는 크지만 rightChild > leftChild 인 경우 
                if ((swap === null && rightChild > element)
                    ||
                    (swap !== null && rightChild > leftChild)) {
                    //똑같은 swap이지만 왼쪽과 오른쪽 자식 중 더 큰 값을 택해야하고, 오른쪽 자식이 더 클 경우
                    //이미 위에서 왼쪽이 swap으로 설정되었지만, right > left인 경우
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            // 실제로 자리를 바꾼다.
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

// [41, 39, 33, 18, 27, 12, 55];
let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap);
console.log(heap.removeMaxValue());
console.log(heap);
