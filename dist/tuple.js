"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = [1, "Asif", "Ali"];
console.log(user);
function checkAccess(role) {
    if (role === "Admin")
        return console.log("Full Acccess");
    else
        console.log("Limited Access");
}
checkAccess("Admin");
checkAccess("User");
// const Small = 1;
// const Medium = 2;
// const Large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
const smSize = Size.Small;
console.log(smSize);
const mdSize = Size.Medium;
console.log(mdSize);
const lgSize = Size.Large;
console.log(lgSize);
//# sourceMappingURL=tuple.js.map