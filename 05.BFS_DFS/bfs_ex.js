//입력



/**
 *           E
 *       D         A
 *   F          C     B
 */



const graph = {
    'E': ['D', 'A'],
    'F': ['D'],
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E', 'F']
}




// 출력
// ['E', 'D', 'A', 'F', 'C', 'B']

function solution(graph) {
    // 최상위 노드는 'E';

    let result = [];
    let currentNode = ['E']; // root부터 시작이므로

    console.log(graph[currentNode]); // [ 'D', 'A' ]

    // 현재노드에 값이 있다면
    // if (currentNode.length !== 0) {
    // output 첫 값이 'E' 최상위노드이므로
    //const flowNode = function (currentNode) {

    while (currentNode.length !== 0) {
        let save = currentNode.shift();
        console.log("shift", save)
        if (!result.includes(save)) {
            result.push(save) //['E']
            console.log("현재 검색된 노드", result);

            let graphSplit = graph[save].filter(x => !result.includes(x));
            console.log('filter', graphSplit)
            for (let i of graphSplit) {
                console.log("i", i);
                currentNode.push(i);

                console.log("현재노드", currentNode);
            }

        }

    }
    console.log("result", result); // ['E']
    return result;

}

solution(graph);