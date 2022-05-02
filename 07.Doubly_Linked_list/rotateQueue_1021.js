function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoublyLinkedList.prototype.push = function (value) {
    const newNode = new Node(value);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
}

DoublyLinkedList.prototype.pop = function () {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
}

DoublyLinkedList.prototype.shift = function () {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
    }
    this.length--;
    return oldHead;
}

DoublyLinkedList.prototype.unshift = function (value) {
    const newNode = new Node(value);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
}


DoublyLinkedList.prototype.insert = function (index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
}

DoublyLinkedList.prototype.remove = function (index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removeNode = this.get(index);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removeNode.next = null;
    removeNode.prev = null;

    this.length--;
    return removeNode;
}

DoublyLinkedList.prototype.size = function () {
    return this.length;
}

// 맨 앞 노드를 맨 뒤로 
DoublyLinkedList.prototype.pushFirstNode = function (n = 1) {
    while (n > 0) {
        if (this.length > 1) {

            this.tail = this.head; // 맨 앞 노드는 -> 꼬리
            this.head = this.head.next; // 머리는 -> (다음 노드였던..)
        }
        n--;
    }
}

// 맨 뒤 노드를 맨 앞으로
DoublyLinkedList.prototype.unshiftLastNode = function (n = 1) {
    while (n > 0) {
        if (this.length > 1) {

            this.head = this.tail;
            this.head = this.tail.prev;
        }
        n--;
    }
}

// 2번, 3번 연산의 최소 값을 위한 함수 
DoublyLinkedList.prototype.searchCul = (value) => {

    if (this.length <= 1) {
        return 0;
    }
    else {
        let currentNode = this.head;
        let firstCount = 0; // 왼쪽으로 한칸 (연산)
        let secondCount = 0;// 오른쪽으로 한칸 (연산)
        console.log("this Head", this.head);
        while (currentNode.value !== value) {
            // console.log("this Head2", currentNode);
            currentNode = currentNode.next;
            firstCount++;
        }
        currentNode = this.head;
        while (currentNode.value !== value) {
            currentNode = currentNode.prev;
            secondCount++;
        }


        if (firstCount < secondCount) {
            this.pushFirstNode(firstCount);
            this.shift();
            return secondCount;
        } else {
            this.unshiftLastNode(secondCount);
            this.shift();
            return firstCount;
        }
    }
}

// 1줄 큐의 크기 N과 뽑아내려고 하는 수의 개수 M
// 2줄 뽑아내려고 하는 수의 위치가 순서대로


let n = 10;
let m = 3;
let arr = [2, 9, 5];


let rotate = new DoublyLinkedList();
rotate.searchCul()
for (let i = 1; i <= n; i++) {
    rotate.push(i);
}

console.log("결과",
    arr.reduce(function (acc, cur) {
        acc + rotate.searchCul(cur), 0
    }));




// rotate.push(1);
// rotate.push(2);
// rotate.push(3);
// rotate.push(4);

// rotate.unshiftLastNode();

// console.log(rotate);


