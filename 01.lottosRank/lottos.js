function solution(lottos, win_nums) {
    let arrMax = [];
    let arrMin = [];
    let maximum;
    let minimum;
    let rank = [6, 5, 4, 3, 2, 1];

    let filLenth = lottos.filter(x => x === 0).length;

    for (let i = 0; i < lottos.length; i++) {

        //idx = lottos.indexOf(win_nums[i]);
        let idx = win_nums.includes(lottos[i]);

        // 번호가 맞거나 모르는 번호가 맞는 경우 
        if (idx || (lottos[i] === 0)) {
            maximum = arrMax.push(idx);

        }
        // 번호가 맞거나 모르는 번호가 틀린 경우
        if (idx) {
            minimum = arrMin.push(idx);
        }
        // 모든 번호를 모르는데 다 틀린 경우
        if (filLenth === 6) {
            minimum = 1;
        }
    }

    // 찾은 만큼 카운트 되는 수가 랭크의 인덱스 + 1이되어 등수가 된다
    let maxRank = rank.indexOf(maximum) + 1;
    console.log(`최대 등수는: ${maxRank}등`);

    let minRank = rank.indexOf(minimum) + 1;
    console.log(`최소 등수는: ${minRank}등`);


    let answer = [maxRank, minRank];

    //let result = [`최대등수${}, 최소등수${}`]
    console.log(answer);
    return answer;
}