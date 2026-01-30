"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotal(items) {
    return items.reduce((sum, price) => sum + price, 0);
}
const order = {
    id: 101,
    items: [100, 200, 50],
    total: calculateTotal([100, 200, 50]),
};
console.log(order);
function addUser(users, user) {
    users.push(user);
}
function getActiveUsers(users) {
    return users.filter((user) => user.isActive);
}
const users = [];
addUser(users, {
    id: 1,
    name: "Asif",
    email: "test@gmail.com",
    isActive: true,
});
addUser(users, {
    id: 2,
    name: "Ali",
    email: "ali@gmail.com",
    isActive: false,
});
addUser(users, {
    id: 3,
    name: "Naeem",
    email: "N@gmail.com",
    isActive: true,
});
addUser(users, {
    id: 4,
    name: "Faheem",
    email: "f@gmail.com",
    isActive: false,
});
console.log("All Users:", users);
console.log("Active Users:", getActiveUsers(users));
//# sourceMappingURL=Challenges.js.map