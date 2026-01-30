"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function
function calTax(price) {
    return price * 0.8;
}
console.log(calTax(10));
function greet(name, title) {
    if (title)
        return `Hello ${title} ${name}`;
    return `Hello ${name}`;
}
console.log(greet("Asif", "Developer"));
function createUser(name) {
    return {
        id: Date.now(),
        name,
        isActive: true,
    };
}
console.log(createUser("asif"));
// Challenge 3
// name: applyDiscount
// takes: price: number, discount: number
// returns: final price (number)
function applyDiscount(price, discount) {
    //   const finalPrice = price - discount;
    const finalPrice = price - (price * discount) / 100;
    return finalPrice;
}
console.log(applyDiscount(150, 50));
//# sourceMappingURL=function.js.map