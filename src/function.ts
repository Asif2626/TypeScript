// Function
function calTax(price: number): number {
  return price * 0.8;
}
console.log(calTax(10));

function greet(name: string, title?: string): string {
  if (title) return `Hello ${title} ${name}`;
  return `Hello ${name}`;
}
console.log(greet("Asif", "Developer"));

type User = { id: number; name: string; email?: string; isActive: boolean };
function createUser(name: string): User {
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
function applyDiscount(price: number, discount: number): number {
  //   const finalPrice = price - discount;
  const finalPrice = price - (price * discount) / 100;
  return finalPrice;
}
console.log(applyDiscount(150, 50));

function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) return income * 0.2;
  return income * 0.3;
}
console.log(calculateTax(10000, 2022));
