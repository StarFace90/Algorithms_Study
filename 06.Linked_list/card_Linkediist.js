
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this; // newNode
    }

    // 맨 마지막 노드를 제거하고 반환한다.
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        //다음 노드가 있으면 계속 반복
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // tail 이동
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }


    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }


    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }


    set(index, value) {
        let temp = this.get(index);
        if (temp != null) {
            temp.value = value;
            return true;
        } else {
            return false;
        }
    }


    insert(index, value) {
        // 0이면 맨 앞의 노드를 반환
        if (index === 0) return this.unshift(value);
        // 인덱스와 노드의 길이가 같을경우, 맨 뒤의 노드값을 반환
        if (index === this.length) return this.push(value);


        // 인덱스가 노드의 범위에 벗어나면 false 반환
        if (index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const temp = this.get(index - 1);

        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }


    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
    }


    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}
// LinkedList {
//     head: Node { value: 4, next: null },
//     tail: Node { value: 4, next: null },
//     length: 1
//   }


// LinkedList {
//     head: Node { value: 4, next: Node { value: 10, next: null } },
//     tail: Node { value: 10, next: null },
//     length: 2
//   }


// 1,2,3,4,5,6
//1 버리고 3,4,5,6,2
//3 버리고,5,6,2,4
//5 버리고, 2,4,6
//2 버리고, 6,4
//6 버리고, 4



const cards = new LinkedList();


for (let i = 1; i <= 6; i++) {
    cards.push(i);
}



while (cards.length !== 1) { //1,2,3,4,5,6
    let c = cards.remove(0);
    console.log("지워진노드의 값", c.value);
    console.log("현재헤드의 값", cards.get(0).value);
    cards.insert(cards.length, cards.get(0).value);
    console.log(cards)
    cards.remove(0);
}

console.log("결과", cards.head.value);


//module.exports = solution;


// 알고리즘 오픈 채팅방;