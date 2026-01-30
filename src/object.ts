// Object
let users: { id: number; name: string }[] = [
  { id: 1, name: "asif" },
  { id: 2, name: "ali" },
];
console.log(users);

let obj: { id: number; name: string; email?: string; isActive: boolean } = {
  id: 1,
  name: "Asif",
  email: "test@gmail.com",
  isActive: true,
};
console.log(obj);

// using type
type User = { id: number; name: string; email?: string; isActive: boolean };
let user: User = {
  id: 1,
  name: "Asif",
  email: "test@gmail.com",
  isActive: true,
};
console.log(user);

// Create a Product type with:
type Product = { id: number; name: string; price: number; inStock: boolean };
const products: Product[] = [
  { id: 1, name: "laptop", price: 20000, inStock: true },
  { id: 2, name: "Phone", price: 10000, inStock: false },
];
console.log(products);
