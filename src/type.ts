type User = { id: number; name: string };
function getUserName(user: User) {
  return user;
}
const user1 = { id: 1, name: "Asif" };
console.log(getUserName(user1));
const user2 = { id: 2, name: "Asim" };
console.log(getUserName(user2));
const user3 = { id: 3, name: "Ali" };
console.log(getUserName(user3));
