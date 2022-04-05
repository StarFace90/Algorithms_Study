// dfs : Depth First Search 깊이 우선 탐색


/**
 *          47
 *      21      76
 *   18   27  52   82
 */



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
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let temp = this.root
        while (true) {
            if (newNode.value === temp.value) return undefined
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    includes(value) {
        if (this.root === null) return false
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


    /**
     *          47
     *      21      76
     *   18   27  52   82
     */


    // 재귀와 stack을 이용

    //? 1. preOrder(전위 순회) : 루트 노드 부터 왼쪽으로 갔다가 다시 분기점으로 돌아와서 오른쪽으로 이후에는 루트 노드의 오른쪽 서브노드로 가서 다시 왼쪽부터 탐색

    DFSPreOrder() {

        let results = [];

        function flowNode(currentNode) {
            results.push(currentNode.value);
            if (currentNode.left) flowNode(currentNode.left);  // 현재 노드의 왼쪽에 시작할 노드가 있다면 그것이 currentNode 되어 재귀 왼쪽에 없을 때 까지 탐색
            if (currentNode.right) flowNode(currentNode.right); // 

            // 왼쪽까지 전부 탐색 하게 되면 스택 최상단 부터 오른쪽 노드가 있을 때 까지 pop 한다
        }
        flowNode(this.root); // 최상위 노드부터 시작
        return results; // [47,21,18,27,76,52,82]
    }

    // dfsPreOrder방식의 결과 : [47,21,18,27,76,52,82];



    /**
     *          47
     *      21      76
     *   18   27  52   82
     */

    //? 2. dfs PostOrder(후위순회)  : 트리를 불러오기 위한 깊이 우선 검색 단계 
    // 루트로 부터 맨 왼쪽으로 탐색하고 더 이상 값이 없으면 마지막 값을 첫 번째 배열에 넣는다.
    // 마지막 값을 거쳐온 노드들은 이미 왼쪽으로 탐색했으므로 오른쪽에 있는 노드로 가서 왼쪽으로 가거나 하위 노드가 없으면 배열에 넣는다.
    // 오른쪽 탐색이 끝나면 상단 노드는 왼쪽 오른쪽 전부 탐색 했기 때문에 상단 노드를 배열에 넣는다.
    DFSPostOrder() {
        let results = [];

        // preOrder에서 사용했던 flowNode를 재 사용 ! 트리를 불러오기 위함 이므로 호출되는 순서를 변경한다. 
        function flowNode(currentNode) {
            if (currentNode.left) flowNode(currentNode.left);  // 현재 노드의 왼쪽에 시작할 노드가 있다면 그것이 currentNode 되어 재귀 왼쪽에 없을 때 까지 탐색
            if (currentNode.right) flowNode(currentNode.right); // 
            results.push(currentNode.value);
        }
        flowNode(this.root);
        return results;
    }
    // [18,27,21,52,82,76,47]

    /**
     *          47
     *      21      76
     *   18   27  52   82
     */

    //? 3. dfs InOrder(중위 순회) : 왼쪽 부터 가장 낮은 값의 노드 부터 탐색하는 단계 (낮은 것에서 부터 가장 높은 것으로)
    DFSInOrder() {
        let result = [];

        // preOrder에서 사용했던 flowNode를 재 사용 ! 
        function flowNode(currentNode) {
            if (currentNode.left) flowNode(currentNode.left);  // 현재 노드의 왼쪽에 시작할 노드가 있다면 그것이 currentNode 되어 재귀 왼쪽에 없을 때 까지 탐색
            result.push(currentNode.value); // 왼쪽으로 가는 노드가 더 이상 없다면 그 노드 값을 배열에 Push 한다
            if (currentNode.right) flowNode(currentNode.right); // 
        }
        flowNode(this.root);
        return result;
    }

    // [18,21,27,47,52,76,82]
}


let newTree = new BST();
newTree.insert(47);
newTree.insert(21);
newTree.insert(76);
newTree.insert(18);
newTree.insert(27);
newTree.insert(52);
newTree.insert(82);



console.log(newTree.DFSPreOrder());      // [47,21,18,27,76,52,82];
console.log(newTree.DFSPostOrder());    // [18,27,21,52,82,76,47];
console.log(newTree.DFSInOrder());     // [18,21,27,47,52,76,82];