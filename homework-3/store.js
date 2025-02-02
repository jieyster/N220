let price = 40.99;
// price might change
const tax = .07;
// tax shouldn't change
const total = price * (1 + tax);
// equation shouldn't change
console.log("total", (total).toFixed(2));

console.log("qualifies?", price > 50);

let discount = .10;
// discount might change
const discountTotal = price * (1 + tax) * (1 - discount);
// equation shouldn't change
console.log("discount total", (discountTotal).toFixed(2));