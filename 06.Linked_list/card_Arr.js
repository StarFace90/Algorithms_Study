const input = 6;


let cards = [];

for (let i = 1; i <= input; i++) {
    cards.push(i);
}

while (cards.length !== 1) {
    cards.shift();
    cards.push(cards.shift());
}

console.log("맨마지막 남은 카드는?", cards[0]);