let user: [number, string, string] = [1, "Asif", "Ali"];
console.log(user);

type Role = "Admin" | "User";

function checkAccess(role: Role) {
  if (role === "Admin") return console.log("Full Acccess");
  else console.log("Limited Access");
}

checkAccess("Admin");
checkAccess("User");

// const Small = 1;
// const Medium = 2;
// const Large = 3;
enum Size {
  Small = 1,
  Medium,
  Large,
}

const smSize: Size = Size.Small;
console.log(smSize);
const mdSize: Size = Size.Medium;
console.log(mdSize);
const lgSize: Size = Size.Large;
console.log(lgSize);
