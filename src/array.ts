// Array
let user: string[] = ["Alice", "Bob", "Charlie"];
console.log(user);
let scores: number[] = [10, 20, 30];
let scoresAlt: Array<number> = [10, 20, 30];
console.log(scores);
console.log(scoresAlt);

// Challenge
let price: (number | string)[] = [10, "20", 30];
let prices: Array<number | string> = [10, "20", 30];
console.log(price);
console.log(prices);
