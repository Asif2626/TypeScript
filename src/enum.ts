enum Role {
  Admin,
  User,
  Guest,
}

type User = { id: number; name: string; role: Role };
const user1: User = { id: 1, name: "Asif", role: Role.Admin };
const user2: User = { id: 2, name: "Ali", role: Role.User };
const user3: User = { id: 3, name: "Asim", role: Role.Guest };
if (user1.role === Role.Admin) {
  console.log("Access granted to admin panel");
}
if (user2.role === Role.User) {
  console.log("Access granted to user panel");
}
if (user3.role === Role.Guest) {
  console.log("Access granted to Guest panel");
}
