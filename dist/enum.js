"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
const user1 = { id: 1, name: "Asif", role: Role.Admin };
const user2 = { id: 2, name: "Ali", role: Role.User };
const user3 = { id: 3, name: "Asim", role: Role.Guest };
if (user1.role === Role.Admin) {
    console.log("Access granted to admin panel");
}
if (user2.role === Role.User) {
    console.log("Access granted to user panel");
}
if (user3.role === Role.Guest) {
    console.log("Access granted to Guest panel");
}
//# sourceMappingURL=enum.js.map