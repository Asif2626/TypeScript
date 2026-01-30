// Types
var userName = "John";
var age = 30;
var isAdmin = false;
var user = null;
var token;
var id;
id = 1;
id = "abc";
console.log(userName, age, isAdmin, user, token, id);
function calculateTotal(items) {
    return items.reduce(function (sum, price) { return sum + price; }, 0);
}
var order = {
    id: 101,
    items: [100, 200, 50],
    total: calculateTotal([100, 200, 50]),
};
console.log(order);
function addUser(users, user) {
    users.push(user);
}
function getActiveUsers(users) {
    return users.filter(function (user) { return user.isActive; });
}
var users = [];
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
