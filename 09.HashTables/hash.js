// function hash(key, arrayLen) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }

// hash('pink',10); 0
// hash('orange',10); 0 이건 좋은건가??

// 어떻게 문자를 숫자로 변환할까??
// 글자에는 utf값을 가지는데 그것을 이용
//"a".charCodeAt(0); // 97     -96을 해주면 1이된다  이런식으로 a는 1 b는 2....
// 위 함수는 스트링만 처리한다. 숫자는?
// 데이터가 생각보다 뭉치기 쉽니다. pink나 orange등  그래서 소수를 활용하자!

/**
 * TODO:
 * todo: 상수값의 시간에 가까워질수록 성능개선
 * todo: 무작위성 높이자!
 * todo: 속도는 조금 빠르게 
 */

// 핵심은 최소값 추가하여 key의 길이와 100에 대한 판정!
// 소수를 추가하여 배열의 길이가 소수가 되게 했다 :  충돌의 횟수를 줄이고 데이터가 더 퍼지고 무작위성을 가지도록 하기 위해!

// function hash(key, arrayLen) {
//     let total = 0;
//?    let WEIRD_PRIME = 31; //(소수 prime_num)
//!     for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96
//         total = (total * WEIRD_PRIME + value) % arrayLen;
//     }
//     return total;
// }

/**
 * 
 * 데이터가 많이 있는 경우라면 충돌발생 가능성 높다
 * 
 * 개별체이닝과 직선탐색법 
 * 
 * 10개를 가진 공간이 있다면
 * 
 * 개별체이닝(Separate Chaining): 같은 장소에 여러 데이터를 저장할 때, 배열이나 연결 리스트 등과 같은 것을 활용하여
 * 이중 데이터 구조를 쓰는 것 (공동저장) , 여러개의 키 - 값은 같은 자리에 저장
 * 10개 보다 더 많은 데이터 저장
 * 
 * 
 * 직선탐색법(Linear Probing): 각 위치에는 하나의 데이터만 저장하는 규칙을 지킨다.
 * 충돌이 발생하면 다음 빈 칸이 어디인지 확인한다
 * 10개가 최대 저장량
 * 
 * 
 * 
 */


/** 
 * 
 *  TODO: Set
 *  todo: key하나와 value 하나를 입력한다
 *  todo: key를 해시처리한다 (어디에 저장할지 알아내기!);
 *  todo:  개별체이닝을한다 (중첩구조에 저장을 해야하기 때문에 복잡);
 * ? 해시처리 값이 4이면 index 4에가서 확인 하고
 * ? 값이 없으면 거기에 저장(배열을 만들고 -> push)
 * ? 값이 있다면 그냥 거기 있는 배열에 push 처리
 * 
 * TODO: Get
 * todo: key입력시 해시처리, 해시함수에 의해 숫자가 나온다
 * todo: 값을 얻고 나면 keyMap 배열의 인덱스에 해당하는 자리로 가서 값을 확인한다 (loop)
 * todo: 값을 찾으면 그 배열 전체를 출력(순서는 정해져있지 않다.), 해시테이블에 해당하는 것이 없다면 undefined를 출력
 */


class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }



    set(key, value) {
        let index = this._hash(key); // key해시를 하고 index 변수에 저장 (index는 size범위의 수)
        // key와 value를 해당 인덱스에 넣는다(key,value)
        //? 개별체이닝을 사용할 것
        //keyMap = [ , ,[{key:value},{key:value}], , , , ]; 와 같은 형태

        // keyMap[index]에 아무것도 없는지 확인 -> 없으면 빈 배열 추가
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        // 값이 있으면 그 자리에 그대로 key,value추가
        this.keyMap[index].push([key, value]);
    }



    get(key) {
        let index = this._hash(key); //key 해시를 하고 index 변수에 저장
        // 해당 인덱스에 뭔가 있는지 확인
        if (this.keyMap[index]) {
            // 해시테이블 인덱스의 전체요소를 출력하면 안된다.-> loop로 찾는 것을 확인한 뒤 하위 배열 출력
            for (let i = 0; i < this.keyMap[index].length; i++) {
                // 입력한 key가 배열의 첫번째 요소와 같은지 확인
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                    // 무언가 있으므로 값을 출력한다(해당 인덱스에 있는 중첩리스트에서의 올바른 키와 값)
                }
            }
        }
        return undefined; // 아무것도 없다면 undefined 출력 
    }



    keys() {
        let keysArr = []; // 모든 데이터를 저장할 배열
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) { // key 중복이 있는지 확인
                        keysArr.push(this.keyMap[i][j][0]); // key를 push한다
                    }
                }
            }
        }
        return keysArr;
    }




    values() {
        let valuesArr = []; // 모든 데이터를 저장할 배열
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                // 모든 value를 모아서 valuesArr에 push한다

                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // 중복된 value가 push되는 것을 막기 이미 valuesArr에 중복된 데이터가 있는지 확인
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]); // value를 push한다
                    }
                }
            }
        }
        return valuesArr;
    }
}



let package = {
    avocado: '\ud83e\udd51',
    carrot: '\ud83e\udd55',
    tomato: '\ud83c\udf45',
    strawberry: '\ud83c\udf53',
    peach: '\ud83c\udf51',
    banana: '\ud83c\udf4c',
    watermelon: '\ud83c\udf49'
}
// package 객체의 길이구하는 메서드
let getLengthOfPackage = (obj) => {
    let packageLen = Object.keys(obj).length;
    return packageLen;
}
let len = getLengthOfPackage(package);

// package 객체의 전체 키 값 출력 (배열화)
let packageWhole = Object.entries(package);
//console.log(packageWhole);



// 새로운 hashT 생성 길이는 package 객체의 길이와 같게!
let hashT = new HashTable(len);
let whatNum;

for (const [key, value] of packageWhole) {
    hashT.set(key, value); // for of문으로 키와 값 반복해서 hashT에 넣는다
    whatNum = hashT._hash(key); // key값에 대한 hash값 확인
    //console.log(`${key}의 hash 인덱스 값 ${whatNum}`);
}
//console.log(hashT);




// key나 value를 호출하면 해시테이블 전체를 돌면서 모든 색깔 추출
hashT.keys().forEach((key) => {
    //console.log(hashT.get(key));
})

