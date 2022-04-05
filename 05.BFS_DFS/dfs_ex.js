/**
 * **깊이 우선 탐색**이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 
 * 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.
 * 다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.
 */




/**
 *          E
 *       D      A
 *   F       C     B
 */





//input
let graph = {
    'A': ['E', 'B', 'C'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E', 'F'],
    'E': ['A', 'D'],
    'F': ['D'],
}

//output
//  ['E', 'D', 'F', 'A', 'C', 'B']

// 그래프처럼 연결된 리스트
// 'E'가 최상위 노드


// dfs에서 사용했던 방식은 stack, 재귀
// 바이너리 서치 트리 방식
// 프리오더 전위순회 방식과 유사

//
//  ['E', 'D', 'F', 'A', 'C', 'B']



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
        let save = currentNode.pop();
        console.log("pop", save)
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