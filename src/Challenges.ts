type Order = { id: number; items: number[]; total: number };
function calculateTotal(items: number[]): number {
  return items.reduce((sum, price) => sum + price, 0);
}
const order: Order = {
  id: 101,
  items: [100, 200, 50],
  total: calculateTotal([100, 200, 50]),
};
console.log(order);

// Final Challenge 🚀 (Mini Project)
//  Build This:
// User type
// users: User[]
// Function addUser(users, user)
// Function getActiveUsers(users)
// 💡 No any, strict mode ON
type User = { id: number; name: string; email: string; isActive: boolean };
function addUser(users: User[], user: User): void {
  users.push(user);
}
function getActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}

const users: User[] = [];

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
