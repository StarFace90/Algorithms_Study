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


    // 노드나 값을 리스트에 추가한다.(맨뒤)
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
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
    // 리스트의 맨 앞에 노드를 추가한다.
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


    // 리스트의 앞에서 노드를 제거한다.
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


    // 해당하는 인덱스에 있는 노드를 출력
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }


    // 해당 인덱스에 해당하는 값을 바꿔줄 데이터와 값도 같이 입력
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }


    // 주어진 인덱스 위치에 새롭게 노드를 삽입한다.
    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const temp = this.get(index - 1);

        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }


    // 주어진 인덱스 위치의 노드를 제거
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
    }


    // 노드 역전 (역방향)
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

let testLinkedList = new LinkedList();
testLinkedList.push(5);
testLinkedList.push(6);
testLinkedList.push(10);
testLinkedList.push(13);
testLinkedList.push(22);


testLinkedList.reverse();

console.log(testLinkedList);
// LinkedList {
//     head: Node { value: 4, next: null },
//     tail: Node { value: 4, next: null },
//     length: 1
//   }

// LinkedList {
//     head: Node { value: 5, next: Node { value: 6, next: null } },
//     tail: Node { value: 6, next: null },
//     length: 2
//   }