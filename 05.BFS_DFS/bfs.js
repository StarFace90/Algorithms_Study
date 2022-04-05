/**
 *  * bfs (breadth first search) 너비 우선 탐색 원리  
 * 
 *           최상단 노드를 시작으로 왼쪽 부터 진행하여 오른쪽으로 탐색하는 방식
 * 
 * 
 *  */

class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}


// 이진탐색 트리
// : 루트 노드의 왼쪽 서브트리에는 해당 노드의 키보다 작은 키를 갖는 노드들로 
// : 루트 노드의 오른쪽 서브트리에는 해당 노드의 키보다 큰 키를 갖는 노드를로 이루어져있다.

/**
 *          47
 *      21      76
 *   18   27  52   82
 */


class BST {
    constructor() {
        this.root = null;
    }

    // 트리에 노드를 추가하는 함수
    insert(value) {
        // 최상위 노드 추가
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let temp = this.root

        // 루트 노드와 비교하여 현재노드 값이 작으면 루트노드 기준 왼쪽으로, 크면 오른쪽으로 이동한다.
        // return에 도달할 때 까지 계속 실행 
        while (true) {
            if (newNode.value === temp.value) return undefined
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left

                // 루트와 비교해서 현재노드 값이 클 경우(오른쪽으로 이동)
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    // 트리에 포함되어있는지 확인하는 메서드
    includes(value) {
        if (this.root === null) return false // 빈 트리

        let temp = this.root
        while (temp) {
            if (value < temp.value) {
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false
    }


    // 최소값 포함하는 노드 반환 하는 메서드 왼쪽, 오른쪽

    minValueNode(currentNode) {
        // 현재 노드의 왼쪽 자식노드가 있는지 확인 
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }




    // bfs 코드
    BFS() {
        let currentNode = this.root;
        let arr = [];
        let results = [];

        // arr이라고 명시했지만 queue방식

        arr.push(currentNode); // 현재 위치의 노드를 배열에 push 한다.

        // arr의 길이가 없어질 때 까지 실행
        while (arr.length) {
            currentNode = arr.shift(); // 배열에 push한 노드 값을 배열에서 제거한다
            results.push(currentNode.value); // 제거한 값을 결과 배열에 push 한다

            // 현재 노드의 왼쪽이나 오른쪽에 값이 존재하면 그 값을 배열에 넣는다.
            if (currentNode.left) arr.push(currentNode.left);
            if (currentNode.right) arr.push(currentNode.right);
        }
        return results;
    }
}



let newTree = new BST();
newTree.insert(47);
newTree.insert(21);
newTree.insert(76);
newTree.insert(18);
newTree.insert(27);
newTree.insert(52);
newTree.insert(82);



console.log(newTree.BFS());